import {
  BadgeCheck,
  Clock,
  Database,
  FileCode2,
  Fingerprint,
  GitBranch,
  HardDrive,
  Headphones,
  KeyRound,
  LayoutTemplate,
  Server,
  Shield,
} from "lucide-react";
import type { ServiceCard } from "./types";

export const SITE_URL = "https://websrc.uk";

export const defaultMigrateCards: ServiceCard[] = [
  {
    icon: Database,
    title: "Database",
    items: ["Schema", "Tables and relations", "Indexes", "Data cutover"],
  },
  {
    icon: KeyRound,
    title: "Authentication",
    items: ["User accounts", "Sessions", "OAuth providers", "Roles and permissions"],
  },
  {
    icon: HardDrive,
    title: "Storage",
    items: ["Files and images", "Documents", "Buckets", "Access policies"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["APIs", "Edge Functions", "Business logic", "Webhooks"],
  },
  {
    icon: LayoutTemplate,
    title: "Frontend wiring",
    items: ["Connect your existing UI", "Fix API calls", "Env configuration", "Architecture cleanup"],
  },
  {
    icon: Shield,
    title: "Security",
    items: ["Row Level Security", "Policies", "Secrets and env vars", "Backup strategy"],
  },
];

export const defaultWhyPoints: ServiceCard[] = [
  {
    icon: BadgeCheck,
    title: "We work with Supabase every week",
    body: "Postgres, Auth, Storage, RLS, and Edge Functions in apps that are already in production.",
  },
  {
    icon: FileCode2,
    title: "Full-stack, not just a dump script",
    body: "Next.js on the front, Node or NestJS when needed, and SaaS patterns we have shipped before.",
  },
  {
    icon: Fingerprint,
    title: "Security is part of the job",
    body: "Policies and secrets get set up during the migration, not as a follow-up ticket months later.",
  },
  {
    icon: Clock,
    title: "Clear timeline from day one",
    body: "You know what ships each week, and what sits outside the fixed scope.",
  },
  {
    icon: GitBranch,
    title: "You own the repo and the cloud",
    body: "Supabase project, code, and env vars land under your accounts. No shared black box.",
  },
  {
    icon: Headphones,
    title: "Support after go-live",
    body: "One week of migration support is included. Longer help is available if you want it.",
  },
];

export const defaultDeliverables = [
  "Production-ready Supabase project",
  "Clean database schema",
  "Authentication migration",
  "Storage migration",
  "RLS policies",
  "Environment configuration",
  "Technical documentation",
  "Deployment support",
  "One week of post-launch support",
];

export const defaultMigrationTrust = [
  "Secure Migration",
  "Zero Downtime Strategy",
  "Zero Data Loss",
  "Full Source Ownership",
  "Production Ready",
  "Clean Database Architecture",
  "Authentication Migration",
  "Storage Migration",
];

export const defaultServicesIncluded = [
  {
    title: "Database Migration",
    body: "We move the schema and data, keep relationships intact, and check row counts before anything goes live.",
  },
  {
    title: "Authentication Migration",
    body: "Existing users keep signing in. We migrate accounts, roles, and permissions into Supabase Auth.",
  },
  {
    title: "Storage Migration",
    body: "Files, images, and documents move into Supabase Storage with a clear bucket layout and access rules.",
  },
  {
    title: "Backend Refactoring",
    body: "We clean up the parts of generated code that will hurt you later, and fix the security and performance issues we find.",
  },
  {
    title: "Production Hardening",
    body: "RLS policies, a quick security pass, backups, and separate staging and production environments.",
  },
  {
    title: "Deployment",
    body: "Deploy to Vercel or your own host, wire up the domain, and leave you with a simple go-live checklist.",
  },
];

export const defaultProcessSteps = [
  {
    n: "01",
    title: "Free Assessment",
    body: "We look at your app, data model, auth, storage, and where the real risk is.",
  },
  {
    n: "02",
    title: "Codebase Audit",
    body: "We mark what can stay, what must change, and which patterns will cause pain.",
  },
  {
    n: "03",
    title: "Migration Plan",
    body: "You get a written plan with scope, order of work, expected downtime, and done criteria.",
  },
  {
    n: "04",
    title: "Dev Environment",
    body: "We set up Supabase, migrate a staging copy, and connect the app so you can test.",
  },
  {
    n: "05",
    title: "Production Migration",
    body: "Backups first, then a controlled cutover with checks at each step.",
  },
  {
    n: "06",
    title: "Testing and Launch",
    body: "We verify auth, core flows, storage, and RLS before you tell users it is live.",
  },
];
