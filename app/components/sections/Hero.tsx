import React from "react";
import Link from "next/link";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { personalInfo } from "@/app/data/personal";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 bg-background">
      <Container className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left side - Text content */}
          <div className="animate-fade-in-up">
            <div className="mb-4 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
              <p className="text-primary font-semibold text-sm">Welcome to my portfolio</p>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              {personalInfo.name}
            </h1>

            <h2 className="text-2xl lg:text-3xl font-semibold text-primary mb-8">
              {personalInfo.title}
            </h2>

            <p className="text-base lg:text-lg text-muted leading-relaxed mb-10 max-w-xl">
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 mb-16">
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
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-border">
              <div>
                <p className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {personalInfo.stats.yearsExperience}+
                </p>
                <p className="text-sm text-muted">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {personalInfo.stats.projectsCompleted}+
                </p>
                <p className="text-sm text-muted">Projects Done</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {personalInfo.stats.companiesWorked}
                </p>
                <p className="text-sm text-muted">Companies</p>
              </div>
            </div>
          </div>

          {/* Right side - Illustration/Image placeholder */}
          <div className="relative animate-slide-in-right hidden lg:block">
            <div className="relative w-full">
              {/* Profile image placeholder - will be replaced with actual image */}
              <div className="relative flex items-center justify-center">
                <div className="w-96 h-96 rounded-3xl bg-gradient-to-br from-primary to-primary-dark/70 flex items-center justify-center shadow-2xl overflow-hidden hover:shadow-lg hover:scale-102 transition-all duration-300">
                  <div className="text-white text-center">
                    <p className="text-8xl mb-6">👨‍💻</p>
                    <p className="text-2xl font-semibold">Pawiro Mitchel</p>
                    <p className="text-base opacity-90 mt-3">
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

              {/* Subtle floating elements */}
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-24">
          <div className="animate-bounce-slow opacity-60">
            <svg
              className="w-5 h-5 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </Container>
    </section>
  );
}
