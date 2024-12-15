import { db, BlogsTable } from "@/lib/db";
import { eq } from "drizzle-orm";

import { generateThumbnailImage } from "../../lib/generateBlog";
import uploadImage from "../../lib/imageUpload";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const data = req.body;
    const imageName = data.slug + "-" + Date.now();
    const image = await generateThumbnailImage(data.title, data.topic);
    let storeImage;
    if (image) {
      storeImage = await uploadImage(image, imageName);
      await db
        .update(BlogsTable)
        .set({ image: storeImage?.public_id })
        .where(eq(BlogsTable.id, data.id));
    }

    return res.status(200).json({
      message: "Blog updated successfully",
      storeImage,
      image,
    });
  } catch (error) {
    console.error("Error updating blog:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
