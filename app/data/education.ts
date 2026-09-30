export interface Credential {
  title: string;
  issuer: string;
  year?: string;
  note?: string;
}

export const education: Credential[] = [
  {
    title: "Software Engineering",
    issuer: "UNASAT",
    year: "2016 – 2021",
    note: "Left in the final year, no degree",
  },
  {
    title: "Diploma, ICT Application Development",
    issuer: "NATIN",
    year: "2012 – 2016",
  },
];

export const certifications: Credential[] = [
  {
    title: "Certified Ethical Hacker (CEH)",
    issuer: "Secured by Design",
    year: "2018",
  },
];

export const awards: Credential[] = [
  { title: "Winner", issuer: "Fintech Hackathon", year: "2018" },
  { title: "Winner", issuer: "IT Core Hackathon", year: "2017" },
  { title: "Winner", issuer: "Hackomation", year: "2016" },
  { title: "2nd place", issuer: "Guyana Hackathon", year: "2016" },
  { title: "3rd place, CTF", issuer: "Secured by Design", year: "2019" },
  { title: "4th place", issuer: "Caribbean Code Challenge", year: "2017" },
  { title: "4th place", issuer: "Fishackathon", year: "2016" },
];
