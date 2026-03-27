export default function ExperiencePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">

      {/* Header */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-white">
          Experience
        </h1>

        <p className="mt-4 text-gray-400 max-w-2xl">
          Professional experience across backend engineering, system design,
          and technical leadership.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* AWS */}
        <div className="group rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-sm hover:border-cyan-400/40 transition">

          <p className="text-xs text-cyan-400">
            AWS Cloud Club
          </p>

          <h3 className="text-lg font-semibold text-white mt-2">
            AWS Cloud Captain
          </h3>

          <p className="text-xs text-gray-500 mt-1">
            Feb 2025 – Present
          </p>

          <p className="text-gray-400 text-sm mt-4">
            Leading a cloud-focused student community through workshops,
            mentorship, and real-world learning initiatives.
          </p>

          <ul className="mt-4 space-y-1 text-xs text-gray-300">
            <li>• Scaled community to 2500+ students</li>
            <li>• Organized AWS Student Community Day</li>
            <li>• Achieved Diamond Level recognition</li>
          </ul>

        </div>

        {/* ERM */}
        <div className="group rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-sm hover:border-cyan-400/40 transition">

          <p className="text-xs text-cyan-400">
            ERM Systems
          </p>

          <h3 className="text-lg font-semibold text-white mt-2">
            Python Developer
          </h3>

          <p className="text-xs text-gray-500 mt-1">
            Jun 2024 – Jul 2025
          </p>

          <p className="text-gray-400 text-sm mt-4">
            Worked on backend systems and automation with focus on
            reliability, access control, and operational stability.
          </p>

          <ul className="mt-4 space-y-1 text-xs text-gray-300">
            <li>• Built backend services & automation</li>
            <li>• Improved system reliability</li>
            <li>• Contributed to production systems</li>
          </ul>

        </div>

        {/* Encrypt Edge */}
        <div className="group rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-sm hover:border-cyan-400/40 transition">

          <p className="text-xs text-cyan-400">
            Encrypt Edge
          </p>

          <h3 className="text-lg font-semibold text-white mt-2">
            Core Team Member
          </h3>

          <p className="text-xs text-gray-500 mt-1">
            Nov 2025 – Present
          </p>

          <p className="text-gray-400 text-sm mt-4">
            Designed CTF challenges and built vulnerable applications
            to teach real-world cybersecurity concepts.
          </p>

          <ul className="mt-4 space-y-1 text-xs text-gray-300">
            <li>• Created web security challenges</li>
            <li>• Built vulnerable systems</li>
            <li>• Promoted hands-on learning</li>
          </ul>

        </div>

        {/* CYNI */}
        <div className="group rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-sm hover:border-cyan-400/40 transition">

          <p className="text-xs text-cyan-400">
            Cyni Systems
          </p>

          <h3 className="text-lg font-semibold text-white mt-2">
            Discord Bot Developer
          </h3>

          <p className="text-xs text-gray-500 mt-1">
            Aug 2023 – Oct 2025
          </p>

          <p className="text-gray-400 text-sm mt-4">
            Developed scalable Discord automation systems focused on
            moderation workflows and reliability.
          </p>

          <ul className="mt-4 space-y-1 text-xs text-gray-300">
            <li>• Built scalable bot systems</li>
            <li>• Implemented automation workflows</li>
            <li>• Supported real-world usage</li>
          </ul>

        </div>

        {/* Hum Raahi */}
        <div className="group rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-sm hover:border-cyan-400/40 transition">

          <p className="text-xs text-cyan-400">
            Hum Raahi Foundation
          </p>

          <h3 className="text-lg font-semibold text-white mt-2">
            Graphic Designer
          </h3>

          <p className="text-xs text-gray-500 mt-1">
            Aug 2024 – Mar 2025
          </p>

          <p className="text-gray-400 text-sm mt-4">
            Designed digital assets and creatives for campaigns
            and outreach initiatives.
          </p>

          <ul className="mt-4 space-y-1 text-xs text-gray-300">
            <li>• Created visual assets</li>
            <li>• Supported branding efforts</li>
          </ul>

        </div>

      </div>

    </main>
  );
}