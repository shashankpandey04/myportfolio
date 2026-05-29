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

        <div className="text-center md:text-left">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="text-cyan-400">Shashank Pandey</span>
          </h1>

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

          <p className="mt-6 text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
            I build scalable cloud-native systems and developer platforms on AWS, powering real-world applications and communities at scale.  
            I’ve enabled 2,500+ builders through workshops, mentoring, and hands-on initiatives.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            Built systems serving 40k+ users
          </p>

          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">

            <Link
              href='/projects'
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

            <ResumeViewer open={openResume} setOpen={setOpenResume} />

            <Link
              href="https://www.linkedin.com/in/shashankpandey04/"
              target="_blank"
              className="p-3 rounded-full border border-white/20 hover:border-cyan-400 hover:scale-105 transition"
            >
              <Linkedin className="w-5 h-5" />
            </Link>

            <Link
              href="https://github.com/shashankpandey04"
              target="_blank"
              className="p-3 rounded-full border border-white/20 hover:border-cyan-400 hover:scale-105 transition"
            >
              <Github className="w-5 h-5" />
            </Link>

            <Link
              href="/architecture"
              className="mt-4 inline-block text-sm text-gray-500 hover:text-cyan-400 transition"
            >
              Explore System Architecture →
            </Link>

          </div>

          <div className="mt-8 flex justify-center md:justify-start">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full 
            bg-yellow-400/10 border border-yellow-400/20 text-yellow-300 backdrop-blur-sm
            text-sm hover:border-cyan-400/40 transition">
              <span className="font-medium">
                40,000+ Users Served • Community Leader • AWS Speaker
              </span>

            </div>
          </div>

        </div>

        <div className="flex justify-center md:justify-end mt-12 md:mt-20">
          <div className="relative w-56 sm:w-64 md:w-75 lg:w-90 aspect-3/4">

            <div className="absolute -inset-4 bg-cyan-500/20 blur-3xl rounded-3xl"></div>

            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 backdrop-blur-xl">
              <Image
                src="/shashank.png"
                alt="Shashank Pandey - Software Engineer"
                fill
                className="object-cover object-[center_18%] rounded-2xl shadow-[0_20px_80px_rgba(0,255,255,0.15)]"
                priority
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