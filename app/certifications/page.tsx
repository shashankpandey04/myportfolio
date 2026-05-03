"use client";

import { useState } from "react";
import CertificationCard from "@/components/certifications/CertificationCard";
import CertificateModal from "@/components/certifications/CertificateModal";

export default function CertificationsPage() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  const [filter, setFilter] = useState("All");

  const coreCertifications = [
    {
      title: "Oracle Data Platform Foundations Associate",
      issuer: "Oracle",
      date: "May 2026",
      image: "/certifications/oracle-foundations-dbms.png",
      category: "Data & Cloud",
    },
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
      category: "Backend",
    },
  ];

  const additionalCertifications = [
    {
      title: "Data Structures & Algorithms",
      issuer: "Lovely Professional University",
      date: "Dec 2024",
      image: "/certifications/dsa_neocolab.png",
      category: "Programming",
    },
    {
      title: "Object-Oriented Programming with C++",
      issuer: "Lovely Professional University",
      date: "Dec 2024",
      image: "/certifications/oops_neocolab.png",
      category: "Programming",
    },
  ];

  const filterCerts = (certs: any[]) =>
    filter === "All"
      ? certs
      : certs.filter((cert) => cert.category === filter);

  const filteredCore = filterCerts(coreCertifications);
  const filteredAdditional = filterCerts(additionalCertifications);

  return (
    <main className="max-w-6xl mx-auto px-6 py-24">

      <div className="mb-16">
        <h1 className="text-4xl font-bold text-white">
          Certifications
        </h1>

        <p className="mt-4 text-gray-400 max-w-2xl">
          Certifications focused on cloud computing, backend systems, and software engineering fundamentals.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mb-12">
        {["All", "Cloud", "Backend", "Programming", "Data & Cloud"].map((cat) => (
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

      {filteredCore.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold text-white mb-6">
            Core Certifications
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredCore.map((cert, i) => (
              <CertificationCard
                key={i}
                {...cert}
                variant="core"
                onClick={() => setSelectedCert(cert.image)}
              />
            ))}
          </div>
        </>
      )}

      {filteredAdditional.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold text-gray-300 mb-6">
            Additional Learning
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAdditional.map((cert, i) => (
              <CertificationCard
                key={i}
                {...cert}
                variant="default"
                onClick={() => setSelectedCert(cert.image)}
              />
            ))}
          </div>
        </>
      )}

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