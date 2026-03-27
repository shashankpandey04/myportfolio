import ProjectPage from "@/components/projects/ProjectPage";

export default function Page() {
  return (
    <ProjectPage
      title="CodeEval – Coding Assessment Platform"

      description="A secure and scalable coding exam platform with real-time code execution using Judge0 and a custom browser environment for controlled assessments."

      image="/projects/codeeval.png"

      tech={[
        "Next.js",
        "FastAPI",
        "Node.js",
        "Judge0"
      ]}

      overview="
CodeEval is an online coding assessment platform designed to conduct secure and scalable programming exams.

The platform enables users to write, execute, and submit code in real-time using Judge0, while maintaining exam integrity through a controlled browser environment. 
It is built to support technical assessments with reliable execution and monitoring.
"

      problem="
Traditional online exam systems lack secure environments for coding assessments and reliable execution engines.

Key challenges included:

• Preventing cheating during online coding exams
• Providing real-time code execution support
• Managing multiple language runtimes
• Ensuring system reliability under concurrent submissions
• Creating a controlled exam environment for candidates

These issues made it difficult to conduct fair and scalable coding assessments.
"

      solution="
CodeEval integrates Judge0 as a code execution engine and introduces a custom browser environment to control user activity during exams.

The system allows candidates to write and run code in multiple languages while maintaining exam integrity. 
The backend handles execution requests, submission tracking, and result evaluation efficiently.

The architecture ensures secure, real-time, and scalable assessment workflows.
"

      features={[
        "Real-time code execution using Judge0",
        "Support for multiple programming languages",
        "Custom browser environment for secure exams",
        "Submission tracking and evaluation system",
        "Scalable backend for handling concurrent users",
        "User-friendly coding interface"
      ]}

      architecture="
The frontend is built using Next.js to provide a responsive and interactive coding interface. 

FastAPI handles the core backend logic, including user management, exam flow, and submission handling. 
Node.js is used to manage custom browser behavior and system-level interactions.

Judge0 is integrated as the execution engine, enabling secure and isolated code execution. 
The system is designed to handle multiple concurrent requests while maintaining performance and reliability.
"

      challenges={[
        "Integrating Judge0 for real-time execution while managing API latency.",
        "Designing a secure browser environment to prevent cheating.",
        "Handling concurrent code execution requests efficiently.",
        "Ensuring system stability during high exam load.",
        "Coordinating multiple backend components (FastAPI + Node.js)."
      ]}

      outcome="
CodeEval provides a robust platform for conducting coding assessments with real-time execution and enhanced security.

It demonstrates strong system design capabilities, backend engineering, and the ability to integrate third-party execution engines into a scalable application.
"
    />
  );
}