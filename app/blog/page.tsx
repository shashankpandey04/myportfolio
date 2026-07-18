import BlogCard from "@/components/blog/BlogCard";

export default function BlogPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-white">Blog</h1>

        <p className="mt-4 text-gray-400 max-w-2xl">
          Technical articles and engineering notes where I share learnings about
          backend systems, cloud architecture, and developer tooling.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        <BlogCard
            title="Designing a Cost-Effective Serverless Certificate Generation System on AWS"
            description="How I used AWS Lambda and Amazon S3 to build a scalable certificate platform that minimizes storage costs while improving security."
            cover="/blogs/cost-serverless_certificate_generation_system.png"
            platform="DEV Community"
            link="https://dev.to/shashankpandey04/designing-a-cost-effective-serverless-certificate-generation-system-on-aws-3ec4"
          />

        <BlogCard
          title="Why I Built a Serverless Certificate Generation System"
          description="The story behind building a serverless, event-driven certificate generation system-from Gmail limitations and Cloudflare Workers constraints to a scalable architecture that could be operated on a student community budget."
          cover="/blogs/serverless-certificate-system.png"
          platform="DEV Community"
          link="https://dev.to/shashankpandey04/why-i-built-a-serverless-certificate-generation-system-3bn4"
        />

        <BlogCard
          title="Designing a Scalable Event Management Platform on AWS"
          description="Architecture and infrastructure design for a scalable event platform using AWS services including EC2, RDS, S3, and monitoring tools."
          cover="/blogs/aws-event-architecture.png"
          platform="AWS Builder Center"
          link="https://builder.aws.com/content/3Ai3egg31SR3B8oo3JnhTBXegej/designing-a-scalable-event-management-platform-architecture-on-aws"
        />

        <BlogCard
          title="Fine-Tuning Isn’t Enough Anymore — Amazon Nova Forge Changes the Game"
          description="An exploration of how Amazon Nova Forge enables deeper AI customization by allowing developers to intervene earlier in the training lifecycle instead of relying only on prompt engineering or late-stage fine-tuning."
          cover="/blogs/amazon-nova.png"
          platform="LinkedIn"
          link="https://www.linkedin.com/pulse/fine-tuning-isnt-enough-anymore-amazon-nova-forge-changes-pandey-gnv6c/"
        />
      </div>
    </main>
  );
}
