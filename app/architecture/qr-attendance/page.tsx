import ArchitecturePage from "@/components/architecture/ArchitecturePage";

export default function QRArchitecture() {
  return (
    <ArchitecturePage
      title="QR Attendance System Architecture"
      description="A scalable event attendance verification system using QR codes, cloud infrastructure, and backend validation services."

      image="/architecture/qr-attendance-architecture.png"

      components={[
        "QR Interface where participants access their personal QR codes.",
        "QR Scanner used by event staff to scan participant codes.",
        "Flask Backend API running on AWS EC2 that verifies scan requests.",
        "Amazon RDS storing participant and attendance records.",
        "Amazon S3 storing generated certificates and assets.",
        "Amazon CloudWatch monitoring system logs and backend activity."
      ]}

      flow={[
        "Participants register for the event through the platform.",
        "A unique QR code is generated and stored in the user dashboard.",
        "At the event venue, staff scan participant QR codes.",
        "The scanning interface sends an API request to the backend.",
        "The backend verifies the participant and attendance status.",
        "If validation passes, attendance is recorded in the database.",
        "Duplicate scans are automatically rejected."
      ]}

      scalability="
      The backend is hosted on AWS EC2 and can be horizontally scaled if event traffic increases.
      RDS handles structured attendance data efficiently, while S3 separates file storage from the application layer.
      This separation allows the system to scale independently across compute, storage, and database layers.
      "

      security="
      Each QR scan request is validated by the backend before attendance is recorded.
      Duplicate scans are prevented through database checks.
      Logs stored in CloudWatch provide monitoring and auditing capabilities for suspicious or abnormal activity.
      "

      outcome="
      The system enables fast and contactless attendance verification during events while preventing duplicate entries.
      By combining QR-based identification with cloud infrastructure, the platform ensures reliability, scalability, and operational visibility.
      "
    />
  );
}