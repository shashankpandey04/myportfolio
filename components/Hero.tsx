"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { Linkedin, Github } from "lucide-react";
import ResumeViewer from "./ResumeViewer";
import { useState } from "react";

export default function Hero() {
  const [openResume, setOpenResume] = useState(false);

  return (
    <section className="min-h-screen flex items-center px-6 py-16 md:py-0">
      <span className="sr-only">
        Official website of Shashank Pandey, Software Engineer,
        AWS Community Leader and Founder.
      </span>

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">

          {/* Name */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="text-cyan-400">
              Shashank Pandey
            </span>
          </h1>

          {/* Animated Roles */}
          <div className="mt-4 text-lg sm:text-xl text-gray-300 h-8">
            <TypeAnimation
              sequence={[
                "Backend Engineer",
                2000,
                "Cloud Systems Builder",
                2000,
                "Full Stack Developer",
                2000,
                "AWS New Voices Speaker",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              deletionSpeed={70}
              wrapper="span"
              className="text-cyan-400"
            />
          </div>

          {/* Description */}
          <p className="mt-6 text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
            I build scalable cloud-native systems and developer platforms
            on AWS, powering real-world applications and communities at
            scale. I’ve enabled 2,500+ builders through workshops,
            mentoring, and hands-on initiatives.
          </p>

          {/* User Metric */}
          <p className="mt-4 text-sm text-gray-500">
            Built systems serving 40k+ users
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">

            <Link
              href="/projects"
              className="px-6 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition shadow-lg shadow-cyan-400/20"
            >
              View Projects
            </Link>

            <button
              onClick={() => setOpenResume(true)}
              className="px-6 py-3 rounded-full border border-cyan-400 text-cyan-400 font-medium hover:bg-cyan-400 hover:text-black transition"
            >
              Resume
            </button>

            <ResumeViewer
              open={openResume}
              setOpen={setOpenResume}
            />

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/shashankpandey04/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full border border-white/20 hover:border-cyan-400 hover:scale-105 transition"
            >
              <Linkedin className="w-5 h-5" />
            </Link>

            {/* GitHub */}
            <Link
              href="https://github.com/shashankpandey04"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-full border border-white/20 hover:border-cyan-400 hover:scale-105 transition"
            >
              <Github className="w-5 h-5" />
            </Link>

          </div>

          {/* Architecture Link */}
          <Link
            href="/architecture"
            className="mt-4 inline-block text-sm text-gray-500 hover:text-cyan-400 transition"
          >
            Explore System Architecture →
          </Link>

          {/* Credibility Pill */}
          <div className="mt-8 flex justify-center md:justify-start">
            <div
              className="
                inline-flex items-center gap-3
                px-4 py-2
                rounded-full
                bg-yellow-400/10
                border border-yellow-400/20
                text-yellow-300
                backdrop-blur-sm
                text-sm
                hover:border-cyan-400/40
                transition
              "
            >
              <span className="font-medium">
                40,000+ Users Served • Technical Speaker
              </span>
            </div>
          </div>

          {/* AWS Certification */}
          <div className="mt-6 flex justify-center md:justify-start">
            <div
              className="
                group
                inline-flex items-center gap-3
                px-4 py-3
                rounded-2xl
                bg-white/[0.03]
                border border-white/10
                backdrop-blur-sm
                hover:border-cyan-400/30
                hover:bg-cyan-400/[0.03]
                transition-all duration-300
              "
            >
              {/* Badge */}
              <div className="relative w-14 h-14 shrink-0">
                <Image
                  src="/badge/aws-certified-cloud-practitioner-badge.png"
                  alt="AWS Certified Cloud Practitioner"
                  fill
                  sizes="56px"
                  className="
                    object-contain
                    transition-transform duration-300
                    group-hover:scale-105
                  "
                />
              </div>

              <div className="text-left">
                <p className="text-sm font-semibold text-gray-200">
                  AWS Certified Cloud Practitioner
                </p>

                <p className="text-xs text-gray-500 mt-0.5">
                  Amazon Web Services
                </p>

                <p className="text-[11px] text-cyan-400/80 mt-1">
                  Certified • Active
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="flex justify-center md:justify-end mt-12 md:mt-20">
          <div className="relative w-56 sm:w-64 md:w-75 lg:w-90 aspect-3/4">

            <div
              className="
                absolute
                -inset-4
                bg-cyan-500/20
                blur-3xl
                rounded-3xl
              "
            />

            <div
              className="
                relative
                w-full
                h-full
                rounded-2xl
                overflow-hidden
                border border-white/10
                backdrop-blur-xl
              "
            >
              <Image
                src="/shashank.png"
                alt="Shashank Pandey - Software Engineer"
                fill
                priority
                sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, (max-width: 1024px) 300px, 360px"
                className="
                  object-cover
                  object-[center_18%]
                  rounded-2xl
                  shadow-[0_20px_80px_rgba(0,255,255,0.15)]
                "
              />
            </div>

          </div>
        </div>

      </div>

      <p className="sr-only">
        Shashank Pandey is a software engineer from India specializing
        in backend development, cloud computing, FastAPI, Next.js,
        system design, AWS, and developer platforms.
      </p>
    </section>
  );
}
