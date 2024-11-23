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

async function generateThumbnailImage(prompt, topic) {
  try {
    // const response = await openai.images.generate({
    //   prompt: `Main Theme: ${prompt}
    //     It should be colorful, realistic, minimalistic, and somewhat of a challenge to replicate.
    //     It should only contain the “Main Theme” and no other elements in the foreground, background or surrounding space.
    //     It should contain the “Main Theme” only once with no margins above, below or on either side.
    //     The “Main Theme” should consume the entire 1024x1024 space.
    //     It should not divide the “Main Theme” into separate parts of the image nor imply any variations of it.
    //     It should not contain any text, labels, borders, measurements nor design elements of any kind.
    //     The image should be suitable for digital printing without any instructional or guiding elements.`,
    //   n: 1, // Number of images to generate
    //   size: "512x512", // Image size
    //   response_format: "b64_json",
    // });
    // return response.data[0].b64_json;
    // const options = {
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json', 'x-freepik-api-key': 'FPSXfe5e9cb537d54062a601a731acafc881'},
    //   body: `{"num_images":1,"image":{"size":"widescreen_16_9"},"prompt":${prompt}}`
    // };
    
    // await  fetch('https://api.freepik.com/v1/ai/text-to-image', options)
    //   .then(response => response.json())
    //   .then(response => {
    //     console.log('response',  response)
    //     return response
    //   })
    //   .catch(err => console.error(err));

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-freepik-api-key': 'FPSXfe5e9cb537d54062a601a731acafc881' // Replace with your valid API key
      },
      body: JSON.stringify({
        num_images: 1,
        image: { size: 'widescreen_16_9' },
        prompt: `Create a visually engaging image inspired by the topic "${topic}" and the title "${prompt}". Use illustrative elements, symbols, or abstract visuals that represent the theme effectively, without including any text.` // Assuming prompt is a valid string variable
      })
    };
    
    try {
      const response = await fetch('https://api.freepik.com/v1/ai/text-to-image', options);
      // Check if response is JSON
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const jsonResponse = await response.json();
        return jsonResponse.data[0].base64;
      } else {
        const textResponse = await response.text(); // Capture HTML or unexpected response
        console.error('Unexpected response format:', textResponse);
        throw new Error('API did not return JSON');
      }
    } catch (err) {
      console.error('Error occurred:', err.message);
    }
    
      return null;
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
  const topic = title;
  try {
    // Generate blog content
    const blogPost = await generateBlogContent(userPrompt, topic);

    // Generate SEO title
    const seoTitle = await generateSEOKeywordsTitle(blogPost);

    // Generate thumbnail image
    const thumbnailImage = await generateThumbnailImage(seoTitle, topic);

    const image = thumbnailImage ? thumbnailImage : null;

    return { content: blogPost,seoTitle, image };
  } catch (error) {
    return { error: `Failed to generate blog: ${error.message}` };
  }
};

module.exports = {
  generateBlogFromChatGPT,
};
