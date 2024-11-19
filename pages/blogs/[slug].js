import Image from 'next/image'

// pages/blogs/[slug].js
import { BlogsTable, db } from '../../lib/db';
// import fs from 'fs';
import Markdown from 'markdown-to-jsx';


export async function getStaticPaths() {
  const blogs = await db.select().from(BlogsTable);


  const paths = blogs.map((blog) => ({
    params: { slug: blog.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const blogs = await db.select().from(BlogsTable).where(BlogsTable.slug === params.slug);
  const blog = blogs[0];

  return {
    props: {
      title: blog.title,
      content: blog.content,
      image:blog.image,
    },
  };
}

const BlogPost = ({ title, content, image }) => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-semibold text-gray-900 mb-4">{title}</h1>

      <Image
        src={`/images/${image}`}
        alt={title}
        height={500}
        width={500}
        className="rounded-lg shadow-lg mb-6"
      />

      <div className="prose text-gray-700">
        <Markdown>{content}</Markdown>
      </div>
    </div>
  );
};


export default BlogPost;
