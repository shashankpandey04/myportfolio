import CommunityCard from "@/components/community/CommunityCard";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const featuredExperiences = [
  {
    title: "AWS New Voices 2026",
    description:
      "Selected to develop as a technical speaker and learn how to turn real engineering experiences into stories that help other builders.",
    label: "Speaker",
    date: "April 2026",
    href: "https://www.linkedin.com/posts/shashankpandey04_aws-awsnewvoices-publicspeaking-activity-7455092003710636032-14pH",
  },
  {
    title: "AWS Summit Bengaluru",
    description:
      "A closer look at how AI and cloud systems are being built in the real world, plus conversations with builders and the people behind the technology.",
    label: "Builder Experience",
    date: "April 2026",
    href: "https://www.linkedin.com/posts/shashankpandey04_awssummit-aws-cloudcomputing-activity-7453768647115837440-qshs/",
  },
];

export default function CommunityPage() {
  return (
    <main className="min-h-screen px-6 pt-32 pb-24 md:pt-40">
      <div className="max-w-6xl mx-auto">

        <section className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-400" />

              <p className="text-xs font-medium tracking-[0.2em] text-cyan-400 uppercase">
                Beyond the code
              </p>
            </div>

            <h1 className="mt-7 text-5xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.05em] leading-[0.95] text-white">
              Building with
              <br />
              <span className="text-gray-500">
                people, too.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
              Some of the most important things I&apos;ve built have not been
              software. They&apos;ve been communities, teams, events, learning
              experiences, and opportunities for other people to start building.
            </p>
          </div>

          <div className="border-l-0 lg:border-l border-white/8 lg:pl-12">
            <p className="text-sm text-gray-500">
              My journey with the developer community has taken me from
              organizing small workshops to leading a 2,500+ student community,
              speaking with global AWS Cloud Club leaders, and working alongside
              builders across the AWS ecosystem.
            </p>

            <Link
              href="#journey"
              className="group mt-8 inline-flex items-center gap-3 text-sm text-gray-300 transition hover:text-cyan-400"
            >
              Explore the journey

              <ArrowDownRight
                size={17}
                className="transition-transform group-hover:translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </section>

        <section className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px border border-white/8 bg-white/8">
          <div className="bg-black px-6 py-8">
            <p className="text-3xl sm:text-4xl font-medium text-white">
              2.5K+
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Students engaged
            </p>
          </div>

          <div className="bg-black px-6 py-8">
            <p className="text-3xl sm:text-4xl font-medium text-white">
              9+
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Community experiences
            </p>
          </div>

          <div className="bg-black px-6 py-8">
            <p className="text-3xl sm:text-4xl font-medium text-white">
              5K+
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Builders reached
            </p>
          </div>

          <div className="bg-black px-6 py-8">
            <p className="text-3xl sm:text-4xl font-medium text-white">
              AWS
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Community ecosystem
            </p>
          </div>
        </section>

        <section className="mt-28">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <p className="text-sm text-cyan-400">
                Right now
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                Recent experiences.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-gray-500">
              The latest chapters in my journey as a builder, community leader,
              and increasingly, technical speaker.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-px border border-white/8 bg-white/8">
            {featuredExperiences.map((experience) => (
              <Link
                key={experience.title}
                href={experience.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-black p-8 sm:p-10 transition hover:bg-white/2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-400">
                    {experience.label}
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="text-gray-600 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
                  />
                </div>

                <h3 className="mt-10 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                  {experience.title}
                </h3>

                <p className="mt-4 max-w-md leading-7 text-gray-400">
                  {experience.description}
                </p>

                <p className="mt-8 text-sm text-gray-600">
                  {experience.date}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section id="journey" className="mt-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-sm text-gray-500">
                2025 — Present
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                The community journey.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-gray-500">
              Workshops, events, leadership, speaking, and the occasional
              situation where a simple idea somehow turned into a much bigger
              initiative.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-x-8 gap-y-12">

            <CommunityCard
              title="AWS New Voices 2026 — Selected Speaker"
              description="Selected for AWS New Voices 2026, a program focused on developing public speaking skills and empowering builders to share ideas, insights, and real-world experiences."
              cover="/community/aws-new-voices.png"
              event="AWS New Voices Program"
              date="April 2026"
              highlights={[
                "Selected among competitive applicants",
                "Developing public speaking and storytelling skills",
                "Learning to communicate technical ideas effectively",
              ]}
              link="https://www.linkedin.com/posts/shashankpandey04_aws-awsnewvoices-publicspeaking-activity-7455092003710636032-14pH"
            />

            <CommunityCard
              title="AWS Summit Bengaluru 2026 — Builder Experience"
              description="Participated and contributed at AWS Summit Bengaluru, gaining first-hand exposure to real-world AI and cloud innovations while connecting with builders, developers, and industry leaders."
              cover="/community/aws-summit-bengaluru-2026.png"
              event="AWS Summit Bengaluru"
              date="April 2026"
              highlights={[
                "Explored real-world AI agent use cases on AWS",
                "Networked with developers and industry leaders",
                "Gained behind-the-scenes event experience",
              ]}
              link="https://www.linkedin.com/posts/shashankpandey04_awssummit-aws-cloudcomputing-activity-7453768647115837440-qshs/"
            />

            <CommunityCard
              title="AWS Student Builder Campus Leader — LPU"
              description="Selected as AWS Student Builder Campus Leader, driving cloud adoption through hands-on learning, community initiatives, and real-world project building."
              cover="/community/awssbcl.png"
              event="AWS SBCL Program"
              date="April 2026"
              highlights={[
                "Leading cloud learning initiatives on campus",
                "Providing access to AWS resources and labs",
                "Enabling students to build real-world projects",
              ]}
              link="https://www.linkedin.com/posts/shashankpandey04_awssbcl-ad-awsstudent-activity-7453288085477363712-x0ug/"
            />

            <CommunityCard
              title="AWS @ Techkriti 2026 — IIT Kanpur"
              description="Spent an incredible few days with the AWS Community at Techkriti, connecting with passionate builders, engaging at the AWS booth, and exchanging ideas across diverse perspectives."
              cover="/community/techkriti2026.png"
              event="AWS Community"
              date="March 2026"
              highlights={[
                "Connected with 5,000+ student builders",
                "Represented AWS Cloud Club presence",
                "Collaborated with AWS team and captains",
              ]}
            />

            <CommunityCard
              title="AWS Cloud Club Captain's Call — Panelist"
              description="Invited as a panelist to the AWS Cloud Club Monthly Captain's Call, sharing insights on building aligned teams, designing strong foundations, and scaling student communities sustainably."
              cover="/community/captains-call-feb26.png"
              event="AWS Cloud Clubs"
              date="February 2026"
              highlights={[
                "Spoke as a panelist to global Cloud Club Captains",
                "Shared insights on team building and community growth",
                "Engaged with new C6 Captains starting their journey",
              ]}
              link="https://www.linkedin.com/feed/update/urn:li:activity:7434499570102886400/"
            />

            <CommunityCard
              title="AWS Cloud Club — Community Building"
              description="Leading initiatives to build a strong AWS Cloud Club ecosystem, focusing on hands-on learning, engagement, and real-world problem solving."
              cover="/community/aws-cloud-clubs.png"
              event="AWS Cloud Club"
              date="January 2026"
              highlights={[
                "Engaged 2,500+ students",
                "Designed structured learning pathways",
                "Led interactive initiatives like ArcHelp and BuilderType",
              ]}
              link="https://www.linkedin.com/posts/shashankpandey04_awscloudclubs-awscloudclub-aws-activity-7418168378760015873-5Lu2/"
            />

            <CommunityCard
              title="Bot Forge 2025 — Discord Bot Workshop"
              description="Organized and led a two-day hands-on workshop on Discord bot development, focusing on real-world concepts, system thinking, and building beyond tutorials."
              cover="/community/bot-forge.png"
              event="AWS Cloud Club"
              date="December 2025"
              highlights={[
                "Conducted a two-day workshop for 60+ students",
                "Taught Discord bot architecture and automation",
                "Enabled students to build real-world bots",
              ]}
              link="https://www.linkedin.com/feed/update/urn:li:activity:7409855962225901568/"
            />

            <CommunityCard
              title="AWS Student Community Day — Jalandhar"
              description="Played a key role in organizing and executing AWS Student Community Day, bringing together students, speakers, and cloud enthusiasts for a full-day learning experience."
              cover="/community/aws-scd-jalandhar.png"
              event="AWS Event"
              date="November 2025"
              highlights={[
                "Co-organized a large-scale student event",
                "Managed speakers and sessions",
                "Enabled hands-on cloud learning",
              ]}
              link="https://builder.aws.com/content/38s6BFOdJv9JNjSLLMxiggdcqVQ/aws-student-community-day-jalandhar-planning-execution-and-learnings-from-the-first-edition"
            />

            <CommunityCard
              title="ByteBucket — AWS Storage Workshop"
              description="Hosted a hands-on AWS Storage workshop where 60+ learners explored S3, IAM, and distributed storage concepts, culminating in building and testing a live S3-style system."
              cover="/community/bytebucket.png"
              event="AWS Cloud Club"
              date="April 2025"
              highlights={[
                "Led a workshop for 60+ cloud learners",
                "Built and demonstrated a live S3-style system",
                "Covered S3, IAM, EFS, RDS, and DynamoDB concepts",
              ]}
              link="https://www.linkedin.com/feed/update/urn:li:activity:7321807714882306049/"
            />

          </div>
        </section>

        <section className="mt-32 pt-16 border-t border-white/8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
              What community means to me
            </p>

            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-white">
              The best opportunities I've had usually started with people.
            </h2>

            <p className="mt-7 text-lg leading-8 text-gray-500">
              Community taught me that building something useful is only half
              the job. The other half is helping people understand it, use it,
              contribute to it, and eventually build something of their own.
              That idea continues to shape how I approach engineering,
              leadership, and everything I'm building next.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}