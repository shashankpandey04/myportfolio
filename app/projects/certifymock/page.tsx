import ProjectPage from "@/components/projects/ProjectPage";

export default function Page() {
  return (
    <ProjectPage
      title="CertifyMock – Certification Exam Platform"

      description="A scalable certification exam platform designed for realistic mock assessments, supporting multiple question types, timed attempts, randomized exams, scoring, passing criteria, and certification tracking."

      image="/projects/certifymock.png"

      tech={[
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Docker"
      ]}

      overview="
CertifyMock is a certification and mock-examination platform designed to provide a structured environment for preparing for professional certification exams.

The platform is designed around the complete exam lifecycle rather than simply presenting a collection of questions. It handles exam definitions, question pools, different question types, timed attempts, answer submission, scoring, passing criteria, and certification results.

The architecture is also designed to be future-proof, allowing additional certification ecosystems and exam types to be introduced without rebuilding the core examination system.
"

      problem="
Most basic mock-test platforms are built around a simple question-and-answer flow. This works for small quizzes, but it does not provide the infrastructure required to realistically model professional certification examinations.

Different exams can have different question types, scoring rules, passing requirements, time limits, and question pools.

The challenge was therefore to build an examination system where these concepts are represented as part of the platform itself rather than being hard-coded around one particular exam.
"

      solution="
CertifyMock models the examination process as a structured system consisting of exams, questions, attempts, answers, scoring, and certification outcomes.

The platform supports both single-select and multi-select questions, along with scored questions and configurable passing requirements.

When an exam begins, the system creates an attempt and manages the user's progress through the assessment. Questions can be selected from defined question pools, allowing exams to be randomized while maintaining control over the assessment structure.

After submission, the attempt is evaluated against the configured scoring and passing criteria, producing the user's result and certification status.
"

      features={[
        "Support for multiple certification ecosystems",
        "Single-select multiple-choice questions",
        "Multi-select multiple-choice questions",
        "Scored questions",
        "Timed examination attempts",
        "Question pools for exam construction",
        "Randomized question selection",
        "Persistent exam attempt tracking",
        "Answer submission and evaluation",
        "Configurable passing scores",
        "Automatic scoring and result calculation",
        "Certification result and status tracking",
        "Exam-specific configuration",
        "Architecture designed for future exam types and certification providers"
      ]}

      architecture={[
        {
          title: "Application Layer",
          description:
            "CertifyMock is built as a full-stack Next.js application, providing both the user-facing examination experience and the application logic required to manage exams, attempts, scoring, and certification results.",
        },
        {
          title: "Examination Engine",
          description:
            "The core examination system manages the complete exam lifecycle, from exam selection and configuration to attempt creation, question delivery, answer submission, scoring, and final result evaluation.",
        },
        {
          title: "Exam Data Model",
          description:
            "The data model separates exams, questions, question pools, attempts, submitted answers, scoring information, and certification results. This allows the same infrastructure to support multiple certification ecosystems without coupling the platform to a single examination.",
        },
        {
          title: "Attempt & Answer Management",
          description:
            "During an active examination, the system maintains the state of the attempt and tracks submitted answers throughout the session. This creates a clear separation between the exam configuration, the user's attempt, and the final evaluation.",
        },
        {
          title: "Scoring & Evaluation",
          description:
            "Once an attempt is completed, the scoring system evaluates submitted responses and applies the configured passing criteria. The result determines the user's exam outcome and updates the corresponding certification status.",
        },
        {
          title: "Persistent Storage & Deployment",
          description:
            "PostgreSQL provides persistent storage for the examination system and its relational data. The application is designed to run in containerized environments, allowing consistent deployment alongside its database infrastructure.",
        },
      ]}

      challenges={[
        "Designing a database model flexible enough to support multiple certification ecosystems rather than one fixed examination.",
        "Supporting different question types while keeping the exam and scoring workflow consistent.",
        "Separating question pools from individual exams so questions can be reused and exams can be constructed dynamically.",
        "Handling timed attempts and persistent exam state across the examination lifecycle.",
        "Implementing scoring and configurable passing criteria instead of treating every question as a simple binary response.",
        "Ensuring randomized assessments remain tied to a specific exam attempt so the user's session can be evaluated consistently.",
        "Designing the architecture to allow additional certification providers and examination formats to be added in the future.",
        "Keeping the examination workflow and backend data model structured enough to support future features such as larger question banks and paid mock-test series."
      ]}

      outcome="
CertifyMock provides the foundation for a multi-certification examination platform rather than a single-purpose quiz application.

The system supports the core lifecycle of a professional mock examination, from question pools and exam configuration through timed attempts, answer evaluation, scoring, passing criteria, and certification results.

Its architecture is intentionally designed to grow beyond a single certification ecosystem, making it possible to introduce additional exams and mock-test series while keeping the underlying examination infrastructure reusable.
"
      githubLink="https://github.com/awsbuilderslpu/Mock-Certifications"
      liveLink="https://mock.awslpu.in"
    />
  );
}