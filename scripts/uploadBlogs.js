// Required modules
const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');
const gpt = require('../lib/generateBlog');
const { BlogsTable, db } = require('../lib/db');
// const sql = require('@vercel/postgres');

function extractAndCleanContent(content) {
  // Helper function to extract text between markers and remove it from content
  const extractBetweenMarkers = (startMarker, endMarker) => {
    const regex = new RegExp(`${startMarker}([\\s\\S]*?)${endMarker}`, 'i');
    const match = content.match(regex);
    if (match) {
      content = content.replace(match[0], "").trim(); // Remove the matched section
      return match[1].trim();
    }
    return null;
  };

  // Extract quote, description, and keywords
  const quote = extractBetweenMarkers("{{quote_start}}", "{{quote_end}}");
  const description = extractBetweenMarkers("{{description_start}}", "{{description_end}}");
  const keywords = extractBetweenMarkers("{{keywords_start}}", "{{keywords_end}}");

  // Return the cleaned content and extracted metadata
  return {
    cleanedContent: content,
    metadata: { quote, description, keywords },
  };
}



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

      const {cleanedContent, metadata} = extractAndCleanContent(content);

      // Insert blog post into DB
      const title = seoTitle;
      const persona = Prompt;
      const topic = Topic;
      const blog = {
        title: title,
        content: cleanedContent,
        image: imageName,
        slug,
        persona,
        topic,
        description: metadata.description,
        quote: metadata.quote,
        keywords: metadata.keywords
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
