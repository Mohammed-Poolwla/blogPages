import {
  Building2,
  Code2,
  Database,
  Gauge,
  HardDrive,
  KeyRound,
  Layers,
  Lock,
  Rocket,
  Shuffle,
  Sparkles,
} from "lucide-react";
import {
  defaultDeliverables,
  defaultMigrateCards,
  defaultMigrationTrust,
  defaultProcessSteps,
  defaultServicesIncluded,
  defaultWhyPoints,
} from "./shared";
import type { ServicePageConfig } from "./types";

type MigrationInput = {
  slug: string;
  navLabel: string;
  source: string;
  sourceShort: string;
  title: string;
  description: string;
  keywords: string;
  h1: string;
  heroBody: string;
  problemIntro: string;
  problems?: ServicePageConfig["problems"];
  fromStack: string[];
  mapIntro?: string;
  faqPrefix?: string;
  relatedSlugs: string[];
  alternateNames: string[];
};

function defaultSourceProblems(source: string): ServicePageConfig["problems"] {
  return [
    {
      icon: Code2,
      title: "Generated or platform code gets hard to change",
      body: `${source} helps you ship fast. A few months later, small changes feel risky because the app grew without a clean structure you fully control.`,
    },
    {
      icon: Building2,
      title: "You do not fully own the stack",
      body: `Your product depends on ${source} hosting, auth, or data services. That is fine for an MVP. It gets awkward when you need custom infra or enterprise controls.`,
    },
    {
      icon: Database,
      title: "The database was not built to scale",
      body: "Tables pile up without indexes or clean relations. What worked for early users starts slowing down once traffic grows.",
    },
    {
      icon: KeyRound,
      title: "Auth needs to live in your account",
      body: "Users, sessions, and OAuth should sit in a Supabase project you control, with clear recovery options if something breaks.",
    },
    {
      icon: HardDrive,
      title: "File storage gets messy",
      body: "Uploads end up scattered. There is no clear bucket plan, retention rule, or easy way to move production assets later.",
    },
    {
      icon: Lock,
      title: "Row Level Security is missing",
      body: "Multi-tenant SaaS needs proper RLS. Without it, you are one bad query away from a serious data problem.",
    },
    {
      icon: Gauge,
      title: "Performance issues show up late",
      body: "Heavy queries and chatty API calls often stay hidden until real customers hit the product.",
    },
    {
      icon: Layers,
      title: "You need custom backend work",
      body: "Billing webhooks, edge functions, and role-based flows usually outgrow what the platform gives you by default.",
    },
  ];
}

export function buildMigrationConfig(input: MigrationInput): ServicePageConfig {
  const { source, sourceShort } = input;
  const faqName = `${source} to Supabase`;

  return {
    slug: input.slug,
    navLabel: input.navLabel,
    eyebrow: `WEBSRC ${sourceShort} to Supabase migration`,
    tagline: `Production-ready Supabase migrations for ${source} apps`,
    title: input.title,
    description: input.description,
    keywords: input.keywords,
    h1: input.h1,
    heroBody: input.heroBody,
    primaryCta: "Book Free Migration Assessment",
    secondaryCta: "Get Migration Estimate",
    heroChips: ["Secure Migration", "Zero Data Loss", "Full Ownership", "Production Ready"],
    trustBadges: defaultMigrationTrust,
    problemEyebrow: "Why migrate",
    problemTitle: `Why founders migrate from ${source} to Supabase`,
    problemIntro: input.problemIntro,
    problems: input.problems ?? defaultSourceProblems(source),
    mapEyebrow: "What moves",
    mapTitle: `What we migrate from ${source} to Supabase`,
    mapIntro:
      input.mapIntro ??
      `From ${source}-hosted pieces to a Supabase setup under your own accounts and API keys.`,
    fromLabel: `From ${source}`,
    toLabel: "To Supabase (your ownership)",
    fromStack: input.fromStack,
    toStack: [
      "Supabase Database",
      "Supabase Auth",
      "Supabase Storage",
      "Edge Functions",
      "Infrastructure you own",
    ],
    migrateCards: defaultMigrateCards,
    servicesEyebrow: "Included work",
    servicesTitle: `${source} to Supabase migration services included`,
    servicesIntro:
      "This is not just an export. You get ownership, hardening, and a stack you can keep building on.",
    servicesIncluded: defaultServicesIncluded,
    processEyebrow: "Process",
    processTitle: "How our Supabase migration service works",
    processIntro: "Six clear steps from free assessment to launch. Built for founders who want a plan, not surprises.",
    processSteps: defaultProcessSteps,
    whyEyebrow: "Why WEBSRC",
    whyTitle: `Why teams hire WEBSRC for ${source} migrations`,
    whyIntro:
      "You are not buying a script. You are working with engineers who have shipped Supabase SaaS and know where migrations usually break.",
    whyPoints: defaultWhyPoints,
    deliverablesEyebrow: "Deliverables",
    deliverablesTitle: `What you get after a ${source} to Supabase migration`,
    deliverablesIntro:
      "Concrete handoff items, not a vague promise. Everything lands in projects and repos you control.",
    deliverables: defaultDeliverables,
    faqEyebrow: "FAQ",
    faqTitle: `${faqName} migration FAQ`,
    faqIntro: "Common questions on data safety, downtime, auth, pricing, and support.",
    faqs: [
      {
        question: `How long does a ${faqName} migration take?`,
        answer:
          "Most apps take 1 to 4 weeks. It depends on schema size, auth setup, storage volume, and how much cleanup you want during the move. After the free assessment, you get a real timeline before any paid work starts.",
      },
      {
        question: "Will I lose my data?",
        answer:
          "No. We take backups, rehearse on staging, and check row counts and critical relations before production cutover.",
      },
      {
        question: "Can existing users keep using the app?",
        answer:
          "Yes. We plan the auth move and cutover so users can keep signing in. For a well-scoped app, downtime is often just a few minutes.",
      },
      {
        question: "Do you migrate authentication?",
        answer: `Yes. User accounts, providers, and permissions are in scope. The exact approach depends on how ${source} stores identities today, and whether you need passwords, OAuth, or magic links on Supabase Auth.`,
      },
      {
        question: "Can you migrate storage like files and images?",
        answer:
          "Yes. We move buckets and objects into Supabase Storage, update the app paths, and set access policies so private files stay private.",
      },
      {
        question: "Will my product URL change?",
        answer: `Your public site URL can stay the same. API and storage endpoints usually change when you leave ${source}-hosted services. We update the app and env config so those changes are planned and documented.`,
      },
      {
        question: "Do you work on production apps with live customers?",
        answer:
          "Yes. That is a common request. We prioritize backups, a staging rehearsal, and a clear rollback plan before touching live traffic.",
      },
      {
        question: "Can you improve the code while migrating?",
        answer:
          "Yes, if we agree on scope first. Common upgrades include API cleanup, RLS, indexes, and removing fragile generated patterns. Big rewrites get priced separately so the migration stays predictable.",
      },
      {
        question: "Do you sign NDAs?",
        answer:
          "Yes. We work under NDA when founders need privacy around unreleased products or customer data.",
      },
      {
        question: `What if my ${source} app is large or complex?`,
        answer:
          "We split the work. That might mean module-by-module cutovers or feature flags instead of one big switch. The assessment call is where we pick the safer path.",
      },
      {
        question: `How much does a ${faqName} migration cost?`,
        answer:
          "It depends on schema size, auth and storage volume, custom functions, and how much hardening you want. The free audit ends with a fixed-scope estimate so you are not buying an open-ended project.",
      },
      {
        question: "Do you help after the migration?",
        answer:
          "Yes. Every project includes one week of support for migration-related issues. If you want ongoing product work after that, we can set up a retainer.",
      },
    ],
    auditEyebrow: "Free assessment",
    auditTitle: `Book a free ${faqName} migration assessment`,
    auditIntro:
      "Tell us about your app. We come back with scope, risks, timeline, and a fixed estimate. No pressure pitch.",
    auditBullets: [
      "For founders, indie hackers, and technical CTOs",
      "Reviewed by an engineer, not a sales script",
      "NDAs available. Production apps welcome.",
    ],
    finalEyebrow: "Next step",
    finalTitle: `Ready to migrate your ${source} app to Supabase?`,
    finalBody: `Get a free assessment and a clear plan for moving from ${source} to infrastructure you own.`,
    formSubject: `${faqName} Migration`,
    architectureSteps: [
      { label: sourceShort, detail: "App + hosted stack", icon: Sparkles },
      { label: "Migration", detail: "Schema, auth, storage", icon: Shuffle },
      { label: "Supabase", detail: "Postgres + Auth + Storage", icon: Database },
      { label: "Production Ready", detail: "RLS, backups, ownership", icon: Rocket },
    ],
    schemaServiceType: [
      `${faqName} migration`,
      "Supabase migration service",
      `${source} cloud migration`,
    ],
    schemaAlternateNames: input.alternateNames,
    relatedSlugs: input.relatedSlugs,
  };
}
