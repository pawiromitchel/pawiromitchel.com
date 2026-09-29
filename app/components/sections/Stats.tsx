import { Container } from "../layout/Container";
import { CountUp } from "../ui/CountUp";

// Headline facts. Each one is backed by a section further down the page.
// `count` makes the leading number tick up when the strip scrolls into view.
const highlights = [
  { value: "10 years", count: 10, suffix: " years", label: "shipping software since 2016", href: "#experience" },
  { value: "Kubernetes", label: "migration lead at QuickNode", href: "#experience" },
  { value: "3× winner", count: 3, suffix: "× winner", label: "hackathons, 2016 – 2018", href: "#credentials" },
  { value: "CEH", label: "Certified Ethical Hacker", href: "#credentials" },
];

export function Highlights() {
  return (
    <section aria-label="Highlights" className="border-y">
      <Container className="px-0 sm:px-0">
        <ul className="grid grid-cols-2 gap-px bg-border sm:border-x md:grid-cols-4">
          {highlights.map((item) => (
            <li key={item.value} className="bg-background">
              <a href={item.href} className="group block h-full px-5 py-6 transition-colors hover:bg-accent/50 sm:px-8 sm:py-8">
                <span className="block font-heading text-2xl font-bold tracking-[-0.02em] transition-colors group-hover:text-operate sm:text-[32px]">
                  {item.count !== undefined ? (
                    <>
                      <CountUp to={item.count} />
                      {item.suffix}
                    </>
                  ) : (
                    item.value
                  )}
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
