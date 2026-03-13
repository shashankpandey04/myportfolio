import { Mail, Github, Linkedin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">

      {/* Header */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-white">
          Contact
        </h1>

        <p className="mt-4 text-gray-400 max-w-xl">
          If you'd like to collaborate, discuss a project, or just say hello,
          feel free to reach out.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* Email */}
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

        {/* GitHub */}
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

        {/* LinkedIn */}
        <a
          href="https://linkedin.com"
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

      </div>

    </main>
  );
}