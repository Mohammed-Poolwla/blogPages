/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout";
import { useMemo, useState } from "react";
import { CldImage } from "next-cloudinary";
import { BlogsTable, db } from "../lib/db";

type Blog = { slug: string; title: string; image: string; description: string };
type MediumPost = { title: string; link: string; pubDate?: string };
type GitHubInsights = { followers: number; publicRepos: number; totalStars: number; htmlUrl: string };
type StackOverflowInsights = { reputation: number; badges: { gold: number; silver: number; bronze: number }; topTags: string[]; link: string };

const HomePage = ({ blogs, medium, github, stackoverflow }: { blogs: Blog[]; medium: MediumPost[]; github: GitHubInsights; stackoverflow: StackOverflowInsights }) => {
  const projects = [
    {
      title: "saleshero.dk",
      image: "/landing-images/saleshero-dk.png",
      url: "https://saleshero.dk",
      summary: "B2B site performance revamp with Next.js and analytics.",
      tags: ["Web", "Performance"],
    },
    {
      title: "hyvv.io",
      image: "/landing-images/hyvv-io.png",
      url: "https://hyvv.io",
      summary: "Marketing site and CMS integration with editorial workflow.",
      tags: ["Web", "Content"],
    },
    {
      title: "butterflye.io",
      image: "/landing-images/butterflye-io.png",
      url: "https://butterflye.io",
      summary: "Design system and frontend component library.",
      tags: ["Web", "Design"],
    },
  ];

  const filters = ["All", "Web", "Content", "Performance", "Design"];
  const [filter, setFilter] = useState<string>("All");
  const filteredProjects = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter))),
    [filter]
  );
  return (
    <Layout>
      <Head>
        <title>webSRC — Full‑stack Developer & UK Pet Content</title>
        <meta name="description" content="Portfolio showcasing modern web apps and helpful blogs for UK pet owners. Explore services, projects, and contact webSRC." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "webSRC",
            url: "https://websrc.uk",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://websrc.uk/blogs?query={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }} />
      </Head>

      <section className="bg-gray-900 text-white hero-animated">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="max-w-7xl mx-auto px-6 py-24 sm:py-32 relative">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/80">
                <span className="h-2 w-2 rounded-full bg-green-400" /> Available for freelance
          </div>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
                Ship faster. Rank higher. Help people.
              </h1>
              <p className="mt-6 text-lg text-gray-300">
                I build performant Next.js apps and write in‑depth, practical content for UK pet owners.
                Explore selected work and the blog.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/services" className="btn-primary">Services</Link>
                <Link href="#projects" className="inline-flex items-center rounded-md border border-white/30 px-4 py-2 hover:bg-white/10">View projects</Link>
                <Link href="/blogs" className="inline-flex items-center rounded-md border border-white/30 px-4 py-2 hover:bg-white/10">Read the blog</Link>
            </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2"><span className="text-white font-semibold">10+</span> Projects</div>
                <div className="flex items-center gap-2"><span className="text-white font-semibold">5+</span> Years</div>
                <div className="flex items-center gap-2"><span className="text-white font-semibold">A</span> Core Web Vitals</div>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <div className="relative h-72 sm:h-96">
                <Image src="/landing-images/saleshero-dk.png" alt="Featured project: saleshero.dk" width={1600} height={1000} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">saleshero.dk</h3>
                    <p className="text-sm text-white/80">B2B performance revamp. +35% Lighthouse perf.</p>
                  </div>
                  <Link href="https://saleshero.dk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md bg-white px-3 py-1.5 text-gray-900 hover:bg-gray-200">Visit</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      <section id="projects" className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <h2 className="text-2xl font-semibold heading-gradient">Projects</h2>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`${filter === f ? "bg-gray-900 text-white" : "bg-white text-gray-700"} border border-gray-300 rounded-full px-3 py-1 text-sm hover:bg-gray-100`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((p, idx) => (
              <article key={p.title} className={`${idx === 0 ? "sm:col-span-2 lg:col-span-2" : ""} group card-modern overflow-hidden`}>
                <div className={`${idx === 0 ? "h-72" : "h-44"} relative overflow-hidden`}>
                  <Image src={p.image} alt={p.title} width={1600} height={1000} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute left-2 top-2 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full bg-white/90 px-2 py-0.5 text-xs text-gray-800 border border-gray-200">{t}</span>
                    ))}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white font-semibold">{p.title}</h3>
                    <Link href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md bg-white px-3 py-1.5 text-gray-900 hover:bg-gray-200">Case study</Link>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600">{p.summary}</p>
                </div>
              </article>
            ))}
            </div>
          </div>
        </section>

      <section className="bg-gray-50 bg-animated-grid">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-6 text-center">
              <div className="text-3xl font-bold text-gray-900">95+</div>
              <div className="mt-2 text-sm text-gray-600">Core Web Vitals (LCP/CLS best‑practice)</div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 text-center">
              <div className="text-3xl font-bold text-gray-900">10+</div>
              <div className="mt-2 text-sm text-gray-600">Production projects shipped</div>
                      </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 text-center">
              <div className="text-3xl font-bold text-gray-900">5+</div>
              <div className="mt-2 text-sm text-gray-600">Years building for the web</div>
                  </div>
                </div>
              </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold heading-gradient">For UK Pet Owners</h2>
          <p className="mt-2 text-gray-700 max-w-2xl">Clear, trustworthy guides covering pet nutrition, training, and UK‑specific regulations. Written to solve real problems with step‑by‑step advice.</p>
          <div className="mt-6 flex gap-4">
            <Link href="/blogs" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Browse blogs</Link>
            <Link href="/about" className="inline-flex items-center rounded-md border border-gray-300 px-4 py-2 hover:bg-white">About me</Link>
            </div>
          </div>
        </section>


      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h2 className="text-2xl font-semibold heading-gradient">From Medium</h2>
            <Link href="https://medium.com/@mohammed.poolwala_1888" target="_blank" className="text-sm text-blue-600 hover:underline">Follow on Medium</Link>
          </div>
          <div className	="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(medium || []).slice(0,3).map((p) => (
              <a key={p.link} href={p.link} target="_blank" rel="noopener noreferrer" className="block rounded-lg border border-gray-200 p-5 hover:bg-gray-50">
                <div className="text-sm text-gray-500">{p.pubDate || ""}</div>
                <div className="mt-1 font-semibold text-gray-900 line-clamp-2">{p.title}</div>
                <span className="mt-3 inline-flex text-sm text-blue-600">Read on Medium →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h2 className="text-2xl font-semibold heading-gradient">Latest articles</h2>
            <Link href="/blogs" className="text-sm text-blue-600 hover:underline">View all</Link>
          </div>
          <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {(blogs || []).slice(0, 3).map((b) => (
              <Link key={b.slug} href={`/blogs/${b.slug}`} className="group rounded-lg border border-gray-200 bg-white overflow-hidden block">
                <div className="h-40 relative">
                  <CldImage
                    src={b.image}
                    height={300}
                    width={600}
                    alt={b.slug}
                    crop={{ type: "auto", source: true }}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 line-clamp-2">{b.title}</h3>
                  <p className="mt-1 text-sm text-gray-600 line-clamp-2">{b.description}</p>
                  <span className="mt-3 inline-flex text-sm text-blue-600">Read article →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold heading-gradient">Process</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Scope", d: "Define the smallest valuable release." },
              { n: "02", t: "Build", d: "Type‑safe API, accessible UI, analytics." },
              { n: "03", t: "Measure", d: "Lighthouse, RUM, qualitative feedback." },
              { n: "04", t: "Iterate", d: "Ship improvements weekly." },
            ].map((s) => (
              <div key={s.n} className="rounded-lg border border-gray-200 p-6 bg-gray-50">
                <div className="text-xs text-gray-500">{s.n}</div>
                <div className="mt-2 text-lg font-semibold text-gray-900">{s.t}</div>
                <p className="mt-1 text-sm text-gray-700">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold heading-gradient">Services overview</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Web Apps", d: "Next.js apps with clean UI and great UX." },
              { t: "Mobile Apps", d: "React Native/Expo, shared codebases." },
              { t: "Laravel & APIs", d: "Auth, queues, REST/GraphQL." },
              { t: "E‑commerce", d: "Headless storefronts, analytics." },
            ].map((s) => (
              <div key={s.t} className="rounded-lg border border-gray-200 p-6 bg-white">
                <div className="text-lg font-semibold text-gray-900">{s.t}</div>
                <p className="mt-1 text-sm text-gray-700">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/services" className="btn-primary">Explore services</Link>
              </div>
            </div>
      </section>


      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold text-gray-900">Get in touch</h2>
          <p className="mt-2 text-gray-700">Have a project or content idea? Let’s talk.</p>
          <div className="mt-6">
            <Link href="/contact" className="btn-primary">Contact</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;

export async function getStaticProps() {
  try {
    const result = await db.select().from(BlogsTable).limit(3);
    const blogs = (result || []).map((b: any) => ({
      slug: b.slug,
      title: b.title,
      image: b.image,
      description: b.description,
    }));
    // Fetch Medium RSS (simple parsing for latest posts)
    const feedUrl = "https://medium.com/feed/@mohammed.poolwala_1888";
    let medium: MediumPost[] = [];
    try {
      const res = await fetch(feedUrl, { headers: { "Accept": "application/rss+xml, application/xml, text/xml" } });
      const xml = await res.text();
      const items = xml.split("<item>").slice(1).map((chunk) => "<item>" + chunk);
      medium = items.slice(0, 3).map((item) => {
        const get = (tag: string) => {
          const m = item.match(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`));
          return m ? m[1].replace(/<!\[CDATA\[/g, '').replace(/\]\]>/g, '').trim() : '';
        };
        return {
          title: get('title'),
          link: get('link'),
          pubDate: get('pubDate'), // keep as raw string to avoid client/server date formatting mismatch
        } as MediumPost;
      }).filter(p => p.title && p.link);
    } catch (_) {
      medium = [];
    }
    // GitHub insights
    const ghUser = "Mohammed-Poolwla";
    let github: any = { followers: 0, publicRepos: 0, totalStars: 0, htmlUrl: `https://github.com/${ghUser}` };
    try {
      const [userRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${ghUser}`),
        fetch(`https://api.github.com/users/${ghUser}/repos?per_page=100`),
      ]);
      const userJson: any = await userRes.json();
      const reposJson: any[] = await reposRes.json();
      const totalStars = Array.isArray(reposJson) ? reposJson.reduce((sum, r) => sum + (r?.stargazers_count || 0), 0) : 0;
      github = {
        followers: Number(userJson?.followers || 0),
        publicRepos: Number(userJson?.public_repos || 0),
        totalStars,
        htmlUrl: userJson?.html_url || `https://github.com/${ghUser}`,
      };
    } catch (_) {}

    // Stack Overflow insights
    const soUserId = 7057833;
    let stackoverflow: any = { reputation: 0, badges: { gold: 0, silver: 0, bronze: 0 }, topTags: [], link: `https://stackoverflow.com/users/${soUserId}` };
    try {
      const [userRes, tagsRes] = await Promise.all([
        fetch(`https://api.stackexchange.com/2.3/users/${soUserId}?order=desc&sort=reputation&site=stackoverflow`),
        fetch(`https://api.stackexchange.com/2.3/users/${soUserId}/top-tags?site=stackoverflow`),
      ]);
      const userJson: any = await userRes.json();
      const tagsJson: any = await tagsRes.json();
      const u = Array.isArray(userJson?.items) ? userJson.items[0] : undefined;
      const topTags = Array.isArray(tagsJson?.items) ? tagsJson.items.slice(0, 5).map((t: any) => t?.tag_name).filter(Boolean) : [];
      if (u) {
        stackoverflow = {
          reputation: Number(u.reputation || 0),
          badges: {
            gold: Number(u.badge_counts?.gold || 0),
            silver: Number(u.badge_counts?.silver || 0),
            bronze: Number(u.badge_counts?.bronze || 0),
          },
          topTags,
          link: u.link || `https://stackoverflow.com/users/${soUserId}`,
        };
      }
    } catch (_) {}

    return { props: { blogs, medium, github, stackoverflow }, revalidate: 3600 };
  } catch (e) {
    return { props: { blogs: [], medium: [], github: { followers: 0, publicRepos: 0, totalStars: 0, htmlUrl: "https://github.com/Mohammed-Poolwla" }, stackoverflow: { reputation: 0, badges: { gold: 0, silver: 0, bronze: 0 }, topTags: [], link: "https://stackoverflow.com/users/7057833/mohammed-poolwala" } }, revalidate: 3600 };
  }
}