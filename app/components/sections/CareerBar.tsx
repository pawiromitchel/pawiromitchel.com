"use client";

import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";
import { Container } from "../layout/Container";

// Months spent in each stretch, from Aug 2016 to now. Widths are proportional. Stretches with
// the same `group` at one company share a single bar and one logo.
const segments = [
  {
    id: "bitdynamics",
    logo: "/images/bitdynamics.svg",
    tiny: true,
    href: "#role-earlier",
    months: 6,
    className: "bg-build-bar text-[#2a1b04] opacity-75",
    title: "BitDynamics, web developer",
    short: "BitDynamics · Web Developer",
    years: "2016 – 2017",
  },
  {
    id: "alembo",
    logo: "/images/alembo.svg",
    href: "#role-alembo-0",
    months: 60,
    className: "bg-build-bar text-[#2a1b04]",
    label: "Alembo · Lead Software Engineer",
    short: "Alembo · Lead Software Engineer",
    years: "2017 – 2022",
    detail: "2017 – 2022",
  },
  {
    id: "support",
    group: "quicknode",
    logo: "/images/quicknode.svg",
    href: "#role-quicknode-1",
    months: 42,
    className: "bg-stripes-operate",
    label: "QuickNode · Support → Senior Support",
    short: "QuickNode · Support → Tech Ops II",
    years: "2022 – now",
    chip: true,
  },
  {
    id: "ops",
    group: "quicknode",
    href: "#role-quicknode-0",
    months: 13,
    className: "bg-operate text-operate-foreground",
    label: "Tech Ops II",
    detail: "now",
  },
];

type Segment = (typeof segments)[number];

// One bar per company stretch; the logo comes from whichever segment carries one.
const bars = segments.reduce<{ id: string; months: number; items: Segment[] }[]>((acc, s) => {
  const last = acc[acc.length - 1];
  if (s.group && last?.id === s.group) {
    last.months += s.months;
    last.items.push(s);
  } else {
    acc.push({ id: s.group ?? s.id, months: s.months, items: [s] });
  }
  return acc;
}, []);

// Jan of each even year, as a share of the Aug 2016 → now span. Phones get every other one.
const ticks = [
  { year: "2016", left: 0, onPhone: true },
  { year: "2018", left: 14, onPhone: false },
  { year: "2020", left: 34, onPhone: true },
  { year: "2022", left: 53.7, onPhone: false },
  { year: "2024", left: 73.6, onPhone: true },
  { year: "2026", left: 93.4, onPhone: false },
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
        <div className="mb-5">
          <h2 className="font-mono text-xs font-medium tracking-widest text-subtle uppercase sm:text-[13px]">
            Career so far
          </h2>
        </div>

        <motion.div
          variants={bar}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          className="flex h-10 gap-1 md:h-16"
        >
          {bars.map((bar, i) => {
            const mark = bar.items.find((s) => s.logo);
            return (
              <motion.div
                key={bar.id}
                variants={segment}
                style={{ flexGrow: bar.months, flexBasis: 0 }}
                className={cn(
                  "relative flex origin-left overflow-hidden",
                  i === 0 ? "rounded-l-lg rounded-r-sm" : i === bars.length - 1 ? "rounded-l-sm rounded-r-lg" : "rounded-sm"
                )}
              >
                {bar.items.map((s) => (
                  <a
                    key={s.id}
                    href={s.href}
                    aria-label={s.title ?? s.short ?? s.label}
                    title={s.title ?? s.label}
                    style={{ flexGrow: s.months, flexBasis: 0 }}
                    className={cn(
                      "flex min-w-0 flex-col justify-center transition-[filter] hover:brightness-110 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring",
                      
                      s.className
                    )}
                  >
                  </a>
                ))}
                {mark?.logo && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 flex items-center justify-center"
                  >
                    <span
                      className={cn(
                        "flex items-center justify-center",
                        mark.chip ? "rounded-md bg-background p-1 text-foreground md:rounded-lg md:p-1.5" : "text-[#2a1b04]"
                      )}
                    >
                      <span
                        className={cn("block bg-current", mark.tiny ? "size-3 md:size-4" : "size-5 md:size-7")}
                        style={{
                          maskImage: `url(${mark.logo})`,
                          WebkitMaskImage: `url(${mark.logo})`,
                          maskSize: "contain",
                          WebkitMaskSize: "contain",
                          maskRepeat: "no-repeat",
                          WebkitMaskRepeat: "no-repeat",
                          maskPosition: "center",
                          WebkitMaskPosition: "center",
                        }}
                      />
                    </span>
                  </span>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        <div className="relative mt-2.5 h-5 font-mono text-xs text-subtle">
          {ticks.map((t) => (
            <span key={t.year} className={cn("absolute", !t.onPhone && "max-sm:hidden")} style={{ left: `${t.left}%` }}>
              {t.year}
            </span>
          ))}
        </div>

        {/* Logos carry the bar; this names each stretch and doubles as the colour key. */}
        <ul className="mt-5 space-y-2.5 md:grid md:grid-cols-3 md:gap-x-8 md:space-y-0">
          {segments
            .filter((s) => s.short)
            .map((s) => (
              <li key={s.id}>
                <a href={s.href} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span aria-hidden className={cn("size-3 shrink-0 rounded-[3px]", s.className)} />
                  <span className="text-foreground">{s.short}</span>
                  <span className="ml-auto font-mono text-xs whitespace-nowrap text-subtle">{s.years}</span>
                </a>
              </li>
            ))}
        </ul>
      </Container>
    </section>
  );
}
