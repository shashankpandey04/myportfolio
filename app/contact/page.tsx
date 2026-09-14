import {
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";

const contactLinks = [
  {
    name: "GitHub",
    description: "Projects, experiments, and things I'm currently building.",
    href: "https://github.com/shashankpandey04",
    icon: Github,
  },
  {
    name: "LinkedIn",
    description: "For opportunities, professional conversations, and connecting.",
    href: "https://www.linkedin.com/in/shashankpandey04/",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    description: "The less technical side of me.",
    href: "https://instagram.com/shashankpandey04",
    icon: Instagram,
  },
];

export default function ContactPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20 sm:py-28">
      <section className="max-w-3xl">
        <p className="text-sm text-cyan-400 mb-5">
          GET IN TOUCH
        </p>

        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white">
          Let&apos;s talk.
        </h1>

        <p className="mt-7 text-lg text-gray-400 leading-8">
          Whether you have an interesting project, an internship opportunity,
          want to talk about backend systems, startups, cloud infrastructure,
          or just found something interesting that you think I&apos;d enjoy
          discussing, feel free to reach out.
        </p>
      </section>

      <section className="mt-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20">
        <div>
          <p className="text-sm text-gray-500 mb-4">
            THE BEST WAY TO REACH ME
          </p>

          <a
            href="mailto:contact.shashankpandey04@gmail.com"
            className="group inline-flex items-center gap-3 text-2xl sm:text-3xl font-medium text-white hover:text-cyan-400 transition"
          >
            <Mail size={24} />

            contact.shashankpandey04@gmail.com

            <ArrowUpRight
              size={20}
              className="opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition"
            />
          </a>

          <p className="mt-6 max-w-lg text-gray-400 leading-7">
            Email is probably the easiest way to reach me. I&apos;m always open
            to hearing about interesting opportunities, collaborating on
            something ambitious, or having a genuinely good technical
            conversation.
          </p>
        </div>

        <div className="border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-12">
          <p className="text-sm text-gray-500 mb-5">
            WHAT YOU CAN CONTACT ME ABOUT
          </p>

          <ul className="space-y-4 text-gray-400">
            <li className="flex gap-3">
              <span className="text-cyan-400">→</span>
              Internship and early-career opportunities
            </li>

            <li className="flex gap-3">
              <span className="text-cyan-400">→</span>
              Backend or full-stack projects
            </li>

            <li className="flex gap-3">
              <span className="text-cyan-400">→</span>
              Interesting startup ideas and products
            </li>

            <li className="flex gap-3">
              <span className="text-cyan-400">→</span>
              Cloud, infrastructure, and system design
            </li>

            <li className="flex gap-3">
              <span className="text-cyan-400">→</span>
              Collaboration or just a good conversation
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm text-cyan-400 mb-3">
              ELSEWHERE
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-white">
              You can also find me here.
            </h2>
          </div>
        </div>

        <div className="mt-8 divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {contactLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-6 py-6"
              >
                <div className="flex items-center gap-5">
                  <Icon
                    size={22}
                    className="text-gray-400 group-hover:text-cyan-400 transition"
                  />

                  <div>
                    <h3 className="text-lg font-medium text-white">
                      {link.name}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {link.description}
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={20}
                  className="text-gray-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                />
              </a>
            );
          })}
        </div>
      </section>

      <section className="mt-28 border-t border-white/[0.08] pt-12">
        <p className="max-w-2xl text-xl sm:text-2xl leading-relaxed text-gray-300">
          I&apos;m currently focused on growing as an engineer, building
          interesting systems, and finding opportunities where I can work on
          real problems with people who care about building things properly.
        </p>

        <p className="mt-5 text-gray-500">
          If that sounds like something we should talk about, you know where
          to find me.
        </p>
      </section>
    </main>
  );
}