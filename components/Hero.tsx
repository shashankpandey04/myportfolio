"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
} from "lucide-react";
import ResumeViewer from "./ResumeViewer";

export default function Hero() {
  const [openResume, setOpenResume] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080808] px-5 pb-12 pt-32 text-[#eae8e3] sm:px-8 sm:pt-36 md:pb-16 lg:px-12">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="min-w-0">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-400" />

              <p className="text-[10px] uppercase tracking-[0.24em] text-white/45">
                Developer · Builder · Systems thinker
              </p>
            </div>

            <h1 className="font-serif text-[clamp(4rem,10vw,7.8rem)] font-normal leading-[0.87] tracking-[-0.065em]">
              Shashank
              <br />
              <span className="text-white/40">Pandey.</span>
            </h1>

            <div className="mt-9 max-w-xl">
              <p className="text-xl leading-relaxed tracking-[-0.025em] text-white/85 sm:text-2xl sm:leading-relaxed">
                I build the systems behind products people rely on.
              </p>

              <p className="mt-5 text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
                I'm a full-stack developer with a natural pull toward backend
                engineering, cloud infrastructure, and system design. From
                identity platforms and AI tools to developer infrastructure,
                I like understanding the problem beneath the interface and
                building solutions that work in the real world.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-3 bg-white px-5 py-3.5 text-xs font-medium text-black transition-colors hover:bg-cyan-400"
              >
                Explore my work
                <ArrowDownRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </Link>

              <button
                type="button"
                onClick={() => setOpenResume(true)}
                className="group inline-flex items-center gap-2 border-b border-white/20 py-2 text-xs text-white/60 transition-colors hover:border-cyan-400 hover:text-white"
              >
                View resume
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>

              <div className="flex items-center gap-4 border-l border-white/10 pl-5">
                <Link
                  href="https://github.com/shashankpandey04"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="text-white/40 transition-colors hover:text-white"
                >
                  <Github size={17} strokeWidth={1.5} />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/shashankpandey04/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="text-white/40 transition-colors hover:text-white"
                >
                  <Linkedin size={17} strokeWidth={1.5} />
                </Link>
              </div>
            </div>

            <ResumeViewer
              open={openResume}
              setOpen={setOpenResume}
            />

            <div className="mt-14 grid max-w-xl grid-cols-3 border-t border-white/10 pt-6 sm:mt-16">
              <div className="pr-3">
                <p className="font-serif text-2xl tracking-[-0.04em] sm:text-3xl">
                  40K<span className="text-cyan-400">+</span>
                </p>

                <p className="mt-2 text-[10px] leading-5 text-white/40 sm:text-xs">
                  Users served
                </p>
              </div>

              <div className="border-l border-white/10 px-4 sm:px-6">
                <p className="font-serif text-2xl tracking-[-0.04em] sm:text-3xl">
                  2.5K<span className="text-cyan-400">+</span>
                </p>

                <p className="mt-2 text-[10px] leading-5 text-white/40 sm:text-xs">
                  Builders reached
                </p>
              </div>

              <div className="border-l border-white/10 pl-4 sm:pl-6">
                <p className="font-serif text-2xl tracking-[-0.04em] sm:text-3xl">
                  AWS
                </p>

                <p className="mt-2 text-[10px] leading-5 text-white/40 sm:text-xs">
                  Cloud certified
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[390px] lg:ml-auto lg:max-w-[420px]">
            <div className="relative aspect-[4/5]">
              <div className="absolute right-[3%] top-[5%] h-[88%] w-[88%] border border-white/[0.08]" />

              <span className="absolute -top-5 right-0 font-mono text-[9px] tracking-[0.2em] text-white/35 sm:text-[10px]">
                PORTFOLIO / 2026
              </span>

              <div className="absolute inset-x-0 bottom-0 top-[4%] overflow-hidden border border-white/10 bg-[#111]">
                <Image
                  src="/shashank.png"
                  alt="Shashank Pandey"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 390px, 420px"
                  className="object-cover object-[center_18%]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/50">
                    Based in India
                  </p>

                  <p className="mt-2 font-serif text-2xl tracking-[-0.03em] sm:text-3xl">
                    Always building.
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-3 border border-white/10 bg-[#0c0c0c] px-4 py-4 sm:-left-7 sm:px-5">
                <p className="text-[9px] uppercase tracking-[0.16em] text-white/35">
                  Currently exploring
                </p>

                <p className="mt-2 text-xs text-white/80 sm:text-sm">
                  Systems · AI · Infrastructure
                </p>
              </div>

              <div className="absolute right-0 top-[18%] flex h-10 w-10 items-center justify-center border border-white/10 bg-[#080808]">
                <span className="h-2 w-2 bg-cyan-400" />
              </div>
            </div>

            <Link
              href="/architecture"
              className="group mt-14 flex items-center justify-between gap-4 border-b border-white/10 pb-4 text-xs text-white/45 transition-colors hover:border-white/25 hover:text-white sm:mt-16"
            >
              <span>How I think about systems</span>

              <ArrowUpRight
                size={15}
                className="shrink-0 text-cyan-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-white/[0.08] pt-6 text-[9px] uppercase tracking-[0.16em] text-white/35 sm:mt-24 sm:flex-row sm:items-center sm:justify-between sm:text-[10px]">
          <p>Backend Engineering · Cloud Systems · Developer Platforms</p>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-cyan-400" />
            <span>Building from India</span>
          </div>
        </div>
      </div>
    </section>
  );
}