// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
// eslint-disable-next-line @typescript-eslint/no-var-requires
const OpenAI = require("openai");

const baseInstruction = `
Write in a conversational tone as if sharing a personal experience or telling a story. Use anecdotes, relatable examples, and informal language that resonates with a UK audience. Focus on nuanced analysis, balancing emotional engagement and subjective opinions. Avoid being overly formal or fact-focused. Include rhetorical questions, humour, and imperfections to make the text feel human-written. Where relevant, connect the topic to real-world examples or current events that might be familiar or relatable to people in the UK.
1) Start the content with a quote relevant to the blog topic. Enclose the quote in {{quote_start}} and {{quote_end}} markers for JavaScript extraction. Example: {{quote_start}}Your inspirational quote here.{{quote_end}}
2) Write the blog content in a detailed and engaging manner, maintaining a conversational tone. Ensure it is suitable for a 30-minute read and keeps the audience's attention. Use headings to logically structure the content and avoid repetition. Only avoid a blog title.
3) Ensure the content is logically structured, engaging, and provides value to the reader. Avoid using a rigid tone.
4) After completing the blog, write a short description for the meta tag, enclosed in {{description_start}} and {{description_end}} markers.
5) Write a list of keywords for the meta tag, enclosed in {{keywords_start}} and {{keywords_end}} markers. Separate keywords with commas.
6) Make sure the output is well-formatted, concise, and avoids unnecessary repetition.
`;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateBlogContent(prompt, title) {
  const maxTokens = 4096;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: baseInstruction },
        { 
          role: "user", 
          content: `Write a 30-minute read blog on the topic: “${title}” using the following prompt:
${prompt}`
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
