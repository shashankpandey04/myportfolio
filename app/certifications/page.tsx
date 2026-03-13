"use client";

import { useState } from "react";
import CertificationCard from "@/components/certifications/CertificationCard";
import CertificateModal from "@/components/certifications/CertificateModal";

export default function CertificationsPage() {

  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  const [filter, setFilter] = useState("All");

  const certifications = [
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services",
      date: "Dec 2024",
      image: "/certifications/aws-cloud-practitioner.png",
      category: "Cloud",
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL • IIT Kharagpur",
      date: "Oct 2025",
      image: "/certifications/nptel-cloud-computing.png",
      category: "Cloud",
    },
    {
      title: "Node.js (Intermediate)",
      issuer: "HackerRank",
      date: "Feb 2026",
      image: "/certifications/nodejs_hackerrank.png",
      category: "Programming",
    },
    {
      title: "Python (Basic)",
      issuer: "HackerRank",
      date: "Dec 2023",
      image: "/certifications/python_hackerrank.png",
      category: "Programming",
    },
    {
      title: "AWS Cloud Computing 101",
      issuer: "AWS Educate",
      date: "2024",
      image: "/certifications/cloud_computting_101_aws.png",
      category: "Cloud",
    },
    {
      title: "Canva Essentials",
      issuer: "Canva Design School",
      date: "Feb 2026",
      image: "/certifications/canva-essentials.png",
      category: "Tools",
    },
    {
      title: "Object-Oriented Programming with C++",
      issuer: "Lovely Professional University",
      date: "Dec 2024",
      image: "/certifications/oops_neocolab.png",
      category: "Programming",
    },
    {
      title: "Data Structures & Algorithms",
      issuer: "Lovely Professional University",
      date: "Dec 2024",
      image: "/certifications/dsa_neocolab.png",
      category: "Programming",
    },
    {
      title: "C Programming",
      issuer: "CipherSchools",
      date: "May 2024",
      image: "/certifications/clang_cipherschool.png",
      category: "Programming",
    },
  ];

  const filteredCerts =
    filter === "All"
      ? certifications
      : certifications.filter((cert) => cert.category === filter);

  return (
    <main className="max-w-6xl mx-auto px-6 py-24">

      <div className="mb-16">
        <h1 className="text-4xl font-bold text-white">
          Certifications
        </h1>

        <p className="mt-4 text-gray-400 max-w-2xl">
          Certifications and courses related to cloud computing,
          backend development, and software engineering.
        </p>
      </div>

      {/* FILTER BUTTONS */}

      <div className="flex flex-wrap gap-3 mb-12">

        {["All", "Cloud", "Programming", "Tools"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm transition
              ${
                filter === cat
                  ? "bg-cyan-500 text-black"
                  : "bg-white/5 border border-white/10 text-gray-300 hover:border-cyan-400/40"
              }`}
          >
            {cat}
          </button>
        ))}

      </div>

      {/* CERT GRID */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredCerts.map((cert, i) => (
          <CertificationCard
            key={i}
            {...cert}
            onClick={() => setSelectedCert(cert.image)}
          />
        ))}

      </div>

      {/* MODAL */}

      {selectedCert && (
        <CertificateModal
          image={selectedCert}
          title="Certificate"
          onClose={() => setSelectedCert(null)}
        />
      )}

    </main>
  );
}