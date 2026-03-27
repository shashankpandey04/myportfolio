import ProjectPage from "@/components/projects/ProjectPage";

export default function Page() {
  return (
    <ProjectPage
      title="NutriTrack"

      description="A fitness challenge platform that enables users to set goals, track progress, and stay motivated through community-driven challenges and rewards."

      image="/projects/nutritrack.png"

      tech={[
        "HTML",
        "Tailwind CSS",
        "JavaScript",
        "PHP",
        "MySQL"
      ]}

      overview="
NutriTrack is a fitness challenge tracking platform designed to encourage users to stay consistent with their health and fitness goals.

The platform allows users to create and participate in custom challenges, track their progress in real-time, and earn rewards for achieving milestones. 
It focuses on building motivation through community engagement and goal-driven experiences.
"

      problem="
Many individuals struggle to maintain consistency in their fitness routines due to lack of motivation and accountability.

Key challenges included:

• No structured way to track progress across fitness goals
• Lack of community-driven motivation
• Difficulty maintaining consistency over time
• Limited reward systems to encourage engagement

These issues often result in users losing motivation and abandoning their fitness journey.
"

      solution="
NutriTrack was built to provide a structured and engaging platform for fitness tracking and challenges.

Users can create personalized fitness challenges, monitor their progress, and stay motivated through milestone-based rewards. 
The platform emphasizes simplicity, accessibility, and community interaction to improve user retention and engagement.
"

      features={[
        "Create and join custom fitness challenges",
        "Set personalized fitness goals",
        "Track progress in real-time",
        "Milestone-based rewards system",
        "Responsive and user-friendly interface",
        "Community-driven engagement features"
      ]}

      architecture="
NutriTrack follows a traditional web application architecture with a frontend built using HTML, Tailwind CSS, and JavaScript, and a backend powered by PHP.

The backend handles user authentication, challenge management, and progress tracking, while MySQL is used for storing user data and activity records.

The system focuses on simplicity and reliability, ensuring smooth interaction between frontend and backend components.
"

      challenges={[
        "Designing an intuitive UI that encourages consistent usage.",
        "Implementing real-time progress tracking with limited frontend frameworks.",
        "Managing backend logic using PHP while ensuring performance.",
        "Coordinating team collaboration across frontend and backend development.",
        "Balancing feature scope within a short development timeline."
      ]}

      outcome="
NutriTrack successfully delivered a functional and engaging platform that encourages users to stay consistent with their fitness goals.

The project highlights strong teamwork, full-stack development capabilities, and the ability to build user-centric applications that drive engagement and positive behavioral change.
"
    />
  );
}