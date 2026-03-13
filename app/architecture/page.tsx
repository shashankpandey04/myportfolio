import ArchitectureCard from "@/components/architecture/ArchitectureCard";

export default function ArchitecturePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">

      <div className="mb-16">
        <h1 className="text-4xl font-bold text-white">
          System Architecture
        </h1>

        <p className="mt-4 text-gray-400 max-w-2xl">
          Architectural breakdowns of systems I’ve designed, focusing on
          scalability, backend workflows, and cloud infrastructure.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">

        <ArchitectureCard
          title="QR Attendance System Architecture"
          description="Architecture of a QR-based attendance system using AWS infrastructure, backend verification, and secure scan workflows."
          image="/architecture/qr-attendance-architecture.png"
          tech={["AWS EC2", "RDS", "S3", "CloudWatch", "Flask"]}
          architectureLink="/architecture/qr-attendance"
        />

      </div>

    </main>
  );
}