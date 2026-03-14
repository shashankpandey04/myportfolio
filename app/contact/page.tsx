import { Mail, Github, Linkedin, Instagram } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">

      <div className="mb-16">
        <h1 className="text-4xl font-bold text-white">
          Contact
        </h1>

        <p className="mt-4 text-gray-400 max-w-xl">
          If you'd like to collaborate, discuss a project, or just say hello,
          feel free to reach out.
        </p>
      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">

        <a
          href="mailto:contact.shashankpandey04@gmail.com"
          className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-cyan-400/40 transition group"
        >
          <Mail className="text-cyan-400" size={28} />

          <h3 className="mt-4 text-lg font-semibold text-white">
            Email
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            Send me an email directly
          </p>
        </a>

        <a
          href="https://github.com/shashankpandey04"
          target="_blank"
          className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-cyan-400/40 transition group"
        >
          <Github className="text-cyan-400" size={28} />

          <h3 className="mt-4 text-lg font-semibold text-white">
            GitHub
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            Explore my open source work
          </p>
        </a>

        <a
          href="https://www.linkedin.com/in/shashankpandey04/"
          target="_blank"
          className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-cyan-400/40 transition group"
        >
          <Linkedin className="text-cyan-400" size={28} />

          <h3 className="mt-4 text-lg font-semibold text-white">
            LinkedIn
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            Connect professionally
          </p>
        </a>

        <a
          href="https://instagram.com/codingnerd.py"
          target="_blank"
          className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-cyan-400/40 transition group"
        >
          <Instagram className="text-cyan-400" size={28} />

          <h3 className="mt-4 text-lg font-semibold text-white">
            Coding Nerd
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            Dev content, experiments & tech posts
          </p>
        </a>

        <a
          href="https://instagram.com/shashankpandey04"
          target="_blank"
          className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-cyan-400/40 transition group"
        >
          <Instagram className="text-cyan-400" size={28} />

          <h3 className="mt-4 text-lg font-semibold text-white">
            Instagram
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            Personal account & daily life
          </p>
        </a>

      </div>

    </main>
  );
}