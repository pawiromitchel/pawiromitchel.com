"use client";

import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";
import { Container } from "../layout/Container";

// Months spent in each stretch, from Mar 2016 to now. Widths are proportional.
const segments = [
  { id: "careerit", months: 5, className: "bg-build-bar opacity-55", title: "CareerIT, intern" },
  { id: "bitdynamics", months: 6, className: "bg-build-bar opacity-75", title: "BitDynamics, web developer" },
  {
    id: "alembo",
    months: 60,
    className: "bg-build-bar text-[#2a1b04]",
    label: "Alembo · Lead Software Engineer",
    detail: "2017 – 2022",
  },
  {
    id: "support",
    months: 42,
    className: "bg-stripes-operate",
    label: "QuickNode · Support → Senior Support",
    chip: true,
  },
  {
    id: "ops",
    months: 13,
    className: "bg-operate text-operate-foreground",
    label: "Tech Ops II",
    detail: "now",
  },
];

// Jan of each even year, as a share of the Mar 2016 → now span. Phones get every other one.
const ticks = [
  { year: "2016", left: 0, onPhone: true },
  { year: "2018", left: 17.5, onPhone: false },
  { year: "2020", left: 36.5, onPhone: true },
  { year: "2022", left: 55.6, onPhone: false },
  { year: "2024", left: 74.6, onPhone: true },
  { year: "2026", left: 93.7, onPhone: false },
];

const legend = [
  { label: "Building web and mobile apps", swatch: "bg-build-bar" },
  { label: "Support, then infrastructure work", swatch: "bg-stripes-operate" },
  { label: "Running node infrastructure", swatch: "bg-operate" },
];

const ease = [0.22, 1, 0.36, 1] as const;
const bar: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const segment: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.7, ease } },
};

export function CareerBar() {
  return (
    <section aria-label="Career at a glance" className="pb-16 sm:pb-24">
      <Container>
        <div className="mb-5 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
          <h2 className="font-mono text-xs font-medium tracking-widest text-subtle uppercase sm:text-[13px]">
            Career so far
          </h2>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-muted-foreground">
            {legend.map((item) => (
              <li key={item.label} className="flex items-center gap-2">
                <span aria-hidden className={cn("size-3 rounded-[3px]", item.swatch)} />
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          variants={bar}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          className="flex h-10 gap-1 md:h-16"
          aria-hidden
        >
          {segments.map((s, i) => (
            <motion.div
              key={s.id}
              variants={segment}
              title={s.title ?? s.label}
              style={{ flexGrow: s.months, flexBasis: 0 }}
              className={cn(
                "flex origin-left flex-col justify-center overflow-hidden px-3 md:px-4",
                i === 0 ? "rounded-l-lg rounded-r-sm" : i === segments.length - 1 ? "rounded-l-sm rounded-r-lg" : "rounded-sm",
                s.className
              )}
            >
              {s.label && (
                <span
                  className={cn(
                    "hidden truncate text-sm font-semibold md:block",
                    s.chip && "self-start rounded bg-background px-2 py-0.5 text-foreground"
                  )}
                >
                  {s.label}
                </span>
              )}
              {s.detail && <span className="hidden font-mono text-[11px] md:block">{s.detail}</span>}
            </motion.div>
          ))}
        </motion.div>

        <div className="relative mt-2.5 h-5 font-mono text-xs text-subtle">
          {ticks.map((t) => (
            <span key={t.year} className={cn("absolute", !t.onPhone && "max-sm:hidden")} style={{ left: `${t.left}%` }}>
              {t.year}
            </span>
          ))}
        </div>

        <p className="mt-4 text-[15px] text-muted-foreground text-pretty">
          <span className="font-medium text-foreground">2022:</span> joined QuickNode as a Support Engineer. Promoted to
          Senior in 2023, took on infrastructure work across chains, and moved into technical operations in 2025.
        </p>
      </Container>
    </section>
  );
}
