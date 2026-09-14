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
    <section className="min-h-screen px-6 pt-32 pb-16 sm:pt-36 md:pt-25 md:pb-20">
      <div className="max-w-6xl mx-auto w-full">

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-16 lg:gap-24 items-center">

          <div>
            <h1 className="mt-7 text-[clamp(3.5rem,9vw,7.5rem)] font-semibold tracking-[-0.06em] leading-[0.88] text-white">
              Shashank
              <br />
              <span className="text-gray-500">
                Pandey.
              </span>
            </h1>

            <div className="mt-10 max-w-xl">

              <p className="text-xl sm:text-2xl leading-relaxed text-gray-300">
                I build backend systems, cloud infrastructure, and platforms
                that solve real operational problems.
              </p>

              <p className="mt-5 text-base leading-7 text-gray-500">
                From identity platforms and AI systems to developer
                infrastructure and community operations, I enjoy figuring
                out how the pieces fit together and then building them.
              </p>

            </div>

            <div className="flex flex-wrap items-center gap-5 mt-10">

              <Link
                href="/projects"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition hover:bg-cyan-400"
              >
                View my work

                <ArrowDownRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
                />
              </Link>

              <button
                onClick={() => setOpenResume(true)}
                className="group inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
              >
                Resume

                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>

              <Link
                href="https://github.com/shashankpandey04"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-500 transition hover:text-white"
              >
                <Github size={19} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/shashankpandey04/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-500 transition hover:text-white"
              >
                <Linkedin size={19} />
              </Link>

            </div>

            <ResumeViewer
              open={openResume}
              setOpen={setOpenResume}
            />

            <div className="grid grid-cols-3 max-w-xl mt-16 pt-7 border-t border-white/8">

              <div>
                <p className="text-2xl sm:text-3xl font-medium text-white">
                  40K+
                </p>

                <p className="mt-2 text-xs sm:text-sm text-gray-500">
                  Users served
                </p>
              </div>

              <div className="border-l border-white/8 pl-5 sm:pl-7">
                <p className="text-2xl sm:text-3xl font-medium text-white">
                  2.5K+
                </p>

                <p className="mt-2 text-xs sm:text-sm text-gray-500">
                  Builders enabled
                </p>
              </div>

              <div className="border-l border-white/8 pl-5 sm:pl-7">
                <p className="text-2xl sm:text-3xl font-medium text-white">
                  AWS
                </p>

                <p className="mt-2 text-xs sm:text-sm text-gray-500">
                  Cloud certified
                </p>
              </div>

            </div>

          </div>


          <div className="relative mx-auto lg:ml-auto w-full max-w-sm sm:max-w-md">

            <div className="relative aspect-4/5">

              <div className="absolute top-[8%] right-[5%] w-[85%] h-[85%] border border-white/8 rounded-3xl" />

              <span className="absolute -top-5 right-0 text-[10px] tracking-[0.3em] text-gray-600">
                01 / INTRODUCTION
              </span>

              <div className="absolute inset-x-0 bottom-0 h-[90%] overflow-hidden rounded-2xl border border-white/8 bg-white/3">

                <Image
                  src="/shashank.png"
                  alt="Shashank Pandey"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 500px, 450px"
                  className="object-cover object-[center_18%]"
                />

                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/50 to-transparent" />

              </div>

            
              <div className="absolute -bottom-6 -left-4 sm:-left-8 rounded-xl border border-white/10 bg-black/70 px-5 py-4 backdrop-blur-xl">

                <p className="text-[10px] uppercase tracking-[0.18em] text-gray-600">
                  Currently focused on
                </p>

                <p className="mt-2 text-sm text-gray-200">
                  Systems · AI · Infrastructure
                </p>

              </div>

            </div>


            <Link
              href="/architecture"
              className="group mt-16 flex items-center justify-between border-b border-white/8 pb-4 text-sm text-gray-500 transition hover:text-white"
            >
              <span>Explore how I think about systems</span>

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

          </div>

        </div>

        <div className="mt-24 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-gray-600">

          <p>
            Backend Engineering · Cloud Systems · Developer Platforms
          </p>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

            <span>
              Building from India
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}