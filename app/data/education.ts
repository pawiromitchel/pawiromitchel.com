export interface Credential {
  title: string;
  issuer: string;
  year?: string;
}

export const education: Credential[] = [
  {
    title: "B.S. Software Engineering",
    issuer: "UNASAT",
    year: "2016 – 2021",
  },
  {
    title: "Diploma, Application Development",
    issuer: "Natuurtechnisch Instituut",
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
  { title: "3rd place, CTF", issuer: "Secured by Design", year: "2019" },
  { title: "Winner", issuer: "IT Core Hackathon", year: "2019" },
  { title: "Winner", issuer: "IT Core Hackathon", year: "2017" },
];
