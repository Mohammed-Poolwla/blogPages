// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
// eslint-disable-next-line @typescript-eslint/no-var-requires
const OpenAI = require("openai");

const baseInstruction = `
Write in a conversational tone as if sharing a personal experience or telling a story. Use anecdotes, relatable examples, and informal language. Focus on nuanced analysis, balancing emotional engagement and subjective opinions. Avoid being overly formal or fact-focused. Include rhetorical questions, humor, and imperfections to make the text feel human-written. Where relevant, connect the topic to real-world examples or current events.
`;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateBlogContent(prompt, title) {
  const maxTokens = 2048;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: baseInstruction },
        { 
          role: "user", 
          content: `Write a 15-minute read blog on “${title}”. 
1) Start with one quote relevant to the blog at the top.
2) Ensure the blog is detailed and not too short.
3) Ensure the blog is engaging and interesting.
4) Ensure the blog is written in a conversational tone.`
        },
      ],
      max_tokens: maxTokens,
      temperature: 0.7,
    });
    return response.choices[0].message.content;
  } catch (error) {
    return `An error occurred: ${error.response ? error.response.data.error.message : error.message}`;
  }
}

async function generateThumbnailImage(prompt) {
  try {
    const response = await openai.images.generate({
      prompt,
      n: 1, // Number of images to generate
      size: "512x512", // Image size
      response_format: "b64_json",
    });
    return response.data[0].b64_json;
  } catch (error) {
    return `An error occurred: ${error.response ? error.response.data.error.message : error.message}`;
  }
}

async function generateSEOKeywordsTitle(blogContent) {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "Generate an SEO-optimized title with the most searchable keywords for the given blog content." },
          { role: "user", content: blogContent },
        ],
        temperature: 0.7,
      });
  
      return response.choices[0].message.content.trim();
    } catch (error) {
      return `An error occurred: ${error.response ? error.response.data.error.message : error.message}`;
    }
  }
  

const generateBlogFromChatGPT = async (userPrompt, title) => {
  try {
    // Generate blog content
    const blogPost = await generateBlogContent(userPrompt, title);

    // Generate SEO title
    const seoTitle = await generateSEOKeywordsTitle(blogPost);

    // Generate thumbnail image
    const thumbnailImage = await generateThumbnailImage(seoTitle);

    const image = thumbnailImage ? thumbnailImage : null;

    return { content: blogPost,seoTitle, image };
  } catch (error) {
    return { error: `Failed to generate blog: ${error.message}` };
  }
};

module.exports = {
  generateBlogFromChatGPT,
};
