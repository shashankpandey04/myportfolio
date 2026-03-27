import ProjectPage from "@/components/projects/ProjectPage";

export default function Page() {
  return (
    <ProjectPage
      title="Rusk – Micro Web Framework (Rust)"

      description="An experimental micro web framework built in Rust, exploring routing, template rendering, and the fundamentals of web framework design."

      image="/projects/rusk.png"

      tech={[
        "Rust"
      ]}

      overview="
Rusk is an experimental micro web framework built in Rust, created to explore how web frameworks function at a lower level.

The project focuses on implementing core features such as routing and template rendering from scratch, providing a deeper understanding of request handling and server-side rendering.

Rather than relying on existing frameworks, Rusk is designed as a learning-driven project to understand the internals of web development systems.
"

      problem="
Modern web frameworks abstract away many internal details, making it harder to understand how routing, request handling, and rendering actually work.

Key challenges included:

• Understanding low-level request handling in Rust
• Designing a simple and flexible routing mechanism
• Implementing template rendering without external dependencies
• Structuring the project in a scalable and modular way

These challenges required a deeper dive into systems-level programming concepts.
"

      solution="
Rusk was developed as a minimal framework that implements essential web features from the ground up.

It introduces a simple routing system to map requests to handlers and a basic template rendering engine for dynamic HTML generation.

The focus was on clarity and control rather than feature completeness, allowing experimentation with core concepts of web frameworks.
"

      features={[
        "Basic routing system for handling HTTP requests",
        "Template rendering engine for dynamic HTML",
        "Lightweight and minimal design",
        "Modular structure for future extensibility"
      ]}

      architecture="
Rusk is built using Rust, leveraging its performance and safety features.

The framework is structured into modular components, separating routing logic and rendering functionality. 
Requests are processed through defined routes, and responses are generated using a custom template rendering system.

The architecture is intentionally minimal, allowing flexibility for future enhancements such as middleware, request parsing, and improved routing mechanisms.
"

      challenges={[
        "Working with Rust's ownership model while designing reusable components.",
        "Building routing logic without relying on existing frameworks.",
        "Designing a template engine from scratch.",
        "Maintaining simplicity while planning for future extensibility."
      ]}

      outcome="
Rusk serves as a foundational project for understanding how web frameworks are built internally.

It demonstrates an interest in systems-level development and provides a base for future exploration into building more advanced backend tools and infrastructure.

The project highlights curiosity-driven development and a deeper engagement with low-level programming concepts.
"

      githubLink="https://github.com/shashankpandey04/Rusk"
    />
  );
}