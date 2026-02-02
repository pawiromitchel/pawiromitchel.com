import React from "react";
import Link from "next/link";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { personalInfo } from "@/app/data/personal";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 bg-gradient-to-b from-white via-primary/5 to-white">
      <Container className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="animate-fade-in-up">
            <div className="mb-4 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
              <p className="text-primary font-semibold text-sm">Welcome to my portfolio</p>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight mb-4">
              {personalInfo.name}
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
              {personalInfo.title}
            </h2>

            <p className="text-lg text-muted leading-relaxed mb-8 max-w-lg">
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/projects">
                <Button size="lg">View My Work</Button>
              </Link>
              <a href="mailto:pawiro@mitchel.com">
                <Button size="lg" variant="secondary">
                  Get In Touch
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-primary">
                  {personalInfo.stats.yearsExperience}+
                </p>
                <p className="text-sm text-muted">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">
                  {personalInfo.stats.projectsCompleted}+
                </p>
                <p className="text-sm text-muted">Projects Done</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">
                  {personalInfo.stats.companiesWorked}
                </p>
                <p className="text-sm text-muted">Companies</p>
              </div>
            </div>
          </div>

          {/* Right side - Illustration/Image placeholder */}
          <div className="relative animate-slide-in-right">
            <div className="relative w-full aspect-square">
              {/* Decorative circles */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-2xl"></div>

              {/* Profile image placeholder - will be replaced with actual image */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-primary to-primary-dark/50 flex items-center justify-center shadow-2xl border-8 border-white overflow-hidden">
                  <div className="text-white text-center">
                    <p className="text-6xl mb-4">👨‍💻</p>
                    <p className="text-xl font-semibold">Pawiro Mitchel</p>
                    <p className="text-sm opacity-90 mt-2">
                      Infrastructure Engineer
                    </p>
                  </div>
                  {/* Uncomment when image is available */}
                  {/* <Image
                    src={profileImage}
                    alt="Pawiro Mitchel"
                    fill
                    className="object-cover"
                    priority
                  /> */}
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-20">
          <div className="animate-bounce-slow">
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </Container>
    </section>
  );
}
