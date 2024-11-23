import { db, BlogsTable } from "@/lib/db";
import { eq } from "drizzle-orm";

// interface BlogData {
//   id: number;
//   slug?: string;
//   title?: string;
//   image?: string;
//   description?: string;
//   keywords?: string;
//   quote?: string;
//   content?: string;
// }

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const data = req.body;

    // Validate `id` field
    if (!data.id) {
      return res.status(400).json({ error: "Blog ID is required" });
    }
    // Update the blog entry in the database
    const updatedBlog = await db
      .update(BlogsTable)
      .set(data)
      .where(eq(BlogsTable.id, data.id));

    return res.status(200).json({
      message: "Blog updated successfully",
      updatedBlog,
    });
  } catch (error) {
    console.error("Error updating blog:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
