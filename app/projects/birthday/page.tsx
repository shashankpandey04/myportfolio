import ProjectPage from "@/components/projects/ProjectPage";

export default function Page() {
  return (
    <ProjectPage
      title="Interactive Birthday Experience"

      description="A creative web experience that transforms a simple birthday message into an interactive animation flow with envelope interactions, card reveal, and confetti celebration."

      image="/projects/birthday.png"

      tech={[
        "Next.js",
        "Framer Motion",
        "Canvas Confetti"
      ]}

      overview="
This project was built as a fun and creative way to deliver a birthday message through an interactive web experience instead of a traditional text.

The experience guides the user through a sequence of animations, starting with an envelope interaction, followed by a sliding birthday card, and ending with a celebratory confetti animation.

The focus of the project was on crafting smooth UI transitions, micro-interactions, and creating an engaging user journey through animation and motion design.
"

      problem="
Traditional digital greetings often lack engagement and emotional impact. A simple message or static design does not create a memorable experience.

Key challenges included:

• Making the interaction feel natural and intuitive
• Designing smooth animation flows without overwhelming the user
• Creating a cohesive storytelling experience through UI
• Ensuring performance while using animations and effects
"

      solution="
The solution was to design a step-by-step interactive experience using modern frontend tools.

Framer Motion was used to handle smooth animations and transitions, while Canvas Confetti added a celebratory visual effect at the end of the interaction. 
The UI was structured to guide users naturally through each stage of the experience, making the interaction feel engaging and intuitive.

The result is a lightweight, responsive, and visually appealing experience that demonstrates how animation can enhance user interaction and storytelling.
"

      features={[
        "Interactive envelope click animation",
        "Smooth sliding card reveal using Framer Motion",
        "Confetti celebration effect for user engagement",
        "Responsive and lightweight UI",
        "Micro-interactions designed for smooth user flow"
      ]}

      architecture="
The application is built using Next.js for fast rendering and optimized performance. 

Framer Motion is used to manage animation states and transitions, allowing smooth and declarative motion design. 
Canvas Confetti is integrated to provide dynamic visual effects without heavy performance overhead.

The architecture focuses on component-based design, where each interaction step is modular and reusable. 
State transitions control the animation flow, ensuring a seamless user experience.
"

      challenges={[
        "Coordinating multiple animation states without breaking the user flow.",
        "Ensuring animations remain smooth across different devices and screen sizes.",
        "Balancing visual effects with performance optimization.",
        "Designing intuitive interactions without requiring instructions.",
        "Managing animation timing to create a natural storytelling experience."
      ]}

      outcome="
The project successfully demonstrates how creative UI and animation can transform a simple idea into an engaging experience.

It highlights the importance of micro-interactions in frontend development and showcases the ability to design user-centric, interactive interfaces beyond traditional applications.

This project reflects a balance between creativity and engineering, emphasizing experience-driven development.
"

      liveLink="https://pasandida-aurat-birthday.netlify.app/"
      githubLink="https://github.com/shashankpandey04/pasandia-aurat-birthday"
    />
  );
}