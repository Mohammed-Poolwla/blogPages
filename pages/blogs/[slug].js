import Head from "next/head";
import Layout from "@/components/layout";

// pages/blogs/[slug].js
import { BlogsTable, db } from "../../lib/db";
// import fs from 'fs';
import Markdown from "markdown-to-jsx";
import { eq } from "drizzle-orm";
import { CldImage } from "next-cloudinary";

export async function getStaticPaths() {
  const blogs = await db.select().from(BlogsTable);

  const paths = blogs.map((blog) => ({
    params: { slug: blog.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const blogs = await db
    .select()
    .from(BlogsTable)
    .where(eq(BlogsTable.slug, params.slug))
    .limit(1);
  const blog = blogs[0];
  return {
    props: {
      id: blog.id,
      title: blog.title,
      content: blog.content,
      image: blog.image,
      slug: blog.slug,
      description: blog.description,
      keywords: blog.keywords,
      quote: blog.quote,
    },
  };
}

const BlogPost = ({
  title,
  content,
  image,
  description,
  keywords,
  quote,
  slug,
  id
}) => {
  const handleSubmit = async (e) => {
   // Create a FormData object from the form
  const formData = new FormData(e.target);
  formData.append('id', id);
  // Convert FormData into a plain object
  const data = Object.fromEntries(formData.entries());
  
  e.preventDefault();
  
    try {
      const response = await fetch('/api/updateBlog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        const result = await response.json();
        alert(`Blog updated successfully: ${JSON.stringify(result)}`);
      } else {
        const error = await response.json();
        alert(`Error: ${error.error}`);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An unexpected error occurred.");
    }
  };
  
  return (
    <Layout>
      {/* Meta Tags */}
      <Head>
        <title>Blog - {title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="WebSRC" />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content={`Blog - ${title}`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`/images/${image}`} />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:title" content={`Blog - ${title}`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`/images/${image}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-3xl font-semibold text-gray-900 mb-4">{title}</h1>
        <CldImage
          src={image} // Use this sample image or upload your own via the Media Explorer
          height={343}
          width={600}
          alt={slug}
          crop={{
            type: "auto",
            source: true,
          }}
          className="rounded-lg shadow-lg mb-6"
        />
        <p className="text-gray-600 mb-4 quote">{quote}</p>

        <div className="prose text-gray-700">
          <Markdown>{content}</Markdown>
        </div>
      </div>
      { process.env.DEV_ENV === 'development' && (
        
      
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-md shadow-md space-y-4">
          <div>
            <label
              htmlFor="slug"
              className="block text-sm font-medium text-gray-700"
            >
              Slug
            </label>
            <input
              type="text"
              name="slug"
              defaultValue={slug}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              defaultValue={title}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image
            </label>
            <input
              type="text"
              name="image"
              defaultValue={image}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <input
              type="text"
              name="description"
              defaultValue={description}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="keywords"
              className="block text-sm font-medium text-gray-700"
            >
              Keywords
            </label>
            <input
              type="text"
              name="keywords"
              defaultValue={keywords}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="quote"
              className="block text-sm font-medium text-gray-700"
            >
              Quote
            </label>
            <input
              type="text"
              name="quote"
              defaultValue={quote}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700"
            >
              Content
            </label>
            <textarea
              name="content"
              defaultValue={content}
              rows="4"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      )
      }
    </Layout>
  );
};

export default BlogPost;
