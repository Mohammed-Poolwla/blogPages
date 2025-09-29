import Script from "next/script";
import Layout from "@/components/layout";
import Link from "next/link";
import { useMemo } from "react";
import { CldImage } from "next-cloudinary";
import { db, BlogsTable, TagsTable, BlogTagsTable } from "@/lib/db";
import { eq, inArray } from "drizzle-orm";
import type { GetStaticPaths, GetStaticProps } from "next";

interface Blog {
  slug: string;
  title: string;
  image: string;
  description: string;
  id: number;
  topic?: string | null;
  keywords?: string | null;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = await db.select().from(TagsTable);
  const paths = (tags || []).map((t: { name: string | null }) => ({ params: { name: String(t.name) } }));
  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const tagName = (context.params as { name?: string })?.name;

  const tags = await db
    .select()
    .from(TagsTable)
    // @ts-expect-error Drizzle SQL type identity mismatch across module instances
    .where(eq(TagsTable.name, String(tagName)))
    .limit(1);
  const tag = tags?.[0] || null;

  if (!tag) {
    return { notFound: true };
  }

  const blogTagLinks = await db
    .select()
    .from(BlogTagsTable)
    // @ts-expect-error Drizzle SQL type identity mismatch across module instances
    .where(eq(BlogTagsTable.tagId, tag.id));
  const blogIds = (blogTagLinks || []).map((bt: { blogId: number | null }) => bt.blogId).filter(Boolean);

  let blogs: Blog[] = [];
  if (blogIds.length > 0) {
    blogs = (await db
      .select()
      .from(BlogsTable)
      // @ts-expect-error Drizzle SQL type identity mismatch across module instances
      .where(inArray(BlogsTable.id, blogIds))) as unknown as Blog[];
  }

  return {
    props: {
      tagName,
      blogs,
    },
  };
};

export default function TagBlogsPage({ tagName, blogs }: { tagName: string; blogs: Blog[] }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://websrc.uk";

  const parseTags = useMemo(() => {
    return (keywords?: string | null): string[] => {
      if (!keywords) return [];
      return keywords
        .split(",")
        .map((k) => k.trim())
        .filter(Boolean);
    };
  }, []);

  return (
    <Layout>
      <Script
        id="adsbygoogle-init"
        strategy="afterInteractive"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9979240102739736"
        crossOrigin="anonymous"
      />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Tag: {tagName}</h1>
          <p className="text-gray-600">{blogs.length} result{blogs.length === 1 ? "" : "s"}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.slug} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
              <Link href={`/blogs/${blog.slug}`} className="block">
                <div className="relative">
                  <div className="bg-gray-300 h-48 w-full">
                    <CldImage
                      src={blog.image}
                      height={343}
                      width={600}
                      alt={blog.slug}
                      crop={{
                        type: "auto",
                        source: true,
                      }}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent text-white p-4 w-full">
                    <h3 className="text-xl font-semibold">{blog.title}</h3>
                    {(blog.topic || blog.keywords) && (
                      <div className="mt-1 text-xs text-gray-200 flex flex-wrap gap-2">
                        {blog.topic && (
                          <Link href={`/blogs/category/${encodeURIComponent(blog.topic)}`} className="px-2 py-0.5 rounded-full bg-black/40 border border-white/20 hover:bg-black/60">
                            {blog.topic}
                          </Link>
                        )}
                        {parseTags(blog.keywords).slice(0, 3).map((t) => (
                          <Link key={t} href={`/blogs/tag/${encodeURIComponent(t)}`} className="px-2 py-0.5 rounded-full bg-black/30 border border-white/10 hover:bg-black/50">
                            {t}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
              <div className="p-4">
                <p className="text-gray-700">{blog.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <Link href={`/blogs/${blog.slug}`} className="text-blue-600 hover:underline font-medium">
                    Read more
                  </Link>
                  <div className="flex items-center gap-3 text-gray-500">
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(`${baseUrl}/blogs/${blog.slug}`)}`}
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
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${baseUrl}/blogs/${blog.slug}`)}`}
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
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`${baseUrl}/blogs/${blog.slug}`)}&title=${encodeURIComponent(blog.title)}&summary=${encodeURIComponent(blog.description || '')}`}
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}


