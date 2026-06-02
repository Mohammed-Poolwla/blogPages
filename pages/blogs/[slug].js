import Head from "next/head";
import Script from "next/script";
import Layout from "@/components/layout";

// pages/blogs/[slug].js
import { BlogsTable, db } from "../../lib/db";
// import fs from 'fs';
import Markdown from "markdown-to-jsx";
import { eq } from "drizzle-orm";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

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
      topic: blog.topic || null,
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
  id,
  topic
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
        <meta property="og:image" content={image} />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://websrc.uk'}/blogs/${slug}`} />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:title" content={`Blog - ${title}`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Script
        id="adsbygoogle-init"
        strategy="afterInteractive"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9979240102739736"
        crossOrigin="anonymous"
      />

      {/* Main Content */}
      <section className="parallax-hero">
        <div className="parallax-layer layer-grid" />
        <div className="parallax-layer layer-glow" />
        <div className="relative max-w-6xl mx-auto p-4 pt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <article className="lg:col-span-8 rounded-2xl border border-white/10 bg-white p-6 sm:p-8 shadow-xl">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-700 mb-3">WEBSRC Blog</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">{title}</h1>
            {topic && (
              <div className="mb-3 text-sm">
                <span className="text-gray-600">Category: </span>
                <Link href={{ pathname: "/blogs", query: { category: topic } }} className="font-medium text-blue-700 hover:underline">{topic}</Link>
              </div>
            )}
            {(keywords || undefined) && (
              <div className="mb-5 flex flex-wrap gap-2 text-xs">
                {keywords?.split(',').map((t) => t.trim()).filter(Boolean).slice(0, 6).map((t) => (
                  <Link key={t} href={{ pathname: "/blogs", query: { tag: t } }} className="px-2 py-1 rounded-full bg-slate-100 border border-slate-300 text-slate-700 hover:bg-slate-200">{t}</Link>
                ))}
              </div>
            )}
            <CldImage
              src={image}
              height={343}
              width={600}
              alt={slug}
              crop={{
                type: "auto",
                source: true,
              }}
              className="w-full rounded-xl shadow-lg mb-6"
            />
            <p className="text-gray-600 mb-6 quote">{quote}</p>

            <div className="prose prose-slate max-w-none text-gray-700">
              <Markdown>{content}</Markdown>
            </div>

            <div className="mt-10 border-t border-slate-200 pt-5">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Share this article</h3>
              <div className="flex items-center gap-3 text-gray-600">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL || 'https://websrc.uk'}/blogs/${slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Twitter"
              className="hover:text-blue-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.951.564-2.005.974-3.127 1.195-.897-.959-2.178-1.558-3.594-1.558-2.723 0-4.928 2.205-4.928 4.917 0 .39.045.765.127 1.124-4.094-.205-7.725-2.165-10.157-5.144-.424.722-.666 1.561-.666 2.475 0 1.708.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.6 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.395 0-.779-.023-1.17-.067 2.179 1.397 4.768 2.212 7.557 2.212 9.054 0 14.002-7.496 14.002-13.986 0-.21 0-.423-.015-.637.961-.695 1.8-1.562 2.46-2.549z" />
              </svg>
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL || 'https://websrc.uk'}/blogs/${slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Facebook"
              className="hover:text-blue-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M22.675 0h-21.35C.595 0 0 .593 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.764v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .593 23.406 0 22.675 0z" />
              </svg>
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL || 'https://websrc.uk'}/blogs/${slug}`)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description || '')}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
              className="hover:text-blue-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M20.447 20.452H17.21V14.69c0-1.377-.027-3.148-1.918-3.148-1.919 0-2.213 1.498-2.213 3.045v5.865H9.84V9h3.112v1.561h.044c.434-.82 1.495-1.685 3.074-1.685 3.29 0 3.894 2.164 3.894 4.977v6.599zM5.337 7.433c-1.004 0-1.818-.816-1.818-1.823 0-1.008.814-1.824 1.818-1.824 1.005 0 1.82.816 1.82 1.824 0 1.007-.815 1.823-1.82 1.823zM6.556 20.452H4.118V9h2.438v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
              </div>
            </div>
          </article>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-4">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
                <h3 className="text-lg font-semibold text-white mb-3">Article navigation</h3>
                <ul className="text-sm text-slate-200 space-y-2 list-disc list-inside">
                  <li><a href="#" className="hover:underline">Back to top</a></li>
                  <li><Link href="/blogs" className="hover:underline">All blogs</Link></li>
                </ul>
              </div>
              {(keywords || undefined) && (
                <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
                  <h4 className="text-sm font-semibold mb-2 text-white">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {keywords?.split(',').map((t) => t.trim()).filter(Boolean).map((t) => (
                      <Link key={t} href={{ pathname: "/blogs", query: { tag: t } }} className="px-2 py-1 rounded-full border border-white/30 text-xs text-slate-100 hover:bg-white/10">
                        {t}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              <div className="rounded-2xl border border-cyan-300/40 bg-cyan-300/10 p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-100 mb-2">Need similar results?</p>
                <p className="text-sm text-slate-100">WEBSRC builds high-performance products and content systems with measurable outcomes.</p>
                <Link href="/contact" className="mt-4 inline-flex text-sm font-semibold text-cyan-100 hover:text-white">Start a project →</Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
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
              htmlFor="topic"
              className="block text-sm font-medium text-gray-700"
            >
              Category (topic)
            </label>
            <input
              type="text"
              name="topic"
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
