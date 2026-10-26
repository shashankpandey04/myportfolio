import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, BookOpen } from "lucide-react";
import BlogCard from "@/components/blog/BlogCard";

const technicalArticles = [
  {
    id: "lambda-idempotency",
    title: "Your Lambda Ran Twice. Did You Just Delete the Same Data Twice?",
    description:
      "A closer look at idempotency, duplicate execution, and the subtle failures that can make serverless systems unreliable.",
    category: "Serverless",
    platform: "AWS Builder Center",
    date: "Oct 2026",
    link: "https://builder.aws.com/content/3KxPSrFmkJcpe4FcQbxmOtQyLy9/your-lambda-ran-twice-did-you-just-delete-the-same-data-twice",
    featured: true,
  },
  {
    id: "account-deletion",
    title: "What Happens After You Click Delete Account?",
    description:
      "Exploring the backend workflows, data lifecycle, and system responsibilities behind a seemingly simple action.",
    category: "Backend Engineering",
    platform: "AWS Builder Center",
    date: "Oct 2026",
    link: "https://builder.aws.com/content/3Kv11OtJ4smm2myjzTzm4kcBeOM/what-happens-after-you-click-delete-account",
  },
  {
    id: "aws-service-decisions",
    title: "Knowing AWS Services Isn't Enough. Knowing When Not to Use Them Is.",
    description:
      "Why good cloud engineering is about making deliberate architectural decisions, not just knowing which services exist.",
    category: "Cloud Architecture",
    platform: "AWS Builder Center",
    date: "",
    link: "https://builder.aws.com/content/3Kr4zrps8mFNyKynl7Q3IAz6hfM/knowing-aws-services-isnt-enough-knowing-when-not-to-use-them-is",
  },
  {
    id: "sqs-lambda",
    title: "Putting SQS Between API Gateway and Lambda",
    description:
      "Exploring asynchronous processing, decoupling, and the architectural trade-offs of adding a queue to a serverless workflow.",
    category: "AWS Architecture",
    platform: "AWS Builder Center",
    date: "Oct 2026",
    link: "https://builder.aws.com/content/3K8FTr1KQdZcWRNrVbiYFeI5Cde/putting-sqs-between-api-gateway-and-lambda",
  },
  {
    id: "lambda-benchmark",
    title: "I Tested AWS Lambda at 128 MB, 256 MB, 512 MB, and 1 GB — Here's What Happened",
    description:
      "An exploration of Lambda memory configurations and the performance and cost trade-offs that come with them.",
    category: "Performance",
    platform: "AWS Builder Center",
    date: "Sep 2026",
    link: "https://builder.aws.com/content/3Ij6aBj7J0m21MO7ex2FZweIorV/i-tested-aws-lambda-at-128-mb-256-mb-512-mb-and-1-gb-heres-what-happened",
  },
  {
    id: "idempotency-production",
    title: "Idempotency: The Bug You Don't Notice Until Production",
    description:
      "Understanding why repeated requests can become production bugs and why reliable systems need to account for retries.",
    category: "Distributed Systems",
    platform: "AWS Builder Center",
    date: "",
    link: "https://builder.aws.com/content/3Ha5j6sGC9QBSCLWFtTSz8bQLS7/idempotency-the-bug-you-dont-notice-until-production",
  },
  {
    id: "certificate-architecture",
    title: "Designing a Cost-Effective Serverless Certificate Generation System on AWS",
    description:
      "Architecting a serverless certificate-generation workflow with an emphasis on scalability and cost-conscious infrastructure.",
    category: "System Design",
    platform: "AWS Builder Center",
    date: "",
    link: "https://builder.aws.com/content/3GRcXBAb3DmsCNyp4IxJiITbfnn/designing-a-cost-effective-serverless-certificate-generation-system-on-aws",
  },
  {
    id: "certificate-story",
    title: "Why I Built a Serverless Certificate Generation System",
    description:
      "The engineering motivation behind automating certificate generation and exploring a serverless approach to the problem.",
    category: "Engineering",
    platform: "AWS Builder Center",
    date: "",
    link: "https://builder.aws.com/content/3GAgX9CgvCsD0f6KPiXuvNBtdmF/why-i-built-a-serverless-certificate-generation-system",
  },
  {
    id: "event-platform-architecture",
    title: "Designing a Scalable Event Management Platform Architecture on AWS",
    description:
      "Exploring the architectural decisions involved in building an event management platform designed to scale.",
    category: "System Design",
    platform: "AWS Builder Center",
    date: "",
    link: "https://builder.aws.com/content/3Ai3egg31SR3B8oo3JnhTBXegej/designing-a-scalable-event-management-platform-architecture-on-aws",
  },
];

const communityArticles = [
  {
    id: "hacktoberfest-recap",
    title: "Hacktoberfest 2026 at LPU: A Community Recap",
    description:
      "Looking back at a day of open-source contributions, developer learning, and community building with AWS Student Builder Group at LPU.",
    category: "Event Recap",
    platform: "AWS Builder Center",
    date: "Oct 2026",
    link: "https://builder.aws.com/content/3LDvyJ9lSMK0awhlkv9f8rydDOx/hacktoberfest-2026-at-lpu-a-community-recap",
  },
  {
    id: "buildertype",
    title: "BuilderType: Turning an AWS Experience Zone into an Interactive Engagement Hub",
    description:
      "The story of transforming an AWS Experience Zone into an interactive experience designed to encourage exploration and participation.",
    category: "Community Building",
    platform: "AWS Builder Center",
    date: "Apr 2026",
    link: "https://builder.aws.com/content/3C1awdveU00bH15OoyzSU1tZB91/buildertype-turning-an-aws-experience-zone-into-an-interactive-engagement-hub",
  },
  {
    id: "cloud-captain",
    title: "Being an AWS Cloud Captain Is More Than Organizing Events",
    description:
      "Lessons from building a student developer community, creating learning opportunities, and helping builders find their place.",
    category: "Leadership",
    platform: "AWS Builder Center",
    date: "Apr 2026",
    link: "https://builder.aws.com/content/3CnQZIN3ftXo2Ngfub9O1q4ztXA/being-an-aws-cloud-captain-is-more-than-organizing-events",
  },
  {
    id: "student-community-day",
    title: "AWS Student Community Day Jalandhar: Planning, Execution, and Learnings from the First Edition",
    description:
      "A behind-the-scenes account of planning and delivering a student-focused AWS community event.",
    category: "Event Operations",
    platform: "AWS Builder Center",
    date: "Jan 2026",
    link: "https://builder.aws.com/content/38s6BFOdJv9JNjSLLMxiggdcqVQ/aws-student-community-day-jalandhar-planning-execution-and-learnings-from-the-first-edition",
  },
  {
    id: "aws-new-voices",
    title: "AWS New Voices 2026",
    description:
      "Sharing the journey of technical public speaking and participating in the AWS New Voices community.",
    category: "Public Speaking",
    platform: "LinkedIn",
    date: "",
    link: "https://www.linkedin.com/posts/shashankpandey04_aws-awsnewvoices-publicspeaking-activity-7455092003710636032-14pH",
  },
  {
    id: "aws-summit",
    title: "AWS Summit Bengaluru 2026",
    description:
      "A snapshot from the AWS Summit Bengaluru experience and the wider cloud developer ecosystem.",
    category: "Community",
    platform: "LinkedIn",
    date: "Apr 2026",
    link: "https://www.linkedin.com/posts/shashankpandey04_awssummit-aws-cloudcomputing-activity-7453768647115837440-qshs/",
  },
  {
    id: "student-builder-leader",
    title: "AWS Student Builder Campus Leader — LPU",
    description:
      "Sharing the journey of helping students discover cloud technologies and build with AWS.",
    category: "Leadership",
    platform: "LinkedIn",
    date: "Apr 2026",
    link: "https://www.linkedin.com/posts/shashankpandey04_awssbcl-ad-awsstudent-activity-7453288085477363712-x0ug/",
  },
  {
    id: "techkriti",
    title: "AWS Techkriti 2026 — IIT Kanpur",
    description:
      "A community experience connected to the technology and innovation ecosystem at Techkriti, IIT Kanpur.",
    category: "Community",
    platform: "LinkedIn",
    date: "Mar 2026",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7442085184851832832/",
  },
  {
    id: "captains-call",
    title: "AWS Cloud Club Captains' Call",
    description:
      "Participating as a panelist in conversations around student cloud communities and developer engagement.",
    category: "Panel Discussion",
    platform: "LinkedIn",
    date: "Feb 2026",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7434499570102886400/",
  },
  {
    id: "cloud-club-building",
    title: "Building an AWS Cloud Club Community",
    description:
      "Thoughts and experiences from growing a student cloud community and creating opportunities for builders.",
    category: "Community Building",
    platform: "LinkedIn",
    date: "Jan 2026",
    link: "https://www.linkedin.com/posts/shashankpandey04_awscloudclubs-awscloudclub-aws-activity-7418168378760015873-5Lu2/",
  },
  {
    id: "bot-forge",
    title: "Bot Forge 2025 — Discord Bot Workshop",
    description:
      "A hands-on community workshop focused on building Discord bots and getting developers involved in practical projects.",
    category: "Workshop",
    platform: "LinkedIn",
    date: "Dec 2025",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7409855962225901568/",
  },
  {
    id: "bytebucket",
    title: "ByteBucket — AWS Storage Workshop",
    description:
      "A student-focused workshop exploring AWS storage concepts through practical learning and community engagement.",
    category: "Workshop",
    platform: "LinkedIn",
    date: "Apr 2025",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7321807714882306049/",
  },
];

const allArticles = [...technicalArticles, ...communityArticles];

const featuredArticle = technicalArticles[0];

const archiveArticles = allArticles.filter(
  (article) => article.id !== featuredArticle.id,
);

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-[#eae8e3]">
      <div className="mx-auto max-w-6xl px-5 pb-24 pt-24 sm:px-8 sm:pt-32 lg:px-12">
        {/* Header */}
        <header className="border-b border-white/10 pb-10 sm:pb-14">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-[#d4c9b5]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/45">
              Writing & Field Notes
            </span>
          </div>

          <div className="grid gap-8 md:grid-cols-[1fr_250px] md:items-end">
            <div>
              <h1 className="max-w-3xl font-serif text-5xl font-normal leading-[1.04] tracking-[-0.045em] sm:text-6xl md:text-7xl">
                Ideas, systems
                <br />
                <span className="text-white/45">and things I build.</span>
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                Technical writing, engineering lessons, and stories from
                building developer communities. From serverless architecture
                to the work that happens beyond the code.
              </p>
            </div>

            <div className="flex gap-8 border-t border-white/10 pt-5 md:justify-end md:border-l md:border-t-0 md:pl-6">
              <div>
                <p className="font-serif text-3xl">{allArticles.length}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/40">
                  Publications
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl">
                  {technicalArticles.length}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/40">
                  Technical
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Featured article */}
        <section className="py-12 sm:py-16">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/45">
              Selected Writing
            </p>
            <span className="text-[10px] uppercase tracking-[0.16em] text-white/30">
              01 / Featured
            </span>
          </div>

          <a
            href={featuredArticle.link}
            target="_blank"
            rel="noreferrer"
            className="group grid gap-7 border border-white/10 p-6 transition-colors duration-300 hover:border-white/25 sm:p-9 md:grid-cols-[1fr_200px] md:gap-12"
          >
            <div className="flex flex-col">
              <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] uppercase tracking-[0.16em] text-white/40">
                <span>{featuredArticle.platform}</span>
                <span className="h-1 w-1 rounded-full bg-white/25" />
                <span>{featuredArticle.category}</span>
                {featuredArticle.date && (
                  <>
                    <span className="h-1 w-1 rounded-full bg-white/25" />
                    <span>{featuredArticle.date}</span>
                  </>
                )}
              </div>

              <h2 className="max-w-3xl font-serif text-3xl leading-tight tracking-[-0.025em] sm:text-4xl md:text-5xl">
                {featuredArticle.title}
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/50">
                {featuredArticle.description}
              </p>

              <div className="mt-8 flex items-center gap-2 text-xs text-white/75 transition-colors group-hover:text-white">
                Read article
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </div>
            </div>

            <div className="flex min-h-36 flex-col justify-between border-t border-white/10 pt-5 md:border-l md:border-t-0 md:pl-6 md:pt-0">
              <BookOpen size={20} strokeWidth={1.2} className="text-white/40" />

              <div>
                <p className="font-serif text-xl">Engineering notes</p>
                <p className="mt-2 text-xs leading-5 text-white/40">
                  Practical ideas about building reliable systems in the
                  real world.
                </p>
              </div>
            </div>
          </a>
        </section>

        {/* Technical writing */}
        <section id="technical-writing" className="scroll-mt-24 pt-4">
          <div className="mb-7 flex items-end justify-between border-b border-white/10 pb-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                01 — Engineering
              </p>
              <h2 className="mt-2 font-serif text-3xl tracking-[-0.025em] sm:text-4xl">
                Technical writing
              </h2>
            </div>
            <span className="pb-1 text-xs text-white/35">
              {technicalArticles.length} articles
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {technicalArticles
              .filter((article) => article.id !== featuredArticle.id)
              .map((article) => (
                <BlogCard
                  key={article.id}
                  title={article.title}
                  description={article.description}
                  platform={article.platform}
                  category={article.category}
                  date={article.date}
                  link={article.link}
                />
              ))}
          </div>
        </section>

        {/* Community writing */}
        <section id="community-writing" className="scroll-mt-24 pt-16 sm:pt-20">
          <div className="mb-7 flex items-end justify-between border-b border-white/10 pb-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                02 — Beyond the Code
              </p>
              <h2 className="mt-2 font-serif text-3xl tracking-[-0.025em] sm:text-4xl">
                Community & experiences
              </h2>
            </div>
            <span className="pb-1 text-xs text-white/35">
              {communityArticles.length} stories
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {communityArticles.map((article) => (
              <BlogCard
                key={article.id}
                title={article.title}
                description={article.description}
                platform={article.platform}
                category={article.category}
                date={article.date}
                link={article.link}
              />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 border-t border-white/10 pt-8 sm:mt-24">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="font-serif text-2xl tracking-tight">
                Always building. Always learning.
              </p>
              <p className="mt-2 max-w-md text-xs leading-6 text-white/40">
                I write about what I learn, what I build, and the people
                who make the journey worthwhile.
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex w-fit items-center gap-2 border-b border-white/25 pb-1 text-xs text-white/65 transition-colors hover:border-white hover:text-white"
            >
              Explore my projects
              <ArrowDownRight size={14} strokeWidth={1.5} />
            </Link>
          </div>

          <div className="mt-8 flex flex-col gap-2 border-t border-white/5 pt-5 text-[10px] uppercase tracking-[0.15em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
            <span>Shashank Pandey</span>
            <span>Writing archive · 2025—2026</span>
          </div>
        </footer>
      </div>
    </main>
  );
}