import Image from "next/image";
import Head from "next/head";
import Layout from "@/components/layout";

// pages/blogs/[slug].js
import { BlogsTable, db } from "../../lib/db";
// import fs from 'fs';
import Markdown from "markdown-to-jsx";
import { eq } from "drizzle-orm";

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

const BlogPost = ({ title, content, image, description, keywords, quote }) => {
  return (
    <Layout>
      {/* Meta Tags */}
      <Head>
        <title>Blog - {title}</title>
        <meta
          name="description"
          content={description}
        />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="WebSRC" />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content={`Blog - ${title}`} />
        <meta
          property="og:description"
          content={description}
        />
        <meta property="og:image" content={`/images/${image}`} />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:title" content={`Blog - ${title}`} />
        <meta
          name="twitter:description"
          content={description}
        />
        <meta name="twitter:image" content={`/images/${image}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-3xl font-semibold text-gray-900 mb-4">{title}</h1>

        <Image
          src={`/images/${image}`}
          alt={title}
          height={343}
          width={600}
          className="rounded-lg shadow-lg mb-6"
        />

        <p className="text-gray-600 mb-4 quote">{quote}</p>

        <div className="prose text-gray-700">
          <Markdown>{content}</Markdown>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
