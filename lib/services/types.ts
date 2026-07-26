import type { LucideIcon } from "lucide-react";

export type ServiceCard = {
  icon: LucideIcon;
  title: string;
  body?: string;
  items?: string[];
};

export type ServiceStep = {
  n: string;
  title: string;
  body: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ArchitectureStep = {
  label: string;
  detail: string;
  icon: LucideIcon;
};

export type ServicePageConfig = {
  slug: string;
  navLabel: string;
  eyebrow: string;
  tagline: string;
  title: string;
  description: string;
  keywords: string;
  h1: string;
  heroBody: string;
  primaryCta: string;
  secondaryCta: string;
  heroChips: string[];
  trustBadges: string[];
  problemEyebrow: string;
  problemTitle: string;
  problemIntro: string;
  problems: ServiceCard[];
  mapEyebrow: string;
  mapTitle: string;
  mapIntro: string;
  fromLabel: string;
  toLabel: string;
  fromStack: string[];
  toStack: string[];
  migrateCards: ServiceCard[];
  servicesEyebrow: string;
  servicesTitle: string;
  servicesIntro: string;
  servicesIncluded: Array<{ title: string; body: string }>;
  processEyebrow: string;
  processTitle: string;
  processIntro: string;
  processSteps: ServiceStep[];
  whyEyebrow: string;
  whyTitle: string;
  whyIntro: string;
  whyPoints: ServiceCard[];
  deliverablesEyebrow: string;
  deliverablesTitle: string;
  deliverablesIntro: string;
  deliverables: string[];
  faqEyebrow: string;
  faqTitle: string;
  faqIntro: string;
  faqs: ServiceFaq[];
  auditEyebrow: string;
  auditTitle: string;
  auditIntro: string;
  auditBullets: string[];
  finalEyebrow: string;
  finalTitle: string;
  finalBody: string;
  formSubject: string;
  architectureSteps: ArchitectureStep[];
  schemaServiceType: string[];
  schemaAlternateNames: string[];
  relatedSlugs: string[];
  /** Optional public pricing (shown on the landing page when set). */
  pricing?: {
    amountLabel: string;
    note: string;
    minPrice?: number;
    currency?: string;
  };
  /** Optional lead-focused proof / comparison section. */
  hookSection?: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Array<{ title: string; body: string }>;
  };
};
