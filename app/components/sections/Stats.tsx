import { Container } from "../layout/Container";

// Headline facts. Each one is backed by a section further down the page.
const highlights = [
  { value: "10 years", label: "shipping software since 2016", href: "#experience" },
  { value: "Kubernetes", label: "migration lead at QuickNode", href: "#experience" },
  { value: "2× winner", label: "IT Core Hackathon, 2017 & 2019", href: "#about" },
  { value: "CEH", label: "Certified Ethical Hacker", href: "#about" },
];

export function Highlights() {
  return (
    <section aria-label="Highlights" className="border-y">
      <Container className="px-0 sm:px-0">
        <ul className="grid grid-cols-2 gap-px bg-border sm:border-x md:grid-cols-4">
          {highlights.map((item) => (
            <li key={item.value} className="bg-background">
              <a href={item.href} className="group block h-full px-5 py-6 transition-colors hover:bg-accent/50 sm:px-8">
                <span className="block text-lg font-semibold tracking-tight transition-colors group-hover:text-brand">
                  {item.value}
                </span>
                <span className="mt-0.5 block text-sm text-muted-foreground">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
