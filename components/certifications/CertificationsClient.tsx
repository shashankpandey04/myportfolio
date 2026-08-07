"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import CertificationCard from "@/components/certifications/CertificationCard";
import CertificateModal from "@/components/certifications/CertificateModal";

const coreCertifications = [
  {
    uid: "aws-certified-cloud-practioner",
    title: "AWS Certified Cloud Practioner",
    issuer: "Amazon Web Services (AWS)",
    date: "July 2026",
    image: "/certifications/aws-certified-cloud-practioner.png",
    category: "Cloud",
    credentialId: "ffdfaa0e961c4d3d847746442a27f903",
    credentialUrl: "https://www.credly.com/badges/1d6c627b-0848-4b69-b308-842ea22287fd/public_url",
  },
  {
    uid: "oracle-data-platform-foundations",
    title: "Oracle Data Platform Foundations Associate",
    issuer: "Oracle",
    date: "May 2026",
    image: "/certifications/oracle-foundations-dbms.png",
    category: "Data & Cloud",
    credentialId: "",
    credentialUrl: "",
  },
  {
    uid: "aws-cloud-practitioner",
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    date: "Dec 2024",
    image: "/certifications/aws-cloud-practitioner.png",
    category: "Cloud",
    credentialId: "",
    credentialUrl: "",
  },
  {
    uid: "nptel-cloud-computing",
    title: "Cloud Computing",
    issuer: "NPTEL • IIT Kharagpur",
    date: "Oct 2025",
    image: "/certifications/nptel-cloud-computing.png",
    category: "Cloud",
    credentialId: "",
    credentialUrl: "",
  },
  {
    uid: "nodejs-intermediate",
    title: "Node.js (Intermediate)",
    issuer: "HackerRank",
    date: "Feb 2026",
    image: "/certifications/nodejs_hackerrank.png",
    category: "Backend",
    credentialId: "",
    credentialUrl: "",
  },
];

const additionalCertifications = [
  {
    uid: "dsa-lpu",
    title: "Data Structures & Algorithms",
    issuer: "Lovely Professional University",
    date: "Dec 2024",
    image: "/certifications/dsa_neocolab.png",
    category: "Programming",
    credentialId: "YOUR-LPU-CREDENTIAL-ID",
    credentialUrl: "",
  },
  {
    uid: "oops-cpp-lpu",
    title: "Object-Oriented Programming with C++",
    issuer: "Lovely Professional University",
    date: "Dec 2024",
    image: "/certifications/oops_neocolab.png",
    category: "Programming",
    credentialId: "YOUR-LPU-CREDENTIAL-ID",
    credentialUrl: "",
  },
];

const allCertifications = [
  ...coreCertifications,
  ...additionalCertifications,
];

export default function CertificationsClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filter, setFilter] = useState("All");

  const uid = searchParams.get("uid");

  const selectedCert = useMemo(() => {
    if (!uid) return null;

    return (
      allCertifications.find((cert) => cert.uid === uid) ?? null
    );
  }, [uid]);

  const filteredCore =
    filter === "All"
      ? coreCertifications
      : coreCertifications.filter((cert) => cert.category === filter);

  const filteredAdditional =
    filter === "All"
      ? additionalCertifications
      : additionalCertifications.filter((cert) => cert.category === filter);

  const openCertificate = (uid: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("uid", uid);

    router.push(`/certifications?${params.toString()}`, { scroll: false });
  };

  const closeCertificate = () => {
    const params = new URLSearchParams(searchParams.toString());

    params.delete("uid");

    const query = params.toString();

    router.push(query ? `/certifications?${query}` : "/certifications", {
      scroll: false,
    });
  };

  return (
    <main className="max-w-6xl mx-auto px-6 py-24">

      {/* Header */}
      <div className="mb-16">
        <p className="text-sm text-cyan-400 font-medium tracking-widest uppercase">
          Credentials
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-white mt-3">
          Certifications
        </h1>

        <p className="mt-4 text-gray-400 max-w-2xl leading-relaxed">
          Certifications focused on cloud computing, backend
          systems, data platforms, and software engineering
          fundamentals.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-14">
        {["All", "Cloud", "Backend", "Programming", "Data & Cloud"].map(
          (cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`
              px-4 py-2 rounded-full text-sm
              border transition-all
              ${
                filter === cat
                  ? "bg-cyan-400 border-cyan-400 text-black"
                  : "bg-white/[0.03] border-white/10 text-gray-300 hover:border-cyan-400/40"
              }
            `}
            >
              {cat}
            </button>
          )
        )}
      </div>

      {/* Core */}
      {filteredCore.length > 0 && (
        <section>
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold text-white">
                Core Certifications
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Professional and industry-recognized credentials
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredCore.map((cert) => (
              <CertificationCard
                key={cert.uid}
                {...cert}
                variant="core"
                onClick={() => openCertificate(cert.uid)}
              />
            ))}
          </div>
        </section>
      )}

      {/* Additional */}
      {filteredAdditional.length > 0 && (
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-200">
              Additional Learning
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Academic and supplemental technical credentials
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAdditional.map((cert) => (
              <CertificationCard
                key={cert.uid}
                {...cert}
                variant="default"
                onClick={() => openCertificate(cert.uid)}
              />
            ))}
          </div>
        </section>
      )}

      {/* Modal */}
      {selectedCert && (
        <CertificateModal
          image={selectedCert.image}
          title={selectedCert.title}
          issuer={selectedCert.issuer}
          date={selectedCert.date}
          category={selectedCert.category}
          credentialId={selectedCert.credentialId}
          credentialUrl={selectedCert.credentialUrl}
          onClose={closeCertificate}
        />
      )}
    </main>
  );
}
