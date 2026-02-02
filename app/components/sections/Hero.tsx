import React from "react";
import Link from "next/link";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { AnimatedText } from "../ui/AnimatedText";
import { personalInfo } from "@/app/data/personal";

export function Hero() {
  const roles = [
    "Technical Operations Engineer",
    "Senior Web3 Support Engineer",
    "Web3 Lead Developer",
    "Lead Software Engineer",
  ];

  const topSkills = ["TypeScript", "Go", "Python", "Web3", "Kubernetes", "DevOps"];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-background via-primary/5 to-primary/25 relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/40 rounded-full blur-3xl opacity-40 -z-10"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl opacity-30 -z-10"></div>
      <Container className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Profile Image */}
          <div className="flex justify-center lg:justify-start animate-fade-in-up order-1 lg:order-1">
            <div className="relative w-64 h-64 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-8 border-primary/30 flex items-center justify-center shadow-2xl overflow-hidden">
              <p className="text-8xl lg:text-9xl">👨‍💻</p>
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

          {/* Right side - Text content */}
          <div className="animate-slide-in-right order-2 lg:order-2">
            {/* Welcome Label */}
            <p className="text-primary font-semibold text-xs lg:text-sm mb-4 lg:mb-8 uppercase tracking-widest">
              Welcome to my profile
            </p>

            {/* Main Heading */}
            <h1 className="text-3xl lg:text-6xl font-bold text-foreground leading-tight mb-1 lg:mb-2">
              I'm {personalInfo.name}
            </h1>

            {/* Animated Roles */}
            <h2 className="text-2xl lg:text-5xl font-bold text-primary mb-6 lg:mb-8 leading-tight min-h-[50px] lg:min-h-[60px]">
              <AnimatedText texts={roles} interval={3000} />
            </h2>

            {/* Bio Description */}
            <p className="text-sm lg:text-lg text-muted leading-relaxed max-w-xl mb-6 lg:mb-8">
              {personalInfo.bio}
            </p>

            {/* Core Skills */}
            <div className="mb-6 lg:mb-8">
              <p className="text-xs font-semibold text-muted mb-2 lg:mb-3 uppercase tracking-wide">
                Core Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {topSkills.map((skill) => (
                  <Badge key={skill} variant="primary" size="sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA and Social */}
            <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6">
              <a href="mailto:pawiro@mitchel.com">
                <Button size="lg">Get In Touch</Button>
              </a>

              {/* Social Links */}
              <div className="flex gap-3 lg:gap-4">
                {personalInfo.social.github && (
                  <a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                )}
                {personalInfo.social.linkedin && (
                  <a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.807 0-9.726h3.554v1.375c.427-.658 1.189-1.595 2.894-1.595 2.114 0 3.695 1.381 3.695 4.352v5.594zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.955.77-1.715 1.959-1.715 1.188 0 1.914.759 1.939 1.715 0 .953-.751 1.715-1.983 1.715zm1.946 11.597H3.392V9.226h3.891v11.226zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                  </a>
                )}
                {personalInfo.social.twitter && (
                  <a
                    href={personalInfo.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 002.856-5.51 10 10 0 01-2.956.025 5 5 0 00-.863-.99 5.002 5.002 0 01-5.96 1.366 5.007 5.007 0 001.038-2.82 10 10 0 01-2.752.632A5 5 0 107 12.77 10 10 0 106.56 2.5a5 5 0 00-4.98 6.44A10 10 0 010 12.5c0 5.523 4.477 10 10 10s10-4.477 10-10c0-.16-.007-.32-.02-.479" />
                    </svg>
                  </a>
                )}
              </div>
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
