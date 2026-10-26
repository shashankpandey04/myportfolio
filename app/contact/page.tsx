"use client";

import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";

const email = "contact.shashankpandey04@gmail.com";

const contactLinks = [
  {
    name: "GitHub",
    description: "Projects, experiments, and open-source work.",
    href: "https://github.com/shashankpandey04",
    icon: Github,
    label: "@shashankpandey04",
  },
  {
    name: "LinkedIn",
    description: "Professional connections and opportunities.",
    href: "https://www.linkedin.com/in/shashankpandey04/",
    icon: Linkedin,
    label: "Connect professionally",
  },
  {
    name: "Instagram",
    description: "A little glimpse beyond the code.",
    href: "https://instagram.com/shashank.pandey04",
    icon: Instagram,
    label: "@shashank.pandey04",
  },
];

const topics = [
  "Internships & opportunities",
  "Backend & full-stack development",
  "Cloud infrastructure & system design",
  "Startups & product ideas",
  "Developer communities & events",
];

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <main className="min-h-screen bg-[#080808] text-[#eae8e3]">
      <div className="mx-auto max-w-6xl px-5 pb-24 pt-28 sm:px-8 sm:pt-36 lg:px-12">
        <section className="border-b border-white/10 pb-12 sm:pb-16">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-cyan-400" />
            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/45">
              Get in touch
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-[1fr_240px] md:items-end">
            <div>
              <h1 className="max-w-3xl font-serif text-5xl font-normal leading-[1.04] tracking-[-0.045em] sm:text-6xl md:text-7xl">
                Good things
                <br />
                <span className="text-white/40">start with a hello.</span>
              </h1>

              <p className="mt-7 max-w-xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
                Have an interesting project, an opportunity, or an idea worth
                exploring? I'm always up for talking about backend systems,
                cloud infrastructure, products, and the process of building
                things that matter.
              </p>
            </div>

            <div className="border-t border-white/10 pt-5 md:border-l md:border-t-0 md:pl-6">
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">
                Current focus
              </p>
              <p className="mt-3 font-serif text-xl leading-snug">
                Engineering, building,
                <br />
                and new opportunities.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
              01 — The best way to reach me
            </p>

            <div className="mt-6 border border-white/10 p-5 sm:p-7">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center border border-white/10 bg-white/[0.03]">
                  <Mail size={18} strokeWidth={1.4} />
                </div>

                <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.13em] text-white/40">
                  <span className="h-1.5 w-1.5 bg-cyan-400" />
                  Email
                </span>
              </div>

              <p className="mt-7 break-all font-serif text-xl leading-relaxed tracking-[-0.025em] text-white sm:text-2xl lg:text-[26px]">
                {email}
              </p>

              <p className="mt-3 max-w-md text-xs leading-6 text-white/40">
                For opportunities, collaborations, technical discussions, or
                anything interesting you're working on.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={`mailto:${email}`}
                  className="group inline-flex items-center gap-2 bg-white px-4 py-3 text-xs font-medium text-black transition-colors hover:bg-gray-200"
                >
                  Send me an email
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 border border-white/15 px-4 py-3 text-xs text-white/70 transition-colors hover:border-white/30 hover:text-white"
                >
                  {copied ? (
                    <>
                      <Check size={14} />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      Copy email
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
              02 — What we can talk about
            </p>

            <p className="mt-5 max-w-sm font-serif text-2xl leading-snug tracking-[-0.02em] sm:text-3xl">
              Got something in mind?
            </p>

            <p className="mt-3 text-sm leading-7 text-white/45">
              Here are a few things I'd love to hear from you about.
            </p>

            <ul className="mt-7">
              {topics.map((topic, index) => (
                <li
                  key={topic}
                  className="flex items-center gap-4 border-b border-white/[0.08] py-4 text-sm text-white/65"
                >
                  <span className="font-mono text-[10px] text-white/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-white/10 pt-10 sm:pt-12">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
                03 — Elsewhere
              </p>

              <h2 className="mt-3 font-serif text-3xl tracking-[-0.035em] sm:text-4xl">
                Around the internet.
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-7 text-white/45">
                Different platforms, different sides of what I build and who
                I connect with.
              </p>
            </div>

            <ArrowDownRight
              size={22}
              strokeWidth={1.2}
              className="hidden text-white/30 sm:block"
            />
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {contactLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[175px] flex-col justify-between border border-white/10 p-5 transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.025] sm:p-6"
                >
                  <div className="flex items-start justify-between">
                    <Icon
                      size={19}
                      strokeWidth={1.4}
                      className="text-white/55 transition-colors group-hover:text-cyan-400"
                    />

                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.4}
                      className="text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                    />
                  </div>

                  <div className="mt-8">
                    <h3 className="font-serif text-2xl tracking-[-0.025em]">
                      {link.name}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-white/40">
                      {link.description}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-[10px] text-white/55 transition-colors group-hover:text-cyan-400">
                      {link.label}
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        <section className="mt-16 border-t border-white/10 pt-10 sm:mt-20 sm:pt-12">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/35">
            One last thing
          </p>

          <h2 className="mt-5 max-w-3xl font-serif text-3xl leading-tight tracking-[-0.035em] sm:text-4xl md:text-5xl">
            The best conversations usually begin with{" "}
            <span className="text-white/40">a simple question.</span>
          </h2>

          <div className="mt-6 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <p className="max-w-xl text-sm leading-7 text-white/45">
              I'm focused on growing as an engineer, building useful systems,
              and finding opportunities to solve real problems with people who
              care about doing the work well.
            </p>

            <a
              href={`mailto:${email}`}
              className="group inline-flex w-fit shrink-0 items-center gap-2 border-b border-white/25 pb-2 text-xs text-white/75 transition-colors hover:border-cyan-400 hover:text-white"
            >
              Start a conversation
              <ArrowUpRight
                size={14}
                className="text-cyan-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </section>

        <footer className="mt-16 flex flex-col gap-2 border-t border-white/[0.07] pt-6 text-[10px] uppercase tracking-[0.15em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <span>Shashank Pandey</span>
          <span>Always building. Always learning.</span>
        </footer>
      </div>
    </main>
  );
}