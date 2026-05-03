import CommunityCard from "@/components/community/CommunityCard";

export default function CommunityPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">

      {/* Header */}
      <div className="mb-16">

        <h1 className="text-4xl font-bold text-white">
          Community
        </h1>

        <p className="mt-4 text-gray-400 max-w-2xl">
          Beyond building systems, I actively engage with the developer community -
          participating in events, collaborating with builders, and contributing
          to the AWS ecosystem through Cloud Clubs and real-world experiences.
        </p>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

      <CommunityCard
        title="AWS New Voices 2026 - Selected Speaker"
        description="Selected for AWS New Voices 2026, a program focused on developing public speaking skills and empowering builders to share ideas, insights, and real-world experiences."
        cover="/community/aws-new-voices.png"
        event="AWS New Voices Program"
        date="April 2026"
        highlights={[
          "Selected among competitive applicants",
          "Developing public speaking & storytelling skills",
          "Learning to communicate technical ideas effectively"
        ]}
        link="https://www.linkedin.com/posts/shashankpandey04_aws-awsnewvoices-publicspeaking-activity-7455092003710636032-14pH"
      />

      <CommunityCard
        title="AWS Summit Bengaluru 2026 - Builder Experience"
        description="Participated and contributed at AWS Summit Bengaluru, gaining first-hand exposure to real-world AI + cloud innovations and connecting with builders, developers, and industry leaders."
        cover="/community/aws-summit-bengaluru-2026.png"
        event="AWS Summit Bengaluru"
        date="April 2026"
        highlights={[
          "Explored real-world AI agent use cases on AWS",
          "Networked with developers & industry leaders",
          "Gained behind-the-scenes event experience"
        ]}
        link="https://www.linkedin.com/posts/shashankpandey04_awssummit-aws-cloudcomputing-activity-7453768647115837440-qshs/"
      />

      <CommunityCard
        title="AWS Student Builder Campus Leader - LPU"
        description="Selected as AWS Student Builder Campus Leader, driving cloud adoption through hands-on learning, community initiatives, and real-world project building."
        cover="/community/aws-sbcl.png"
        event="AWS SBCL Program"
        date="April 2026"
        highlights={[
          "Leading cloud learning initiatives on campus",
          "Providing access to AWS resources & labs",
          "Enabling students to build real-world projects"
        ]}
        link="https://www.linkedin.com/posts/shashankpandey04_awssbcl-ad-awsstudent-activity-7453288085477363712-x0ug/"
      />

        <CommunityCard
          title="AWS @ Techkriti 2026 - IIT Kanpur"
          description="Spent an incredible few days with the AWS Community at Techkriti, connecting with passionate builders, engaging at the AWS booth, and exchanging ideas across diverse perspectives."
          cover="/community/techkriti2026.png"
          event="AWS Community"
          date="March 2026"
          highlights={[
            "Connected with 5000+ student builders",
            "Represented AWS Cloud Club presence",
            "Collaborated with AWS team & captains"
          ]}
          link="https://www.linkedin.com/posts/shashankpandey04_awscloudclubs-awscloudclub-aws-activity-XXXXX"
        />

        <CommunityCard
            title="AWS Cloud Club Captain’s Call - Panelist"
            description="Invited as a panelist to the AWS Cloud Club Monthly Captain’s Call, sharing insights on building aligned teams, designing strong foundations, and scaling student communities sustainably."
            cover="/community/captains-call-feb26.png"
            event="AWS Cloud Clubs"
            date="February 2026"
            highlights={[
                "Spoke as a panelist to global Cloud Club Captains",
                "Shared insights on team building & community growth",
                "Engaged with new C6 Captains starting their journey"
            ]}
            link="https://www.linkedin.com/feed/update/urn:li:activity:7434499570102886400/"
        />

        <CommunityCard
          title="AWS Cloud Club - Community Building"
          description="Leading initiatives to build a strong AWS Cloud Club ecosystem, focusing on hands-on learning, engagement, and real-world problem solving."
          cover="/community/aws-cloud-clubs.png"
          event="AWS Cloud Club"
          date="January 2026"
          highlights={[
            "Engaged 2500+ students",
            "Designed structured learning pathways",
            "Led interactive initiatives like ArcHelp & BuilderType"
          ]}
          link="https://www.linkedin.com/posts/shashankpandey04_awscloudclubs-awscloudclub-aws-activity-7418168378760015873-5Lu2/"
        />

        <CommunityCard
            title="Bot Forge 2025 - Discord Bot Workshop"
            description="Organized and led a 2-day hands-on workshop on Discord bot development, focusing on real-world concepts, system thinking, and building beyond tutorials."
            cover="/community/bot-forge.png"
            event="AWS Cloud Club"
            date="December 2025"
            highlights={[
                "Conducted 2-day workshop for 60+ students",
                "Taught Discord bot architecture & automation",
                "Enabled students to build real-world bots"
            ]}
            link="https://www.linkedin.com/feed/update/urn:li:activity:7409855962225901568/"
        />

        <CommunityCard
          title="AWS Student Community Day - Jalandhar"
          description="Played a key role in organizing and executing AWS Student Community Day, bringing together students, speakers, and cloud enthusiasts for a full-day learning experience."
          cover="/community/aws-scd-jalandhar.png"
          event="AWS Event"
          date="November 2025"
          highlights={[
            "Co-organized large-scale student event",
            "Managed speakers & sessions",
            "Enabled hands-on cloud learning"
          ]}
          link="https://builder.aws.com/content/38s6BFOdJv9JNjSLLMxiggdcqVQ/aws-student-community-day-jalandhar-planning-execution-and-learnings-from-the-first-edition"
        />

        <CommunityCard
            title="ByteBucket - AWS Storage Workshop"
            description="Hosted a hands-on AWS Storage workshop where 60+ learners explored S3, IAM, and distributed storage concepts, culminating in building and testing a live S3-style system."
            cover="/community/bytebucket.png"
            event="AWS Cloud Club"
            date="April 2025"
            highlights={[
                "Led workshop for 60+ cloud learners",
                "Built and demonstrated a live S3-style system",
                "Covered S3, IAM, EFS, RDS & DynamoDB concepts"
            ]}
            link="https://www.linkedin.com/feed/update/urn:li:activity:7321807714882306049/"
        />

      </div>

    </main>
  );
}