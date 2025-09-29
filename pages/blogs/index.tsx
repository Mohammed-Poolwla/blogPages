import Head from "next/head";
import Script from "next/script";
import { BlogsTable, CategoriesTable, TagsTable, db } from "../../lib/db";
import Link from "next/link";
import Layout from "@/components/layout";
import { CldImage } from "next-cloudinary";
import { TrashIcon } from "@heroicons/react/24/solid"; // Import TrashIcon from Heroicons
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/router";

// Define the Blog type
interface Blog {
  slug: string;
  title: string;
  image: string;
  description: string;
  id: number;
  topic?: string | null;
  keywords?: string | null;
}

export async function getStaticProps() {
  const result = await db.select().from(BlogsTable);
  const blogs: Blog[] = result as Blog[];

  // Fetch categories and tags catalog from DB
  const categoriesResult = await db.select().from(CategoriesTable);
  const tagsResult = await db.select().from(TagsTable);
  const categories = (categoriesResult || [])
    .map((c: { name: string | null }) => c.name)
    .filter((name): name is string => Boolean(name))
    .sort((a, b) => a.localeCompare(b));
  const tags = (tagsResult || [])
    .map((t: { name: string | null }) => t.name)
    .filter((name): name is string => Boolean(name))
    .sort((a, b) => a.localeCompare(b));

  return {
    props: {
      blogs: blogs || [],
      categories,
      tags,
    },
  };
}

const BlogsPage = ({ blogs, categories, tags }: { blogs: Blog[]; categories: string[]; tags: string[] }) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const initializedFromQueryRef = useRef<boolean>(false);
  const PAGE_SIZE = 9;

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://websrc.uk";

  const parseTags = (keywords?: string | null): string[] => {
    if (!keywords) return [];
    return keywords
      .split(",")
      .map((k) => k.trim())
      .filter(Boolean);
  };

  const allCategories = useMemo(() => {
    return Array.from(new Set(["All", ...categories])).filter((c) => c !== "All");
  }, [categories]);

  const allTags = useMemo(() => {
    return Array.from(new Set(tags));
  }, [tags]);

  const filteredBlogs = useMemo(() => {
    const query = searchQuery.toLowerCase();
    const category = selectedCategory;
    const tag = selectedTag;
    const matches = blogs.filter((b) => {
      const text = `${b.title || ""} ${b.description || ""} ${b.keywords || ""}`.toLowerCase();
      const matchesSearch = !query || text.includes(query);
      const matchesCategory = category === "All" || (b.topic && b.topic === category);
      const tags = parseTags(b.keywords);
      const matchesTag = tag === "All" || tags.includes(tag);
      return matchesSearch && matchesCategory && matchesTag;
    });
    return matches;
  }, [blogs, searchQuery, selectedCategory, selectedTag]);

  const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / PAGE_SIZE));
  const currentPageSafe = Math.min(currentPage, totalPages);
  const pageItems = useMemo(() => {
    const start = (currentPageSafe - 1) * PAGE_SIZE;
    return filteredBlogs.slice(start, start + PAGE_SIZE);
  }, [filteredBlogs, currentPageSafe]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedTag("All");
    setCurrentPage(1);
  };

  const onChangeCategory = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const onChangeTag = (t: string) => {
    setSelectedTag(t);
    setCurrentPage(1);
  };

  // Initialize from query params once
  useEffect(() => {
    if (!router.isReady || initializedFromQueryRef.current) return;
    const { tag, category, q, page } = router.query;
    if (typeof q === "string") setSearchQuery(q);
    if (typeof category === "string" && category.trim()) setSelectedCategory(category);
    if (typeof tag === "string" && tag.trim()) setSelectedTag(tag);
    if (typeof page === "string") {
      const p = parseInt(page, 10);
      if (!Number.isNaN(p) && p >= 1) setCurrentPage(p);
    }
    initializedFromQueryRef.current = true;
  }, [router.isReady, router.query]);

  // Keep URL query in sync (shallow) when filters change
  useEffect(() => {
    if (!router.isReady) return;
    const query: Record<string, string> = {};
    if (searchQuery) query.q = searchQuery;
    if (selectedCategory !== "All") query.category = selectedCategory;
    if (selectedTag !== "All") query.tag = selectedTag;
    if (currentPage > 1) query.page = String(currentPage);
    router.replace({ pathname: "/blogs", query }, undefined, { shallow: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, selectedCategory, selectedTag, currentPage]);
  const deleteBlog = async (id: number) => {
    try {
      const response = await fetch(`/api/deleteBlog?id=${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message); // "Blog deleted successfully"
        alert(result.message);
      } else {
        const error = await response.json();
        console.error("Error:", error.error);
        alert(`Error: ${error.error}`);
      }
    } catch (err) {
      console.error("Network Error:", err);
      alert("An unexpected error occurred.");
    }
  };

  const reGenrateImage = async (data:Blog) => {
    try {
      const response = await fetch(`/api/reGenrateImage`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message); // "Blog deleted successfully"
        alert(result.message);
      } else {
        const error = await response.json();
        console.error("Error:", error.error);
        alert(`Error: ${error.error}`);
      }
    } catch (err) {
      console.error("Network Error:", err);
      alert("An unexpected error occurred.");
    }
  };

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <aside className="lg:col-span-3 space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-3">Search</h2>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search blogs..."
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-3">Categories</h2>
              <div className="flex flex-wrap gap-2 max-h-56 overflow-auto">
                <button
                  className={`px-3 py-1 rounded-full border ${selectedCategory === "All" ? "bg-blue-600 text-white border-blue-600" : "bg-gray-100 text-gray-800 border-gray-300"}`}
                  onClick={() => onChangeCategory("All")}
                >
                  All
                </button>
                {allCategories.map((cat) => (
                  <button
                    key={cat}
                    className={`px-3 py-1 rounded-full border ${selectedCategory === cat ? "bg-blue-600 text-white border-blue-600" : "bg-gray-100 text-gray-800 border-gray-300"}`}
                    onClick={() => onChangeCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-3">Tags</h2>
              <div className="flex flex-wrap gap-2 max-h-56 overflow-auto pr-1">
                <button
                  className={`px-3 py-1 rounded-full border ${selectedTag === "All" ? "bg-blue-600 text-white border-blue-600" : "bg-gray-100 text-gray-800 border-gray-300"}`}
                  onClick={() => onChangeTag("All")}
                >
                  All
                </button>
                {allTags.map((t) => (
                  <button
                    key={t}
                    className={`px-3 py-1 rounded-full border ${selectedTag === t ? "bg-blue-600 text-white border-blue-600" : "bg-gray-100 text-gray-800 border-gray-300"}`}
                    onClick={() => onChangeTag(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={resetFilters}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                Reset filters
              </button>
            </div>
          </aside>

          <div className="lg:col-span-9">
            <div className="mb-4 text-sm text-gray-600">
              Showing {filteredBlogs.length} result{filteredBlogs.length === 1 ? "" : "s"}
              {selectedCategory !== "All" && <> in category <span className="font-medium">{selectedCategory}</span></>}
              {selectedTag !== "All" && <> with tag <span className="font-medium">{selectedTag}</span></>}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {pageItems.map((blog) => (
                <div
                  key={blog.slug}
                  className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden relative"
                >
                  {process.env.NODE_ENV === "development" && (
                    <>
                      <button
                        onClick={() => reGenrateImage(blog)}
                        className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 z-10"
                      >
                        Regenrate Image
                      </button>
                      <button
                        onClick={() => deleteBlog(blog.id)}
                        className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 z-10"
                      >
                        <TrashIcon className="h-6 w-6" />
                      </button>
                    </>
                  )}
                  <div
                    role="link"
                    tabIndex={0}
                    className="block cursor-pointer"
                    onClick={() => router.push(`/blogs/${blog.slug}`)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') router.push(`/blogs/${blog.slug}`); }}
                  >
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
                              <Link href={{ pathname: "/blogs", query: { category: blog.topic } }} className="px-2 py-0.5 rounded-full bg-black/40 border border-white/20 hover:bg-black/60">
                                {blog.topic}
                              </Link>
                            )}
                            {parseTags(blog.keywords).slice(0, 3).map((t) => (
                              <Link key={t} href={{ pathname: "/blogs", query: { tag: t } }} className="px-2 py-0.5 rounded-full bg-black/30 border border-white/10 hover:bg-black/50">
                                {t}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
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

            {totalPages > 1 && (
              <div className="mt-8 flex items-center justify-center gap-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPageSafe === 1}
                  className="px-3 py-1 rounded-md border border-gray-300 bg-white disabled:opacity-50"
                >
                  Prev
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => setCurrentPage(p)}
                    className={`px-3 py-1 rounded-md border ${p === currentPageSafe ? "bg-blue-600 text-white border-blue-600" : "bg-white border-gray-300"}`}
                  >
                    {p}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPageSafe === totalPages}
                  className="px-3 py-1 rounded-md border border-gray-300 bg-white disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogsPage;
