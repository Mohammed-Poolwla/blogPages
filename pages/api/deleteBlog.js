
import { db, BlogsTable } from "@/lib/db";
import { eq } from "drizzle-orm";
import { v2 as cloudinary } from "cloudinary";

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { id } = req.query;

    // Validate that `id` is provided
    if (!id) {
      return res.status(400).json({ error: "Blog ID is required" });
    }

    // Fetch the blog to get image information
    const blog = await db.select().from(BlogsTable).where(eq(BlogsTable.id, Number(id))).limit(1);

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    // Delete the blog entry from the database
    const deleteResult = await db.delete(BlogsTable).where(eq(BlogsTable.id, Number(id)));

    if (deleteResult.rowsAffected === 0) {
      return res.status(404).json({ error: "Blog deletion failed" });
    }

    // If the blog has an associated image, delete it
    if (blog[0].image) {
        try {
            // Delete image from Cloudinary using its public ID
            const result = await cloudinary.uploader.destroy(blog[0].image);
            console.log(`Deleted image from Cloudinary: ${result}`);
          } catch (imageError) {
            console.error("Error deleting image from Cloudinary:", imageError);
          }
    }

    return res.status(200).json({ message: "Blog and related image deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
