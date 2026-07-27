import {
  AlertTriangle,
  BadgeCheck,
  Boxes,
  Building2,
  ClipboardCheck,
  Clock,
  Code2,
  Database,
  FileCode2,
  Fingerprint,
  Gauge,
  GitBranch,
  HardDrive,
  Headphones,
  KeyRound,
  Layers,
  Lock,
  Rocket,
  Search,
  Server,
  Shield,
  Shuffle,
  Sparkles,
  Wrench,
} from "lucide-react";
import { buildMigrationConfig } from "./buildMigration";
import {
  defaultDeliverables,
  defaultMigrateCards,
  defaultMigrationTrust,
  defaultWhyPoints,
  SITE_URL,
} from "./shared";
import type { ServicePageConfig } from "./types";

export { SITE_URL };
export type { ServicePageConfig };

const relatedMigrations = [
  "lovable-to-supabase",
  "bolt-to-supabase",
  "replit-to-supabase",
  "v0-to-supabase",
  "firebase-to-supabase",
  "bubble-to-supabase",
  "lovable-migration",
  "supabase-audit",
  "supabase-consulting",
  "ai-mvp-to-production",
];

function relatedExcept(slug: string) {
  return relatedMigrations.filter((s) => s !== slug).slice(0, 6);
}

export const lovableToSupabase = buildMigrationConfig({
  slug: "lovable-to-supabase",
  navLabel: "Lovable to Supabase",
  source: "Lovable",
  sourceShort: "Lovable",
  title: "Migrate Lovable Cloud to Your Own Supabase | From $399 | WEBSRC",
  description:
    "Migrate Lovable Cloud to your own Supabase and Vercel. Live app cutover with zero data loss, auth users preserved, RLS, storage, edge functions, and a rollback plan. Migrations from $399 USD. Free assessment.",
  keywords:
    "migrate lovable cloud to your own supabase, lovable to supabase, lovable cloud migration, lovable to vercel supabase, migrate lovable app, lovable auth migration, lovable database migration, lovable storage migration, own supabase project, lovable production cutover, lovable rollback plan, supabase rls migration, WEBSRC",
  h1: "Migrate Lovable Cloud to Your Own Supabase Without Starting Over",
  heroBody:
    "Ready to leave Lovable Cloud and own the backend? WEBSRC moves your live Lovable app to your own Supabase project and Vercel deploy: schema, data, auth users, storage, edge functions, and RLS. Users keep access. You keep a rollback path. Migrations start from $399 USD (minimum, not a flat fee).",
  problemIntro:
    "Lovable Cloud is fine for an MVP. The pressure starts when you need your own Supabase dashboard, true staging vs production, service-role keys, custom auth email, compliance, or a DNS cutover you control. That is when founders search for Lovable to Supabase migration help.",
  fromStack: [
    "Lovable Cloud backend",
    "Lovable Auth and users",
    "Lovable Database / Postgres",
    "Lovable Storage buckets",
    "Lovable Edge Functions and secrets",
  ],
  alternateNames: [
    "Make Lovable app production-ready",
    "Lovable takeover and hardening",
    "Migrate Lovable Cloud to your own Supabase",
    "Lovable to Vercel and Supabase migration",
    "Lovable vibe-code audit",
    "Own Supabase project for Lovable app",
  ],
  relatedSlugs: relatedExcept("lovable-to-supabase"),
});

lovableToSupabase.tagline = "Take over, harden, and run your Lovable app on infrastructure you own";
lovableToSupabase.eyebrow = "WEBSRC · Lovable prototype to production";
lovableToSupabase.primaryCta = "Book Free Lovable Audit";
lovableToSupabase.secondaryCta = "Book Appointment";
lovableToSupabase.h1 = "Make Your Lovable App Production-Ready on Your Own Supabase";
lovableToSupabase.heroBody =
  "Lovable is strong for fast MVPs with React, Tailwind, and Supabase. Production needs more: owned Supabase, reviewed RLS, clean secrets, GitHub as source of truth, Vercel deploy, and a rollback path. WEBSRC takes over live Lovable apps, hardens the stack, and migrates you off Lovable Cloud. Migrations start from $399 USD (minimum, not a flat fee).";
lovableToSupabase.title =
  "Make Your Lovable App Production-Ready | Own Supabase From $399 | WEBSRC";
lovableToSupabase.description =
  "Take over and harden your Lovable app for production. Own Supabase, RLS, secrets, GitHub, Vercel, SEO basics, and a rehearsed cutover. Migrations from $399 USD. Free audit.";
lovableToSupabase.keywords =
  "lovable production ready, lovable takeover, lovable to supabase, harden lovable app, lovable rls, lovable github sync, lovable self host, lovable cloud migration, lovable vercel, vibe code audit, WEBSRC";
lovableToSupabase.heroChips = ["Audit", "Harden", "Own Supabase", "CI/CD + Cutover"];
lovableToSupabase.trustBadges = [
  "Code, security, and lock-in audit",
  "Auth, RLS, and secrets hardening",
  "GitHub as source of truth",
  "Own Supabase project",
  "Staging, deploy, rollback",
  "Vercel frontend option",
  "SEO metadata + sitemap review",
  "Keep Lovable as rollback",
  ...defaultMigrationTrust.slice(0, 2),
];
lovableToSupabase.problemEyebrow = "Production gap";
lovableToSupabase.problemTitle = 'Why "it works" does not mean production-ready';
lovableToSupabase.problemIntro =
  "The risks rarely show up in a quick UI click-through. They sit in data access, deployment, secrets, authorization, SEO, and missing operations. Lovable Cloud is fine for an MVP. Pressure starts when you need real ownership.";
lovableToSupabase.problems = [
  {
    icon: Lock,
    title: "Security and data access",
    body: "Auth, roles, row-level security, input validation, and secret handling need a real review before customer data is trusted in production.",
  },
  {
    icon: Building2,
    title: "Platform lock-in",
    body: "Lovable Cloud hides the Supabase dashboard, billing, and keys. Convenient for shipping. Awkward when you need staging, compliance, or DNS you control.",
  },
  {
    icon: GitBranch,
    title: "Maintainability and Git ownership",
    body: "Production needs a clean repository, branching, reviews, and builds that work outside Lovable. GitHub sync alone is not enough if local setup is broken.",
  },
  {
    icon: KeyRound,
    title: "Unclear or missing RLS",
    body: "Many Lovable apps talk to Supabase from the frontend. RLS decides whether users only see their own data. Broad or missing policies are a common MVP trap.",
  },
  {
    icon: HardDrive,
    title: "Secrets without a deploy plan",
    body: "Env vars, service roles, and edge function secrets often lack clean staging vs production separation.",
  },
  {
    icon: Search,
    title: "SEO and public-page foundations",
    body: "For public apps we review rendering, metadata, sitemap, robots.txt, canonicals, structured data, and performance. A working UI is not the same as being indexable.",
  },
  {
    icon: Gauge,
    title: "No operations layer",
    body: "Monitoring, backups, updates, and clear ownership are missing. Working screens are not the same as a runnable product.",
  },
  {
    icon: Rocket,
    title: "You want Vercel and DNS you control",
    body: "A full exit means frontend on Vercel, backend on your Supabase, and rollback as simple as flipping DNS when needed.",
  },
];
lovableToSupabase.mapEyebrow = "What takeover covers";
lovableToSupabase.mapTitle = "Lovable takeover is mostly Supabase, GitHub, and security work";
lovableToSupabase.mapIntro =
  "Lovable can sync to GitHub and use Supabase as a backend. We review more than React components: data model, RLS, edge functions, secrets, and the path into independent operations.";
lovableToSupabase.fromLabel = "From Lovable Cloud";
lovableToSupabase.toLabel = "To owned production stack";
lovableToSupabase.fromStack = [
  "Lovable Cloud backend",
  "Lovable Auth and users",
  "Lovable Database / Postgres",
  "Lovable Storage buckets",
  "Lovable Edge Functions and secrets",
  "GitHub sync (if enabled)",
];
lovableToSupabase.toStack = [
  "Your own Supabase project",
  "Postgres schema, data, and RLS",
  "Auth users preserved when hashes move",
  "Storage, edge functions, secrets",
  "GitHub source of truth + Vercel",
  "Staging, CI/CD, and rollback path",
];
lovableToSupabase.migrateCards = [
  {
    icon: GitBranch,
    title: "Export and repository",
    body: "We check GitHub sync, make the repo the source of truth, and confirm local build, branching, reviews, and deploys work outside Lovable.",
    items: ["GitHub sync and repo structure", "Local setup and build commands", "Branching, PRs, and releases"],
  },
  {
    icon: Database,
    title: "Supabase and data access",
    body: "Own-project setup with clean migrations, RLS, auth flows, service roles, storage, edge functions, and separate environments.",
    items: ["Schema, migrations, and RLS", "Auth flows and role model", "Edge functions, storage, API secrets"],
  },
  {
    icon: Rocket,
    title: "Deploy, SEO, and cutover",
    body: "Leave Lovable Cloud with app, backend, domain, and indexability planned together. Optional Vercel + DNS cutover with rollback.",
    items: ["Staging / production with CI/CD", "Metadata, sitemap, robots, canonicals", "Rehearsed cutover + rollback window"],
  },
];
lovableToSupabase.servicesTitle = "Lovable takeover and production hardening services";
lovableToSupabase.servicesIntro =
  "Not a rewrite by default. Controlled takeover first: audit, own Supabase, harden critical paths, then cut over with a rollback plan.";
lovableToSupabase.servicesIncluded = [
  {
    title: "Vibe-code / Lovable audit",
    body: "Security scan mindset: auth, RLS, secrets, dependencies, architecture, and lock-in analysis. You get a prioritized action plan.",
  },
  {
    title: "GitHub as source of truth",
    body: "Clean export/sync, local builds, branching, and a deploy path that does not depend on Lovable staying in the loop.",
  },
  {
    title: "Own Supabase project setup",
    body: "New project under your account, modern keys, extensions, and dashboard access you fully control.",
  },
  {
    title: "Database, RLS, and auth hardening",
    body: "Schema and data cutover, Row Level Security review, role model, and careful auth user migration.",
  },
  {
    title: "Storage, edge functions, secrets",
    body: "Buckets, objects, URL updates, function deploys, and env separation for staging vs production.",
  },
  {
    title: "Vercel, CI/CD, SEO basics",
    body: "Frontend deploy when you want a full exit, plus metadata/sitemap/robots review for public pages and a rollback-friendly DNS plan.",
  },
];
lovableToSupabase.processTitle = "Our 5-phase Lovable to production approach";
lovableToSupabase.processIntro =
  "The entry point is auditable and scoped. After that we decide together whether hardening, migration, further development, or ops support is next.";
lovableToSupabase.processSteps = [
  {
    n: "01",
    title: "Audit",
    body: "Security, secrets, dependencies, architecture, and lock-in review. Result: a prioritized plan, not guesswork.",
  },
  {
    n: "02",
    title: "Decoupling",
    body: "Move code into a clean repository, separate environments, clarify data and auth dependencies, and plan target operations.",
  },
  {
    n: "03",
    title: "Hardening",
    body: "Fix permissions, secrets, RLS, validation, and the critical auth paths before real customer traffic trusts the stack.",
  },
  {
    n: "04",
    title: "Production readiness",
    body: "Own Supabase + optional Vercel, staging rehearsal, CI/CD, monitoring basics, SEO checks for public apps, then cutover with rollback.",
  },
  {
    n: "05",
    title: "Operate and improve",
    body: "Post-launch window with Lovable kept warm as safety net. Optional further feature work after ownership is solid.",
  },
];
lovableToSupabase.whyTitle = "Why founders hire WEBSRC for Lovable takeover";
lovableToSupabase.whyIntro =
  "Public runbooks and exporters exist. Live apps still fail on auth, storage URLs, RLS, secrets, Git ownership, and cutover timing. We own that risk with you.";
lovableToSupabase.deliverablesTitle = "What you get after Lovable takeover";
lovableToSupabase.deliverablesIntro =
  "Ownership artifacts under your accounts, hardened access paths, and a short post-launch window while Lovable stays available for rollback.";
lovableToSupabase.deliverables = [
  "Prioritized audit action plan",
  "Your own Supabase project",
  "Migrated schema and data",
  "Auth users migrated",
  "RLS and secrets reviewed",
  "Storage + edge functions",
  "GitHub-ready repository path",
  "Vercel deploy support",
  "Cutover and rollback checklist",
  "One week of post-launch support",
];
lovableToSupabase.architectureSteps = [
  { label: "Lovable MVP", detail: "Fast prototype + Cloud", icon: Sparkles },
  { label: "Audit + harden", detail: "RLS, secrets, Git, lock-in", icon: Shield },
  { label: "Own Supabase", detail: "Postgres, Auth, Storage", icon: Database },
  { label: "Production", detail: "Vercel, CI/CD, rollback", icon: Rocket },
];
lovableToSupabase.faqTitle = "Lovable production takeover FAQ";
lovableToSupabase.faqIntro =
  "Provider-specific answers on ownership, hardening, GitHub, RLS, SEO, self-hosting options, and pricing starting from $399.";
lovableToSupabase.faqs = [
  {
    question: "What does Lovable takeover mean?",
    answer:
      "It means moving from a Lovable-hosted MVP into a stack you own: repository, Supabase project, secrets, deploy path, and optional Vercel hosting. Controlled takeover first. Rebuild only where security or scale truly require it.",
  },
  {
    question: "Can you take over a Lovable app through GitHub?",
    answer:
      "Yes. We check whether GitHub sync is complete, whether build commands run locally, and whether the repository can become the source of truth. Then we add branching, reviews, and reproducible deploys.",
  },
  {
    question: "How do I make a Lovable app production-ready?",
    answer:
      "Start with an audit of auth, roles, RLS, secrets, data model, dependencies, deployment, and monitoring. Then harden critical areas, separate staging and production, and add cutover plus rollback.",
  },
  {
    question: "Why is row-level security so important for Lovable apps?",
    answer:
      "Lovable projects often use Supabase directly from the frontend. In that setup, RLS decides whether users only see their own data. Missing or overly broad policies are a common reason an MVP is not production-ready yet.",
  },
  {
    question: "Will I lose data or force users to reset passwords?",
    answer:
      "No data-loss cutover is the goal. We rehearse on staging and verify row counts before production. When the export path supports password hashes, users can keep signing in without a mass reset.",
  },
  {
    question: "Can a live Lovable app be migrated with real customers?",
    answer:
      "Yes. That is the main use case. We inventory first, rehearse, plan a short cutover window, and keep Lovable available as rollback until you are stable.",
  },
  {
    question: "Do you deploy to Vercel as well?",
    answer:
      "Yes, when you want a full exit. Backend-only (own Supabase, frontend still on Lovable) is also possible. We help you choose during the free audit.",
  },
  {
    question: "What do you review for Lovable app SEO?",
    answer:
      "For public pages we review the actual stack and check rendering approach, metadata, canonicals, sitemap, robots.txt, structured data, and loading behavior. A working UI is not automatically search-ready.",
  },
  {
    question: "Can the app be developed further without Lovable?",
    answer:
      "Yes, once it lives in a normal repository with a documented build process and clear target architecture. Development continues through tickets, pull requests, reviews, and releases.",
  },
  {
    question: "Does the Lovable app need a complete rebuild?",
    answer:
      "Not automatically. The goal is controlled takeover first. We only rebuild where security, maintainability, or scaling truly require it.",
  },
  {
    question: "How much does Lovable to Supabase migration cost?",
    answer:
      "$399 USD is the minimum starting price, not a fixed flat fee. Final price depends on schema, auth, storage, functions, hardening depth, and whether you need Vercel. The free audit ends with a scoped estimate.",
  },
  {
    question: "Do you keep Lovable as a rollback option?",
    answer:
      "Yes. Best practice is to leave Lovable in place after cutover until production is stable, often about 30 days, so you have a warm rollback path.",
  },
];
lovableToSupabase.auditTitle = "Book a free Lovable vibe-code audit";
lovableToSupabase.auditIntro =
  "Tell us about your Lovable app. We reply with lock-in risks, RLS/secrets gaps, whether you need Vercel, timeline, and a custom estimate starting from $399 USD.";
lovableToSupabase.auditBullets = [
  "For live Lovable apps and production cutovers",
  "Own Supabase + optional Vercel exit",
  "NDAs available. Rollback plan included.",
];
lovableToSupabase.finalTitle = "Ready to take over and harden your Lovable app?";
lovableToSupabase.finalBody =
  "Get a free audit and a clear path to ownership: your Supabase, your keys, hardened access, optional Vercel, and a rehearsed cutover starting from $399 USD.";
lovableToSupabase.formSubject = "Lovable Production Takeover / Own Supabase";
lovableToSupabase.schemaServiceType = [
  "Lovable to production takeover",
  "Lovable Cloud to Supabase migration",
  "Lovable app hardening",
];
lovableToSupabase.pricing = {
  amountLabel: "$399",
  minPrice: 399,
  currency: "USD",
  note: "$399 is the minimum starting price, not a fixed fee. Final quote depends on schema, auth, storage, functions, hardening depth, and whether you need Vercel + DNS cutover. Free audit first.",
};
lovableToSupabase.hookSection = {
  eyebrow: "Typical Lovable pitfalls",
  title: "What we fix before your MVP meets real customers",
  intro:
    "Adapted from the production gaps teams hit after vibe-coding: ownership, security, deploy path, and operations. Delivered as a done-for-you WEBSRC service.",
  items: [
    {
      title: "Own Supabase project",
      body: "Dashboard, billing, service-role keys, and Postgres under your account, not trapped in Lovable Cloud.",
    },
    {
      title: "RLS and secrets hardening",
      body: "Policies, env separation, and service-role hygiene so frontend-to-Supabase access is not an open door.",
    },
    {
      title: "GitHub source of truth",
      body: "Clean sync, local builds, branching, and deploys that work without staying locked to the builder UI.",
    },
    {
      title: "Staging, CI/CD, rollback",
      body: "Rehearse before cutover. Keep Lovable warm as a safety net while the new stack proves itself.",
    },
    {
      title: "Auth users preserved",
      body: "Move identities carefully so customers are not forced through a surprise mass password reset when hashes can travel.",
    },
    {
      title: "SEO and public-page basics",
      body: "Metadata, sitemap, robots, canonicals, and performance checks when the product needs to be found, not just clicked.",
    },
  ],
};

export const boltToSupabase = buildMigrationConfig({
  slug: "bolt-to-supabase",
  navLabel: "Bolt to Supabase",
  source: "Bolt",
  sourceShort: "Bolt",
  title: "Bolt to Supabase Migration Service | WEBSRC",
  description:
    "Migrate your Bolt.new app to Supabase with WEBSRC. Move database, auth, storage, and backend code into infrastructure you own. Free migration assessment.",
  keywords:
    "bolt to supabase, bolt.new migration, migrate bolt app, bolt supabase, supabase migration service, WEBSRC",
  h1: "Migrate Your Bolt App to Supabase Without a Full Rewrite",
  heroBody:
    "Shipped fast on Bolt and now need real ownership? We move your Bolt app to Supabase: schema, auth, storage, and API wiring. Same product. Your cloud. Controlled cutover.",
  problemIntro:
    "Bolt is useful for speed. Production SaaS usually needs a database, auth, and storage model you control. A Bolt to Supabase migration gives you that without throwing the UI away.",
  fromStack: [
    "Bolt hosted stack",
    "Bolt auth / session setup",
    "Bolt database layer",
    "Bolt file storage",
    "Generated API and server code",
  ],
  alternateNames: ["Migrate Bolt app to Supabase", "Bolt.new to Supabase", "Bolt cloud migration"],
  relatedSlugs: relatedExcept("bolt-to-supabase"),
});

export const replitToSupabase = buildMigrationConfig({
  slug: "replit-to-supabase",
  navLabel: "Replit to Supabase",
  source: "Replit",
  sourceShort: "Replit",
  title: "Replit to Supabase Migration Service | WEBSRC",
  description:
    "Migrate your Replit app to Supabase with WEBSRC. Production database, auth, storage, and deployment ownership with minimal downtime. Free assessment.",
  keywords:
    "replit to supabase, migrate replit app, replit database migration, replit auth migration, supabase migration service, WEBSRC",
  h1: "Move Your Replit App to Supabase for Production Ownership",
  heroBody:
    "Replit is fine for building. Production usually needs Postgres, auth, and storage you control. WEBSRC migrates your Replit app to Supabase and hardens what matters before go-live.",
  problemIntro:
    "Many Replit apps start as prototypes. When users arrive, founders want a clearer database, auth, and deploy story. That is the point of a Replit to Supabase migration.",
  fromStack: [
    "Replit hosting",
    "Replit DB / Postgres",
    "Replit Auth or custom auth",
    "Object or file storage",
    "Secrets and env config",
  ],
  alternateNames: ["Migrate Replit app to Supabase", "Replit database migration", "Replit cloud migration"],
  relatedSlugs: relatedExcept("replit-to-supabase"),
});

export const v0ToSupabase = buildMigrationConfig({
  slug: "v0-to-supabase",
  navLabel: "v0 to Supabase",
  source: "v0",
  sourceShort: "v0",
  title: "v0 to Supabase Migration Service | WEBSRC",
  description:
    "Turn your v0 UI into a production Supabase backend with WEBSRC. Schema, auth, storage, RLS, and deployment. Free migration assessment.",
  keywords:
    "v0 to supabase, v0 migration, v0 vercel supabase, migrate v0 app, supabase migration service, WEBSRC",
  h1: "Connect Your v0 Frontend to a Real Supabase Backend",
  heroBody:
    "v0 gets the UI far. Production needs a real data layer. We wire your v0 app to Supabase: database, auth, storage, RLS, and clean API patterns you can maintain.",
  problemIntro:
    "v0 is strong for interface speed. The gap shows up when you need auth, multi-tenant data, file uploads, and policies that will survive real users. That is where v0 to Supabase work starts.",
  fromStack: [
    "v0 generated UI",
    "Mock or temporary data layer",
    "Client-only auth stubs",
    "Local or ad hoc file handling",
    "Prototype API calls",
  ],
  alternateNames: ["v0 to Supabase", "Migrate v0 app to Supabase", "v0 Supabase backend"],
  relatedSlugs: relatedExcept("v0-to-supabase"),
});

export const firebaseToSupabase = buildMigrationConfig({
  slug: "firebase-to-supabase",
  navLabel: "Firebase to Supabase",
  source: "Firebase",
  sourceShort: "Firebase",
  title: "Firebase to Supabase Migration Service | WEBSRC",
  description:
    "Migrate Firebase to Supabase with WEBSRC. Firestore or RTDB to Postgres, Auth users, Storage, and security rules mapped to RLS. Free assessment.",
  keywords:
    "firebase to supabase, migrate firebase, firestore to postgres, firebase auth migration, firebase storage migration, supabase migration service, WEBSRC",
  h1: "Migrate Firebase to Supabase Without Losing Users or Data",
  heroBody:
    "Need Postgres, SQL, and clearer ownership? We migrate Firebase Auth, Firestore or RTDB data, and Storage into Supabase, then rewire your app for a safe cutover.",
  problemIntro:
    "Firebase is solid. Teams move when they want relational data, SQL, or a different cost and ownership model. A careful Firebase to Supabase migration keeps users and data intact.",
  problems: [
    {
      icon: Database,
      title: "Document data does not match how you query now",
      body: "Firestore shapes that felt fine early become expensive or awkward once you need joins, reports, or stricter relations.",
    },
    {
      icon: KeyRound,
      title: "Auth should move with the users",
      body: "Providers, custom claims, and session behavior need a deliberate map into Supabase Auth so people are not locked out.",
    },
    {
      icon: Lock,
      title: "Security rules need an RLS equivalent",
      body: "Firebase rules do not copy-paste into Postgres. We redesign access as Row Level Security policies.",
    },
    {
      icon: HardDrive,
      title: "Storage paths and tokens change",
      body: "Files move to Supabase Storage with updated paths, rules, and app references.",
    },
    {
      icon: Gauge,
      title: "Cost and query patterns shift",
      body: "Teams often leave Firebase when read patterns or billing stop matching the product shape.",
    },
    {
      icon: Layers,
      title: "You want SQL and clearer backend control",
      body: "Supabase gives you Postgres, Edge Functions, and a stack that fits many SaaS codebases better long term.",
    },
    {
      icon: Code2,
      title: "Client SDKs need rewiring",
      body: "Listeners, queries, and auth hooks change. We update the app so the cutover is intentional, not guesswork.",
    },
    {
      icon: AlertTriangle,
      title: "Production cutover needs rehearsal",
      body: "Live apps need backups, staging proof, and a rollback story before you flip traffic.",
    },
  ],
  fromStack: [
    "Firebase Auth",
    "Firestore / Realtime Database",
    "Cloud Storage",
    "Cloud Functions",
    "Security rules",
  ],
  alternateNames: [
    "Migrate Firebase to Supabase",
    "Firestore to Postgres",
    "Firebase Auth migration",
    "Firebase Storage migration",
  ],
  relatedSlugs: relatedExcept("firebase-to-supabase"),
});

export const bubbleToSupabase = buildMigrationConfig({
  slug: "bubble-to-supabase",
  navLabel: "Bubble to Supabase",
  source: "Bubble",
  sourceShort: "Bubble",
  title: "Bubble to Supabase Migration Service | WEBSRC",
  description:
    "Migrate from Bubble to Supabase with WEBSRC. Extract data, rebuild backend ownership, and connect a maintainable frontend. Free migration assessment.",
  keywords:
    "bubble to supabase, migrate bubble app, bubble migration, bubble database export, no-code to supabase, WEBSRC",
  h1: "Migrate Your Bubble App to Supabase and Own the Backend",
  heroBody:
    "Outgrowing Bubble? We extract your data model, move it into Supabase, set up auth and storage, and help you reconnect a codebase you can maintain.",
  problemIntro:
    "Bubble is fast for no-code launches. Scaling, custom logic, hiring engineers, or ownership usually push teams toward Supabase and a real codebase.",
  fromStack: [
    "Bubble database",
    "Bubble privacy rules",
    "Bubble workflows",
    "File uploads",
    "Bubble hosting and plugins",
  ],
  alternateNames: ["Migrate Bubble to Supabase", "Bubble database migration", "No-code to Supabase"],
  relatedSlugs: relatedExcept("bubble-to-supabase"),
});

export const lovableMigration: ServicePageConfig = {
  ...lovableToSupabase,
  slug: "lovable-migration",
  navLabel: "Lovable Migration",
  eyebrow: "WEBSRC Lovable migration service",
  tagline: "Exit Lovable hosting with a production plan",
  title: "Lovable Migration Service | Move Off Lovable Cloud | WEBSRC",
  description:
    "WEBSRC Lovable migration service for founders who need ownership of code, database, auth, and infrastructure. Primary path: Lovable Cloud to your own Supabase. Free assessment.",
  keywords:
    "lovable migration, migrate lovable app, lovable cloud migration, exit lovable, lovable to supabase, migrate lovable cloud to your own supabase, WEBSRC",
  h1: "Lovable Migration Service for Founders Who Need Ownership",
  heroBody:
    "If your product still lives on Lovable Cloud and you need control, we plan and run the exit. Most teams land on their own Supabase project, with optional Vercel hosting. You keep the product, gain the keys, and get a production checklist.",
  pricing: undefined,
  hookSection: undefined,
  heroChips: ["Secure Migration", "Zero Data Loss", "Full Ownership", "Production Ready"],
  problemTitle: "Why teams start a Lovable migration",
  problemIntro:
    "A Lovable migration is less about hating the tool and more about ownership. You want your own database, auth, deploy path, and the ability to hire any engineer into the codebase.",
  mapTitle: "Typical Lovable migration path",
  mapIntro: "Most Lovable migrations we run target your own Supabase as the production backend under your accounts.",
  servicesTitle: "What our Lovable migration service covers",
  whyTitle: "Why hire WEBSRC for Lovable migration",
  deliverablesTitle: "Lovable migration deliverables",
  faqTitle: "Lovable migration FAQ",
  auditTitle: "Book a free Lovable migration assessment",
  finalTitle: "Ready to plan your Lovable migration?",
  finalBody: "Get a free assessment and a practical path off Lovable Cloud onto infrastructure you own.",
  formSubject: "Lovable Migration",
  schemaServiceType: ["Lovable migration", "Lovable cloud migration", "Lovable to Supabase migration"],
  schemaAlternateNames: [
    "Lovable migration service",
    "Migrate Lovable app",
    "Exit Lovable cloud",
    "Lovable to Supabase",
  ],
  relatedSlugs: relatedExcept("lovable-migration"),
};

export const supabaseAudit: ServicePageConfig = {
  slug: "supabase-audit",
  navLabel: "Supabase Audit",
  eyebrow: "WEBSRC Supabase audit",
  tagline: "Find schema, RLS, and performance risks before they hurt",
  title: "Supabase Audit Service | Security, RLS, Performance | WEBSRC",
  description:
    "Supabase audit from WEBSRC. We review schema, RLS policies, auth, storage, Edge Functions, and performance, then give you a ranked fix list. Free intro call.",
  keywords:
    "supabase audit, supabase security audit, supabase rls review, supabase performance audit, postgres rls audit, WEBSRC",
  h1: "Supabase Audit for Schema, RLS, Auth, and Performance",
  heroBody:
    "Already on Supabase but unsure if it is safe to scale? We review your project like a production engineer: policies, indexes, auth setup, storage rules, and the issues most likely to bite you next.",
  primaryCta: "Book Free Audit Call",
  secondaryCta: "Request Audit Scope",
  heroChips: ["RLS Review", "Schema Check", "Auth Review", "Fix Roadmap"],
  trustBadges: [
    "Security Focused",
    "RLS Policy Review",
    "Performance Pass",
    "Auth and Storage Check",
    "Ranked Fix List",
    "Founder Friendly Report",
  ],
  problemEyebrow: "Why audit",
  problemTitle: "Signs your Supabase project needs an audit",
  problemIntro:
    "Many teams ship fast and skip the unglamorous checks. An audit catches the gaps before a customer, investor, or outage forces the issue.",
  problems: [
    {
      icon: Lock,
      title: "RLS feels incomplete",
      body: "Policies exist, but nobody has proven they match every table and role your product actually uses.",
    },
    {
      icon: Database,
      title: "Schema grew without a plan",
      body: "Naming is inconsistent, indexes are missing, and a few queries already feel slow.",
    },
    {
      icon: KeyRound,
      title: "Auth edge cases worry you",
      body: "Invites, roles, service keys, or provider setup were done quickly and never reviewed.",
    },
    {
      icon: HardDrive,
      title: "Storage rules are unclear",
      body: "Buckets work in demos. Private vs public access has not been pressure tested.",
    },
    {
      icon: Server,
      title: "Edge Functions lack guardrails",
      body: "Secrets, auth checks, and error handling vary by function.",
    },
    {
      icon: Gauge,
      title: "You are about to raise or scale",
      body: "Traffic or diligence is coming. You want a clear list of what to fix first.",
    },
    {
      icon: Search,
      title: "Nobody documented the stack",
      body: "The person who set it up left, or the setup was AI-assisted and hard to trust.",
    },
    {
      icon: AlertTriangle,
      title: "You suspect silent risk",
      body: "Nothing is on fire yet. That is exactly when an audit pays for itself.",
    },
  ],
  mapEyebrow: "Audit map",
  mapTitle: "What a WEBSRC Supabase audit covers",
  mapIntro: "We look at the parts that fail quietly in production, then give you a practical fix order.",
  fromLabel: "We inspect",
  toLabel: "You receive",
  fromStack: [
    "Postgres schema and indexes",
    "RLS and grants",
    "Auth providers and roles",
    "Storage buckets and policies",
    "Edge Functions and secrets",
  ],
  toStack: [
    "Risk-ranked findings",
    "RLS gap list",
    "Query and index notes",
    "Security quick wins",
    "30-day fix roadmap",
  ],
  migrateCards: [
    {
      icon: Shield,
      title: "Security",
      items: ["RLS coverage", "Service role usage", "Secret handling", "Least privilege"],
    },
    {
      icon: Database,
      title: "Data model",
      items: ["Tables and relations", "Indexes", "Constraints", "Naming hygiene"],
    },
    {
      icon: KeyRound,
      title: "Auth",
      items: ["Providers", "Session patterns", "Role model", "Invite flows"],
    },
    {
      icon: HardDrive,
      title: "Storage",
      items: ["Bucket design", "Public vs private", "Path conventions", "Access policies"],
    },
    {
      icon: Server,
      title: "Functions",
      items: ["Auth checks", "Error handling", "Env usage", "Timeouts"],
    },
    {
      icon: ClipboardCheck,
      title: "Ops readiness",
      items: ["Backups", "Environments", "Monitoring gaps", "Go-live risks"],
    },
  ],
  servicesEyebrow: "Included",
  servicesTitle: "Supabase audit package",
  servicesIntro: "A focused review with written output you can hand to your team or investors.",
  servicesIncluded: [
    {
      title: "Project walkthrough",
      body: "We review your Supabase project, environments, and how the app actually talks to the backend.",
    },
    {
      title: "RLS and access review",
      body: "Table-by-table notes on missing or weak policies, plus the highest-risk gaps first.",
    },
    {
      title: "Schema and query notes",
      body: "Indexes, obvious N+1 risks, and schema cleanup that will matter as you grow.",
    },
    {
      title: "Auth and storage check",
      body: "Provider setup, role assumptions, bucket rules, and common footguns.",
    },
    {
      title: "Written audit report",
      body: "Findings ranked by severity, with plain-language explanations and recommended fixes.",
    },
    {
      title: "Optional fix sprint",
      body: "If you want, we can implement the top fixes after the audit under a fixed scope.",
    },
  ],
  processEyebrow: "Process",
  processTitle: "How the Supabase audit works",
  processIntro: "Short engagement. Clear report. No fluff.",
  processSteps: [
    { n: "01", title: "Access and scope", body: "We confirm environments, goals, and NDA needs." },
    { n: "02", title: "Read-only review", body: "Schema, policies, auth, storage, and functions." },
    { n: "03", title: "Risk ranking", body: "We sort findings by severity and effort." },
    { n: "04", title: "Report delivery", body: "You get a written report and a walkthrough call." },
    { n: "05", title: "Fix plan", body: "A practical 2 to 4 week roadmap if you want help implementing." },
    { n: "06", title: "Optional build", body: "We can patch the critical items under a fixed quote." },
  ],
  whyEyebrow: "Why WEBSRC",
  whyTitle: "Why teams ask WEBSRC for a Supabase audit",
  whyIntro: "We audit the way we build: practical, security-aware, and focused on what matters for SaaS.",
  whyPoints: defaultWhyPoints,
  deliverablesEyebrow: "Deliverables",
  deliverablesTitle: "What you get from the audit",
  deliverablesIntro: "A report you can act on, not a vague PDF full of buzzwords.",
  deliverables: [
    "Written Supabase audit report",
    "RLS coverage notes",
    "Schema and index recommendations",
    "Auth and storage findings",
    "Severity-ranked issue list",
    "30-day remediation roadmap",
    "Optional implementation quote",
  ],
  faqEyebrow: "FAQ",
  faqTitle: "Supabase audit FAQ",
  faqIntro: "What founders usually ask before booking.",
  faqs: [
    {
      question: "How long does a Supabase audit take?",
      answer:
        "Most audits take 3 to 7 days after we get access, depending on project size and how many environments you want reviewed.",
    },
    {
      question: "Do you need write access?",
      answer:
        "Read-only access is enough for the audit. We only ask for write access if you hire us to implement fixes afterward.",
    },
    {
      question: "Will you look at RLS policies?",
      answer:
        "Yes. RLS is a core part of the audit, including gaps, overly broad policies, and service-role misuse risks.",
    },
    {
      question: "Can you audit an AI-built Supabase project?",
      answer:
        "Yes. Many audits come from MVPs that were generated quickly and need a production pass.",
    },
    {
      question: "Do you fix issues during the audit?",
      answer:
        "The audit is review and report by default. Fixes are optional and quoted separately so scope stays clear.",
    },
    {
      question: "What do you need from us to start?",
      answer:
        "Project access, a short product walkthrough, and any known pain points. NDA available on request.",
    },
    {
      question: "Is this only for security?",
      answer:
        "No. We cover security, schema, performance risks, auth, storage, and ops readiness.",
    },
    {
      question: "How much does a Supabase audit cost?",
      answer:
        "It depends on project size and depth. The intro call gives you a fixed quote before we start.",
    },
  ],
  auditEyebrow: "Book audit",
  auditTitle: "Book a Supabase audit intro call",
  auditIntro: "Share your project context. We reply with scope, timing, and a fixed audit quote.",
  auditBullets: [
    "Read-only review available",
    "Founder-friendly written report",
    "Optional fix sprint after the audit",
  ],
  finalEyebrow: "Next step",
  finalTitle: "Want a clear read on your Supabase project?",
  finalBody: "Book an intro call and get a ranked list of what to fix before you scale.",
  formSubject: "Supabase Audit",
  architectureSteps: [
    { label: "Access", detail: "Read-only project review", icon: Search },
    { label: "Audit", detail: "Schema, RLS, auth, storage", icon: ClipboardCheck },
    { label: "Report", detail: "Ranked findings", icon: FileCode2 },
    { label: "Fix plan", detail: "Roadmap or build sprint", icon: Wrench },
  ],
  schemaServiceType: ["Supabase audit", "Supabase security audit", "Postgres RLS review"],
  schemaAlternateNames: [
    "Supabase security audit",
    "Supabase RLS audit",
    "Supabase performance audit",
  ],
  relatedSlugs: relatedExcept("supabase-audit"),
};

export const supabaseConsulting: ServicePageConfig = {
  slug: "supabase-consulting",
  navLabel: "Supabase Consulting",
  eyebrow: "WEBSRC Supabase consulting",
  tagline: "Architecture, RLS, and production help from engineers who ship",
  title: "Supabase Consulting | Architecture, RLS, Auth | WEBSRC",
  description:
    "Supabase consulting with WEBSRC. Schema design, RLS, auth, Edge Functions, migrations, and production hardening for SaaS teams. Talk to an engineer.",
  keywords:
    "supabase consulting, supabase consultant, supabase expert, supabase architecture, supabase rls help, WEBSRC",
  h1: "Supabase Consulting for Founders Building Real Products",
  heroBody:
    "Need help designing or fixing a Supabase backend? We consult on schema, RLS, auth, storage, Edge Functions, and migration plans, then implement when you want hands on the keyboard.",
  primaryCta: "Talk to an Engineer",
  secondaryCta: "Book Consulting Call",
  heroChips: ["Architecture", "RLS Design", "Auth Setup", "Hands-on Help"],
  trustBadges: [
    "Schema Design",
    "RLS and Policies",
    "Auth Architecture",
    "Edge Functions",
    "Migration Planning",
    "Production Hardening",
  ],
  problemEyebrow: "When to call",
  problemTitle: "When Supabase consulting helps most",
  problemIntro:
    "Hire consulting when decisions are expensive to reverse: data model, tenancy, auth, or a migration you cannot afford to guess.",
  problems: [
    {
      icon: Database,
      title: "You need a schema that will scale",
      body: "Multi-tenant tables, relations, and indexes designed before the messy growth starts.",
    },
    {
      icon: Lock,
      title: "RLS is blocking features",
      body: "Policies are too loose, too strict, or impossible for the team to reason about.",
    },
    {
      icon: KeyRound,
      title: "Auth roles are unclear",
      body: "Invites, orgs, admin roles, and service accounts need a clean model.",
    },
    {
      icon: Shuffle,
      title: "You are planning a migration",
      body: "Leaving Lovable, Firebase, Bubble, or another stack and want a real plan.",
    },
    {
      icon: Server,
      title: "Edge Functions are growing",
      body: "You need structure for webhooks, billing, and trusted server logic.",
    },
    {
      icon: Gauge,
      title: "Queries are getting slow",
      body: "Indexes, query shape, and API patterns need a practical review.",
    },
    {
      icon: Boxes,
      title: "Your team is stuck",
      body: "Internal engineers need a specialist to unblock architecture decisions.",
    },
    {
      icon: Rocket,
      title: "Launch is close",
      body: "You want a production checklist before real customers arrive.",
    },
  ],
  mapEyebrow: "Engagement",
  mapTitle: "How Supabase consulting engagements run",
  mapIntro: "Advisory when you need decisions. Implementation when you need throughput.",
  fromLabel: "You bring",
  toLabel: "We help with",
  fromStack: [
    "Product requirements",
    "Current Supabase project",
    "Known pain points",
    "Timeline and constraints",
    "Team context",
  ],
  toStack: [
    "Architecture recommendations",
    "RLS and schema guidance",
    "Migration or launch plan",
    "Pairing or implementation",
    "Clear next milestones",
  ],
  migrateCards: defaultMigrateCards,
  servicesEyebrow: "Services",
  servicesTitle: "Supabase consulting services",
  servicesIntro: "Pick advisory only, or advisory plus implementation.",
  servicesIncluded: [
    {
      title: "Architecture sessions",
      body: "Working sessions on schema, tenancy, auth, and how your app should talk to Supabase.",
    },
    {
      title: "RLS design",
      body: "Policy models that match your product roles and stay maintainable.",
    },
    {
      title: "Hands-on implementation",
      body: "We can build migrations, policies, functions, and app wiring after the plan is clear.",
    },
    {
      title: "Migration consulting",
      body: "Plans for Lovable, Bolt, Firebase, Bubble, Replit, v0, and similar exits into Supabase.",
    },
    {
      title: "Performance help",
      body: "Index strategy, query review, and API patterns that reduce load.",
    },
    {
      title: "Launch readiness",
      body: "Environment split, backups, secrets, and a go-live checklist.",
    },
  ],
  processEyebrow: "Process",
  processTitle: "Consulting process",
  processIntro: "Simple start. Clear output. Optional build.",
  processSteps: [
    { n: "01", title: "Intro call", body: "Goals, constraints, and whether advisory or build is the fit." },
    { n: "02", title: "Access and review", body: "We inspect the current project or greenfield requirements." },
    { n: "03", title: "Recommendations", body: "Written guidance with tradeoffs, not generic advice." },
    { n: "04", title: "Decision workshop", body: "We align on the architecture your team will actually ship." },
    { n: "05", title: "Implementation", body: "Optional fixed-scope build or pairing with your engineers." },
    { n: "06", title: "Handoff", body: "Docs, next milestones, and support options." },
  ],
  whyEyebrow: "Why WEBSRC",
  whyTitle: "Why founders use WEBSRC for Supabase consulting",
  whyIntro: "Direct engineer communication. Production bias. No slide-deck theater.",
  whyPoints: [
    {
      icon: BadgeCheck,
      title: "Supabase in production",
      body: "We consult from active delivery work, not theory alone.",
    },
    {
      icon: FileCode2,
      title: "Full-stack context",
      body: "Frontend and backend decisions stay connected.",
    },
    {
      icon: Fingerprint,
      title: "Security-aware defaults",
      body: "RLS and secrets are part of the architecture, not an afterthought.",
    },
    {
      icon: Clock,
      title: "Fast decisions",
      body: "You leave sessions with choices and next steps.",
    },
    {
      icon: GitBranch,
      title: "Migration experience",
      body: "We regularly move teams off AI builders and legacy backends onto Supabase.",
    },
    {
      icon: Headphones,
      title: "Flexible engagement",
      body: "Advisory hours or implementation sprints.",
    },
  ],
  deliverablesEyebrow: "Deliverables",
  deliverablesTitle: "Consulting deliverables",
  deliverablesIntro: "Depends on the engagement, but you always leave with clear artifacts.",
  deliverables: [
    "Architecture notes",
    "Schema and RLS recommendations",
    "Auth model guidance",
    "Migration or launch plan",
    "Implementation roadmap",
    "Optional hands-on delivery",
  ],
  faqEyebrow: "FAQ",
  faqTitle: "Supabase consulting FAQ",
  faqIntro: "Straight answers before you book.",
  faqs: [
    {
      question: "Do you only advise, or can you build too?",
      answer:
        "Both. Some clients want architecture sessions only. Others want us to implement after the plan is set.",
    },
    {
      question: "Can you help design RLS for multi-tenant SaaS?",
      answer:
        "Yes. That is one of the most common consulting requests.",
    },
    {
      question: "Do you work with existing internal teams?",
      answer:
        "Yes. We can advise your engineers or pair with them on the critical pieces.",
    },
    {
      question: "Can consulting include a migration plan?",
      answer:
        "Yes. Migration planning from Lovable, Firebase, Bubble, and similar tools is a regular part of the work.",
    },
    {
      question: "How are consulting engagements priced?",
      answer:
        "Usually a fixed scope for a review or sprint, or a short advisory package. We quote after the intro call.",
    },
    {
      question: "Do you sign NDAs?",
      answer: "Yes, when needed.",
    },
    {
      question: "What stack do you prefer around Supabase?",
      answer:
        "Next.js is common on the frontend. Node or NestJS when you need a heavier backend. We adapt to your repo.",
    },
    {
      question: "How quickly can we start?",
      answer:
        "Often within a few days of the intro call, depending on current workload.",
    },
  ],
  auditEyebrow: "Start here",
  auditTitle: "Book a Supabase consulting call",
  auditIntro: "Tell us what you are building or fixing. We will suggest the lightest useful engagement.",
  auditBullets: [
    "Architecture and RLS help",
    "Migration planning available",
    "Advisory or hands-on build",
  ],
  finalEyebrow: "Next step",
  finalTitle: "Need a Supabase specialist on the call?",
  finalBody: "Book a consulting intro and get practical recommendations for your project.",
  formSubject: "Supabase Consulting",
  architectureSteps: [
    { label: "Discover", detail: "Goals and constraints", icon: Search },
    { label: "Design", detail: "Schema, RLS, auth", icon: Layers },
    { label: "Plan", detail: "Milestones and risks", icon: ClipboardCheck },
    { label: "Ship", detail: "Advise or implement", icon: Rocket },
  ],
  schemaServiceType: ["Supabase consulting", "Supabase architecture consulting", "Supabase expert help"],
  schemaAlternateNames: ["Supabase consultant", "Supabase expert", "Supabase architecture help"],
  relatedSlugs: relatedExcept("supabase-consulting"),
};

export const aiMvpToProduction: ServicePageConfig = {
  slug: "ai-mvp-to-production",
  navLabel: "AI MVP to Production",
  eyebrow: "WEBSRC AI MVP to production",
  tagline: "Turn AI-built MVPs into maintainable production systems",
  title: "AI MVP to Production Service | Harden and Launch | WEBSRC",
  description:
    "Take your AI-built MVP to production with WEBSRC. Code cleanup, Supabase hardening, auth, RLS, deployments, and launch support for founders. Free assessment.",
  keywords:
    "ai mvp to production, productionize ai mvp, lovable production, bolt production, harden ai generated app, supabase production, WEBSRC",
  h1: "Take Your AI MVP to Production Without Starting Over",
  heroBody:
    "You have a working AI-built MVP. Now you need security, ownership, and a launch path. We clean the risky parts, put the backend on solid Supabase footing, and help you ship to real users.",
  primaryCta: "Book Production Assessment",
  secondaryCta: "Get Launch Estimate",
  heroChips: ["Code Cleanup", "Supabase Hardening", "Auth and RLS", "Launch Ready"],
  trustBadges: defaultMigrationTrust,
  problemEyebrow: "The gap",
  problemTitle: "Why AI MVPs stall before production",
  problemIntro:
    "Demos convince. Production needs boring reliability: auth, policies, backups, environments, and code a human can maintain.",
  problems: [
    {
      icon: Code2,
      title: "Generated code is hard to trust",
      body: "It works in the happy path. Edge cases, structure, and naming often need a human pass.",
    },
    {
      icon: Lock,
      title: "Security was deferred",
      body: "RLS, secrets, and role checks were skipped to move faster.",
    },
    {
      icon: Database,
      title: "Data model is unfinished",
      body: "Tables exist, but indexes, constraints, and tenancy are incomplete.",
    },
    {
      icon: KeyRound,
      title: "Auth is fragile",
      body: "Sign-in works once. Invites, roles, and recovery flows need real design.",
    },
    {
      icon: Server,
      title: "No clean deploy story",
      body: "Environments, env vars, and monitoring were never set up for launch.",
    },
    {
      icon: Gauge,
      title: "Performance was never tested",
      body: "Queries and payloads that feel fine with demo data break under load.",
    },
    {
      icon: Building2,
      title: "Ownership is unclear",
      body: "Parts of the stack still sit on builder platforms you do not fully control.",
    },
    {
      icon: Rocket,
      title: "Launch pressure is rising",
      body: "Users, pilots, or fundraising need a production date you can defend.",
    },
  ],
  mapEyebrow: "Path",
  mapTitle: "From AI MVP to production-ready system",
  mapIntro: "We keep what works, replace what is risky, and harden the backend for launch.",
  fromLabel: "Typical starting point",
  toLabel: "Production target",
  fromStack: [
    "AI-generated UI and APIs",
    "Prototype database",
    "Basic or hosted auth",
    "Ad hoc file uploads",
    "Single environment",
  ],
  toStack: [
    "Maintainable codebase",
    "Supabase Postgres + RLS",
    "Supabase Auth",
    "Storage with policies",
    "Staging and production",
  ],
  migrateCards: defaultMigrateCards,
  servicesEyebrow: "Included",
  servicesTitle: "AI MVP to production services",
  servicesIntro: "Focused on making the product safe and shippable, not rewriting for sport.",
  servicesIncluded: [
    {
      title: "Codebase triage",
      body: "We identify what to keep, what to rewrite, and what to isolate so risk stays bounded.",
    },
    {
      title: "Supabase production setup",
      body: "Schema cleanup, auth, storage, RLS, and environment separation.",
    },
    {
      title: "Security hardening",
      body: "Policies, secrets, and the auth gaps that demos usually skip.",
    },
    {
      title: "Performance pass",
      body: "Indexes and obvious query fixes before real traffic arrives.",
    },
    {
      title: "Deployment and launch",
      body: "Vercel or custom hosting, domains, and a go-live checklist.",
    },
    {
      title: "Post-launch support",
      body: "One week included for migration and launch issues.",
    },
  ],
  processEyebrow: "Process",
  processTitle: "How we take an AI MVP to production",
  processIntro: "Assessment first. Then a fixed plan.",
  processSteps: [
    { n: "01", title: "Production assessment", body: "We review the MVP, risks, and launch goals." },
    { n: "02", title: "Triage plan", body: "Keep, fix, or replace decisions with a clear scope." },
    { n: "03", title: "Backend hardening", body: "Supabase schema, auth, storage, and RLS." },
    { n: "04", title: "App cleanup", body: "Stabilize the critical paths users will actually hit." },
    { n: "05", title: "Staging proof", body: "Test the flows that matter before production." },
    { n: "06", title: "Launch support", body: "Cutover help and one week of post-launch cover." },
  ],
  whyEyebrow: "Why WEBSRC",
  whyTitle: "Built for founders with AI-built MVPs",
  whyIntro:
    "We see the same patterns from Lovable, Bolt, v0, and similar tools. The job is to make them production-safe without erasing your momentum.",
  whyPoints: defaultWhyPoints,
  deliverablesEyebrow: "Deliverables",
  deliverablesTitle: "What you get when the MVP is production-ready",
  deliverablesIntro: "A launchable system with ownership and a short support window.",
  deliverables: defaultDeliverables,
  faqEyebrow: "FAQ",
  faqTitle: "AI MVP to production FAQ",
  faqIntro: "Common questions from founders ready to launch.",
  faqs: [
    {
      question: "Do you rewrite the whole AI-generated app?",
      answer:
        "Usually no. We triage. Critical paths get cleaned. Stable UI often stays. Big rewrites only happen when the foundation cannot support production.",
    },
    {
      question: "Do you move the backend to Supabase?",
      answer:
        "Yes, that is the most common production path we recommend for these MVPs.",
    },
    {
      question: "Can you work with Lovable, Bolt, or v0 outputs?",
      answer:
        "Yes. Those are common starting points for this service.",
    },
    {
      question: "How long does production hardening take?",
      answer:
        "Often 1 to 4 weeks depending on auth complexity, data model, and how much cleanup is required.",
    },
    {
      question: "Will my users lose data during the move?",
      answer:
        "No. We plan backups and staging checks before any production cutover.",
    },
    {
      question: "Do you help with deployment?",
      answer:
        "Yes. Hosting, env configuration, and a launch checklist are part of the work.",
    },
    {
      question: "Can this include a Supabase audit?",
      answer:
        "Yes. For teams already partly on Supabase, an audit-first path can make sense before hardening.",
    },
    {
      question: "How much does it cost?",
      answer:
        "It depends on scope. The free assessment ends with a fixed estimate.",
    },
  ],
  auditEyebrow: "Assessment",
  auditTitle: "Book an AI MVP to production assessment",
  auditIntro: "Share the MVP link and goals. We come back with risks, scope, and a launch estimate.",
  auditBullets: [
    "Keep momentum, remove production risk",
    "Supabase hardening included",
    "Fixed-scope estimate after assessment",
  ],
  finalEyebrow: "Next step",
  finalTitle: "Ready to take your AI MVP to production?",
  finalBody: "Book a free assessment and get a practical launch plan.",
  formSubject: "AI MVP to Production",
  architectureSteps: [
    { label: "AI MVP", detail: "Working prototype", icon: Sparkles },
    { label: "Triage", detail: "Keep, fix, replace", icon: Search },
    { label: "Supabase", detail: "Auth, data, RLS", icon: Database },
    { label: "Production", detail: "Launch-ready system", icon: Rocket },
  ],
  schemaServiceType: [
    "AI MVP to production",
    "Productionize AI MVP",
    "Supabase production hardening",
  ],
  schemaAlternateNames: [
    "AI MVP production service",
    "Harden AI generated app",
    "Lovable MVP to production",
  ],
  relatedSlugs: relatedExcept("ai-mvp-to-production"),
};

export const servicePages: Record<string, ServicePageConfig> = {
  "lovable-to-supabase": lovableToSupabase,
  "lovable-migration": lovableMigration,
  "bolt-to-supabase": boltToSupabase,
  "replit-to-supabase": replitToSupabase,
  "v0-to-supabase": v0ToSupabase,
  "firebase-to-supabase": firebaseToSupabase,
  "bubble-to-supabase": bubbleToSupabase,
  "supabase-audit": supabaseAudit,
  "supabase-consulting": supabaseConsulting,
  "ai-mvp-to-production": aiMvpToProduction,
};

export const servicePageList = Object.values(servicePages);
