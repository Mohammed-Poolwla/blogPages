"use client";

import { motion } from "framer-motion";
import { ArrowDown, type LucideIcon } from "lucide-react";

export type DiagramStep = {
  label: string;
  detail: string;
  icon: LucideIcon;
};

export default function ArchitectureDiagram({
  steps,
  footerLeft = "Zero data loss target",
  footerRight = "Minimal downtime cutover",
}: {
  steps: DiagramStep[];
  footerLeft?: string;
  footerRight?: string;
}) {
  return (
    <div
      className="migration-diagram relative overflow-hidden rounded-2xl border border-[#d9e2ec] bg-white p-6 shadow-lg shadow-[#0b1f3a]/8 sm:p-8"
      aria-label="Service architecture flow"
    >
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-[#00b4d8]/15 blur-3xl" />
        <div className="absolute -right-8 bottom-0 h-44 w-44 rounded-full bg-[#0b1f3a]/10 blur-3xl" />
      </div>

      <p className="relative mb-6 text-xs font-bold uppercase tracking-[0.24em] text-[#0b7ea4]">
        Architecture path
      </p>

      <ol className="relative space-y-0">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <li key={`${step.label}-${index}`} className="relative">
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.45, delay: index * 0.12, ease: "easeOut" }}
                className="flex items-center gap-4 rounded-xl border border-[#d9e2ec] bg-[#f5f8fb] p-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#b9d8e8] bg-[#e8f7fc]">
                  <Icon className="h-5 w-5 text-[#0b7ea4]" aria-hidden />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0b1f3a] sm:text-base">{step.label}</div>
                  <div className="text-xs text-[#5b6b7c] sm:text-sm">{step.detail}</div>
                </div>
                <div className="ml-auto hidden text-xs font-mono text-[#0b7ea4] sm:block">
                  0{index + 1}
                </div>
              </motion.div>

              {index < steps.length - 1 && (
                <div className="flex justify-center py-2" aria-hidden>
                  <motion.div
                    animate={{ y: [0, 4, 0], opacity: [0.45, 1, 0.45] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: index * 0.15 }}
                  >
                    <ArrowDown className="h-4 w-4 text-[#00b4d8]" />
                  </motion.div>
                </div>
              )}
            </li>
          );
        })}
      </ol>

      <div className="relative mt-6 grid grid-cols-2 gap-2 text-[11px] text-[#5b6b7c] sm:text-xs">
        <div className="rounded-lg border border-[#b9d8e8] bg-[#e8f7fc] px-3 py-2 font-semibold text-[#0b1f3a]">{footerLeft}</div>
        <div className="rounded-lg border border-[#b9d8e8] bg-[#e8f7fc] px-3 py-2 font-semibold text-[#0b1f3a]">{footerRight}</div>
      </div>
    </div>
  );
}
