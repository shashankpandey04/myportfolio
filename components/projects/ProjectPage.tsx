import Image from "next/image";


interface ProjectPageProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  overview: string;
  problem: string;
  solution: string;
  features: string[];

  architecture: {
    title: string;
    description: string;
  }[];

  challenges: string[];
  outcome: string;
  liveLink?: string;
  githubLink?: string;
  ytLink?: string;
  blogLink?: string;
}


export default function ProjectPage({
  title,
  description,
  image,
  tech,
  overview,
  problem,
  solution,
  features,
  architecture,
  challenges,
  outcome,
  liveLink,
  githubLink,
  ytLink,
  blogLink,
}: ProjectPageProps) {
  return (
    <main className="min-h-screen px-6 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <section className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-20 items-end">
          <div>
            <p className="text-sm text-cyan-400 mb-5">
              Featured Project
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
              {title}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">
              {description}
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {liveLink && (
                <ProjectButton href={liveLink} primary>
                  Visit Project ↗
                </ProjectButton>
              )}

              {githubLink && (
                <ProjectButton href={githubLink}>
                  View Code ↗
                </ProjectButton>
              )}

              {ytLink && (
                <ProjectButton href={ytLink}>
                  Watch Demo ↗
                </ProjectButton>
              )}

              {blogLink && (
                <ProjectButton href={blogLink}>
                  Read Write-up ↗
                </ProjectButton>
              )}
            </div>
          </div>

          <div className="border-t lg:border border-white/10 lg:p-6 pt-6 lg:pt-6 rounded-xl">
            <p className="text-xs uppercase tracking-widest text-gray-500">
              Technology
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {tech.map((item) => (
                <span
                  key={item}
                  className="text-sm text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 sm:mt-24">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={image}
              alt={title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </section>

        <div className="mt-24 grid lg:grid-cols-[180px_1fr] gap-12">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-sm text-gray-500 mb-5">
                On this page
              </p>

              <nav className="space-y-3 text-sm">
                <a href="#overview" className="block text-gray-400 hover:text-white transition">
                  Overview
                </a>

                <a href="#problem" className="block text-gray-400 hover:text-white transition">
                  Problem
                </a>

                <a href="#solution" className="block text-gray-400 hover:text-white transition">
                  Solution
                </a>

                <a href="#features" className="block text-gray-400 hover:text-white transition">
                  Features
                </a>

                <a href="#architecture" className="block text-gray-400 hover:text-white transition">
                  Architecture
                </a>

                <a href="#challenges" className="block text-gray-400 hover:text-white transition">
                  Challenges
                </a>

                <a href="#outcome" className="block text-gray-400 hover:text-white transition">
                  Outcome
                </a>
              </nav>
            </div>
          </aside>

          <div className="max-w-3xl space-y-24">
            <ContentSection id="overview" title="Overview">
              {overview}
            </ContentSection>

            <ContentSection id="problem" title="The Problem">
              {problem}
            </ContentSection>

            <ContentSection id="solution" title="The Solution">
              {solution}
            </ContentSection>

            <ContentSection id="features" title="What It Does">
              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6 mt-8">
                {features.map((feature, index) => (
                  <div key={feature}>
                    <span className="text-sm text-cyan-400">
                      0{index + 1}
                    </span>

                    <p className="mt-2 text-gray-300 leading-relaxed">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </ContentSection>

            <ContentSection id="architecture" title="Architecture">
              <div className="mt-10 space-y-0 border-t border-white/10">
                {architecture.map((item, index) => (
                  <div
                    key={item.title}
                    className="grid sm:grid-cols-[70px_1fr] gap-5 sm:gap-8 border-b border-white/10 py-7"
                  >
                    <span className="text-sm text-cyan-400 font-mono">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="text-lg font-medium text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-gray-400 leading-7">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ContentSection>


            <ContentSection id="challenges" title="Engineering Challenges">
              <div className="mt-8 space-y-8">
                {challenges.map((challenge, index) => (
                  <div
                    key={challenge}
                    className="border-l-2 border-white/10 pl-6"
                  >
                    <span className="text-sm text-gray-600">
                      Challenge {index + 1}
                    </span>

                    <p className="mt-2 text-gray-400 leading-relaxed">
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>
            </ContentSection>

            <section
              id="outcome"
              className="border-t border-white/10 pt-12"
            >
              <p className="text-sm text-cyan-400 mb-4">
                Final Result
              </p>

              <h2 className="text-3xl sm:text-4xl font-semibold text-white">
                Outcome
              </h2>

              <p className="mt-6 text-lg text-gray-400 leading-8">
                {outcome}
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

function ProjectButton({
  href,
  children,
  primary = false,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`px-5 py-2.5 rounded-lg text-sm font-medium transition ${
        primary
          ? "bg-white text-black hover:bg-gray-200"
          : "border border-white/10 text-gray-300 hover:text-white hover:bg-white/5"
      }`}
    >
      {children}
    </a>
  );
}

function ContentSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id}>
      <h2 className="text-3xl font-semibold tracking-tight text-white">
        {title}
      </h2>

      <div className="mt-6 text-gray-400 leading-8">
        {typeof children === "string" ? (
          <p>{children}</p>
        ) : (
          children
        )}
      </div>
    </section>
  );
}
