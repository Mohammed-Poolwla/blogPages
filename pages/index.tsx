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

type Project = {
  title: string;
  image: string;
  url: string;
  summary: string;
  tags: Array<"Web" | "Content" | "Performance" | "Design" | "AI">;
};

const projectsData: ReadonlyArray<Project> = [
  {
    title: "artofthepossibleagency.com",
    image: "/landing-images/artofthepossibleagency-com.png",
    url: "https://artofthepossibleagency.com",
    summary: "Agency site enhancements and performance-focused rebuild.",
    tags: ["Web", "Performance"],
  },
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
  {
    title: "shidosha.io",
    image: "/landing-images/shidosha-io.png",
    url: "https://shidosha.io",
    summary: "Personal site and brand presence with modern UI.",
    tags: ["Web", "Design"],
  },
  {
    title: "owliver.ai",
    image: "https://image.thum.io/get/width/1600/https://owliver.ai",
    url: "https://owliver.ai",
    summary: "AI-focused project work and integrations.",
    tags: ["Web", "AI"],
  },
  {
    title: "sunstone-website-chi.vercel.app",
    image: "https://image.thum.io/get/width/1600/https://sunstone-website-chi.vercel.app",
    url: "https://sunstone-website-chi.vercel.app",
    summary: "Next.js + Supabase build for ASC Sunstone's PCB manufacturing site.",
    tags: ["Web"],
  },
] as const;

const HomePage = ({ blogs, medium }: { blogs: Blog[]; medium: MediumPost[] }) => {
  const siteUrl = "https://websrc.uk";
  const homeTitle = "WEBSRC - AI Apps, Automation, and Parallax Digital Experiences";
  const homeDescription =
    "WEBSRC builds high-performance websites, AI-powered products, and workflow automation systems with modern UX and measurable outcomes.";
  const ogImage = `${siteUrl}/landing-images/saleshero-dk.png`;
  const filters = ["All", "Web", "Content", "Performance", "Design", "AI"] as const;
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const filteredProjects = useMemo(() => {
    if (filter === "All") return projectsData;
    return projectsData.filter((p) => p.tags.includes(filter as Project["tags"][number]));
  }, [filter]);

  return (
    <Layout>
      <Head>
        <title>{homeTitle}</title>
        <meta name="description" content={homeDescription} />
        <meta name="keywords" content="WEBSRC, AI web apps, n8n automation, React development, Next.js agency, Supabase developer, parallax website design, pet care blogs" />
        <meta name="author" content="WEBSRC" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="theme-color" content="#050816" />
        <link rel="canonical" href={siteUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:site_name" content="WEBSRC" />
        <meta property="og:title" content={homeTitle} />
        <meta property="og:description" content={homeDescription} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content="WEBSRC featured project showcase" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={homeTitle} />
        <meta name="twitter:description" content={homeDescription} />
        <meta name="twitter:image" content={ogImage} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "WEBSRC",
              url: siteUrl,
              potentialAction: {
                "@type": "SearchAction",
                target: "https://websrc.uk/blogs?query={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "WEBSRC",
              url: siteUrl,
              image: ogImage,
              description: homeDescription,
              sameAs: [
                "https://www.linkedin.com/in/mohammed-poolwala-41621896/",
                "https://www.upwork.com/freelancers/~0127aaf7f87ebb7377",
                "https://github.com/Mohammed-Poolwla",
              ],
              areaServed: "Worldwide",
              serviceType: [
                "AI-powered web app development",
                "n8n workflow automation",
                "React and Next.js engineering",
                "Mobile app development",
              ],
            }),
          }}
        />
      </Head>

      <section className="parallax-hero">
        <div className="parallax-layer layer-grid" />
        <div className="parallax-layer layer-glow" />
        <div className="parallax-layer layer-rings" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs tracking-wide text-cyan-100">
                <span className="h-2 w-2 rounded-full bg-cyan-300" />
                Full service digital engineering
              </div>
              <h1 className="mt-6 text-5xl font-black uppercase leading-[1.05] tracking-[0.12em] sm:text-6xl">
                WEBSRC
                <span className="mt-3 block text-xl font-semibold tracking-[0.28em] text-slate-300 sm:text-2xl">
                  Build in Layers.
                </span>
              </h1>
              <p className="mt-7 max-w-xl text-base text-slate-200 sm:text-lg">
                We design immersive web experiences with performance-led engineering.
                Each section tells a story, each interaction earns trust, and each build
                is ready to scale.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/services" className="btn-primary">
                  Explore Services
                </Link>
                <Link href="#projects" className="btn-ghost-light">
                  View Work
                </Link>
              </div>
              <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 text-center text-sm">
                <div className="glass-tile py-3">
                  <div className="text-lg font-semibold text-white">10+</div>
                  <div className="text-slate-300">Launches</div>
                </div>
                <div className="glass-tile py-3">
                  <div className="text-lg font-semibold text-white">5+</div>
                  <div className="text-slate-300">Years</div>
                </div>
                <div className="glass-tile py-3">
                  <div className="text-lg font-semibold text-white">95+</div>
                  <div className="text-slate-300">CWV</div>
                </div>
              </div>
            </div>

            <div className="glass-panel overflow-hidden">
              <div className="relative h-80 sm:h-96">
                <Image
                  src="/landing-images/saleshero-dk.png"
                  alt="Featured WEBSRC project"
                  width={1600}
                  height={1000}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="mb-1 text-xs uppercase tracking-[0.2em] text-cyan-200">Featured Build</p>
                  <h3 className="text-2xl font-semibold text-white">saleshero.dk</h3>
                  <p className="text-sm text-slate-200">Parallax visual flow + conversion-focused UX system</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="parallax-break">
        <div className="parallax-layer layer-lines" />
        <div className="relative mx-auto grid max-w-7xl gap-6 px-6 py-20 sm:grid-cols-3">
          <div className="glass-tile p-6">
            <div className="mb-2 text-3xl font-black text-cyan-200">01</div>
            <p className="text-sm text-slate-200">Strategy first architecture to reduce complexity before code.</p>
          </div>
          <div className="glass-tile p-6">
            <div className="mb-2 text-3xl font-black text-cyan-200">02</div>
            <p className="text-sm text-slate-200">Parallax visual systems to guide user attention through story.</p>
          </div>
          <div className="glass-tile p-6">
            <div className="mb-2 text-3xl font-black text-cyan-200">03</div>
            <p className="text-sm text-slate-200">Fast handoff pipelines with measurable technical outcomes.</p>
          </div>
        </div>
      </section>

      <section id="projects" className="parallax-deep-section">
        <div className="parallax-layer layer-grid" />
        <div className="parallax-layer layer-lines" />
        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-3xl font-bold text-white">Selected Work</h2>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full border px-3 py-1 text-sm transition-colors ${
                    filter === f
                      ? "border-cyan-300/70 bg-cyan-300/20 text-cyan-100"
                      : "border-slate-500/50 bg-transparent text-slate-300 hover:border-slate-300 hover:text-white"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((p, idx) => (
              <article
                key={p.title}
                className={`${idx === 0 ? "sm:col-span-2 lg:col-span-2" : ""} group overflow-hidden rounded-2xl border border-white/10 bg-[#0d1530]`}
              >
                <div className={`${idx === 0 ? "h-72" : "h-52"} relative overflow-hidden`}>
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={1600}
                    height={1000}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/10 to-transparent opacity-70" />
                  <div className="absolute left-2 top-2 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full border border-white/20 bg-black/30 px-2 py-0.5 text-xs text-white">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-slate-300">{p.summary}</p>
                  <Link
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex text-sm font-medium text-cyan-200 transition-colors hover:text-cyan-100"
                  >
                    Open project →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="parallax-light parallax-light-section">
        <div className="parallax-layer layer-light-dots" />
        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-3xl font-bold text-[#0b1530]">What WEBSRC Delivers</h2>
            <p className="mt-3 text-slate-700">
              We build websites that feel alive through depth, motion, and structure while maintaining
              measurable performance and accessibility standards.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Parallax UX", d: "Depth-based sections that guide user attention." },
              { t: "Frontend Engineering", d: "Clean architecture with scalable component systems." },
              { t: "Performance", d: "Core Web Vitals and delivery optimization by default." },
              { t: "Content Systems", d: "Structured publishing workflows for growth teams." },
            ].map((s) => (
              <div key={s.t} className="rounded-2xl border border-slate-200 bg-white/80 p-6 backdrop-blur-sm">
                <h3 className="mb-2 text-lg font-semibold text-[#0b1530]">{s.t}</h3>
                <p className="text-sm text-slate-700">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pets-parallax-story">
        <div className="parallax-layer layer-paws" />
        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">Our purpose</p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.08em] text-white sm:text-5xl">
              Why a tech company writes pet blogs
            </h2>
            <p className="mt-5 text-base text-slate-200 sm:text-lg">
              WEBSRC builds digital products, but our mission is bigger than code. We use technology
              to improve everyday decisions for families and pet parents with clear, honest, practical
              guidance.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Care beyond clients",
                d: "We believe good technology should serve real life, including the wellbeing of pets in every home.",
              },
              {
                t: "Trusted advice at scale",
                d: "Our content systems make reliable pet information easy to find, easy to read, and easy to act on.",
              },
              {
                t: "Human-first innovation",
                d: "From product UX to pet blogs, we build with empathy so end users feel supported, not overwhelmed.",
              },
            ].map((item, index) => (
              <article key={item.t} className="pets-value-card p-6" style={{ animationDelay: `${index * 180}ms` }}>
                <p className="mb-2 text-xs uppercase tracking-[0.18em] text-cyan-200">WEBSRC Promise</p>
                <h3 className="text-xl font-semibold text-white">{item.t}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-200">{item.d}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-cyan-200/25 bg-cyan-300/10 p-6 text-center backdrop-blur-sm">
            <p className="paw-pulse text-2xl">🐾</p>
            <p className="mx-auto mt-2 max-w-3xl text-sm text-slate-100 sm:text-base">
              For end users, this means one place to get both modern digital experiences and compassionate pet guidance.
              We care about performance, clarity, and the lives touched by every article we publish.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Link href="/blogs" className="btn-primary">
                Read Pet Guides
              </Link>
              <Link href="/about" className="btn-ghost-light">
                Why WEBSRC Cares
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="parallax-deep-section">
        <div className="parallax-layer layer-grid" />
        <div className="parallax-layer layer-glow-soft" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2">
          <div className="rounded-2xl border border-cyan-300/20 bg-cyan-400/5 p-8">
            <h2 className="text-2xl font-bold text-white">From Medium</h2>
            <p className="mt-2 text-sm text-slate-300">Thoughts on engineering, product and growth.</p>
            <div className="mt-6 space-y-4">
              {(medium || []).slice(0, 3).map((p) => (
                <a
                  key={p.link}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
                >
                  <div className="text-xs text-slate-400">{p.pubDate || ""}</div>
                  <div className="mt-1 text-sm font-semibold text-white">{p.title}</div>
                </a>
              ))}
            </div>
            <Link
              href="https://medium.com/@mohammed.poolwala_1888"
              target="_blank"
              className="mt-6 inline-flex text-sm font-medium text-cyan-200 hover:text-cyan-100"
            >
              Follow Medium →
            </Link>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0d1530] p-8">
            <h2 className="text-2xl font-bold text-white">Latest Articles</h2>
            <p className="mt-2 text-sm text-slate-300">Fresh posts from the WEBSRC blog.</p>
            <div className="mt-6 space-y-4">
              {(blogs || []).slice(0, 3).map((b) => (
                <Link
                  key={b.slug}
                  href={`/blogs/${b.slug}`}
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-3 transition-colors hover:bg-white/10"
                >
                  <div className="h-14 w-16 overflow-hidden rounded-md">
                    <CldImage
                      src={b.image}
                      height={200}
                      width={250}
                      alt={b.slug}
                      crop={{ type: "auto", source: true }}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="line-clamp-1 text-sm font-semibold text-white">{b.title}</h3>
                    <p className="line-clamp-1 text-xs text-slate-300">{b.description}</p>
                  </div>
                </Link>
              ))}
            </div>
            <Link href="/blogs" className="mt-6 inline-flex text-sm font-medium text-cyan-200 hover:text-cyan-100">
              Browse all blogs →
            </Link>
          </div>
        </div>
      </section>

      <section className="parallax-cta">
        <div className="parallax-layer layer-grid" />
        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">Start a project</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black uppercase leading-tight tracking-[0.08em] text-white sm:text-5xl">
            Reimagine your website with WEBSRC
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-slate-200">
            Bring layered storytelling, premium visuals and production-grade performance into one
            coherent digital system.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              Contact WEBSRC
            </Link>
            <Link href="/services" className="btn-ghost-light">
              Service Details
            </Link>
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
    type BlogRow = {
      slug: string | null;
      title: string | null;
      image: string | null;
      description: string | null;
    };
    const rows = (result || []) as BlogRow[];
    const blogs: Blog[] = rows.map((b) => ({
      slug: b.slug || "",
      title: b.title || "",
      image: b.image || "",
      description: b.description || "",
    }));

    const feedUrl = "https://medium.com/feed/@mohammed.poolwala_1888";
    let medium: MediumPost[] = [];
    try {
      const res = await fetch(feedUrl, { headers: { Accept: "application/rss+xml, application/xml, text/xml" } });
      const xml = await res.text();
      const items = xml.split("<item>").slice(1).map((chunk) => "<item>" + chunk);
      medium = items
        .slice(0, 3)
        .map((item) => {
          const get = (tag: string) => {
            const m = item.match(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`));
            return m ? m[1].replace(/<!\[CDATA\[/g, "").replace(/\]\]>/g, "").trim() : "";
          };
          return {
            title: get("title"),
            link: get("link"),
            pubDate: get("pubDate"),
          } as MediumPost;
        })
        .filter((p) => p.title && p.link);
    } catch (_) {
      medium = [];
    }

    return { props: { blogs, medium }, revalidate: 3600 };
  } catch (e) {
    return { props: { blogs: [], medium: [] }, revalidate: 3600 };
  }
}
