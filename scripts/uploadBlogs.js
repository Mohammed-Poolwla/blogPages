// Required modules
const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');
const gpt = require('../lib/generateBlog');
const { BlogsTable, db } = require('../lib/db');
// const sql = require('@vercel/postgres');



const uploadBlogs = async (file) => {
  const filePath = path.join(__dirname, file);
  const workbook = xlsx.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows = xlsx.utils.sheet_to_json(sheet);


  for (const row of rows) {
    const { Topic, Prompt } = row;

    try {
      // Generate blog content and image
      const { content,seoTitle, image } = await gpt.generateBlogFromChatGPT(Prompt, Topic);

      if (!content || typeof content !== 'string') {
        console.error(`Failed to generate content for title: ${Topic}`);
        continue;
      }

      // Generate slug
      const slug = seoTitle.toLowerCase().replace(/[^a-z0-9]/g, '-');

      // Save image to /public/images
      let imageName = '';
      if (image) {
        imageName = `${slug}.jpg`;
        const imagePath = path.join(process.cwd(), 'public', 'images', imageName);
        fs.writeFileSync(imagePath, image, 'base64');
      }

      // Insert blog post into DB
      const title = seoTitle;
      const persona = Prompt;
      const topic = Topic;
      const blog = {
        title: title,
        content,
        image: imageName,
        slug,
        persona,
        topic
      };
      await db.insert(BlogsTable).values(blog);
    
      // await db.insert (
      //   'INSERT INTO blogs (title, content, image, slug, persona, topic) VALUES ($1, $2, $3, $4, $5, $6)',
      //   [title, content, imageName, slug, persona, topic]
      // );

      console.log(`Blog for "${Topic}" uploaded successfully.`);
    } catch (error) {
      console.error(`Failed to process row with title "${Topic}": ${error.message}`);
    }
  }

  await db.end();
};

uploadBlogs('./path_to_your_excel_file.xlsx')
  .then(() => console.log("Upload completed successfully."))
  .catch((error) => console.error(`Upload failed: ${error.message}`));
