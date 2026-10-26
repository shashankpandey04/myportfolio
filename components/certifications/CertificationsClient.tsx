"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import CertificationCard from "@/components/certifications/CertificationCard";
import CertificateModal from "@/components/certifications/CertificateModal";

const coreCertifications = [
  {
    uid: "aws-certified-cloud-practitioner",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "July 2026",
    image: "/certifications/aws-certified-cloud-practitioner.png",
    category: "Cloud",
    credentialId: "ffdfaa0e961c4d3d847746442a27f903",
    credentialUrl:
      "https://www.credly.com/badges/1d6c627b-0848-4b69-b308-842ea22287fd/public_url",
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
    issuer: "NPTEL · IIT Kharagpur",
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
    credentialId: "",
    credentialUrl: "",
  },
  {
    uid: "oops-cpp-lpu",
    title: "Object-Oriented Programming with C++",
    issuer: "Lovely Professional University",
    date: "Dec 2024",
    image: "/certifications/oops_neocolab.png",
    category: "Programming",
    credentialId: "",
    credentialUrl: "",
  },
];

const allCertifications = [
  ...coreCertifications,
  ...additionalCertifications,
];

const categories = [
  "All",
  "Cloud",
  "Backend",
  "Programming",
  "Data & Cloud",
];

export default function CertificationsClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filter, setFilter] = useState("All");

  const uid = searchParams.get("uid");

  const selectedCert = useMemo(
    () => allCertifications.find((cert) => cert.uid === uid) ?? null,
    [uid]
  );

  const filteredCore =
    filter === "All"
      ? coreCertifications
      : coreCertifications.filter((cert) => cert.category === filter);

  const filteredAdditional =
    filter === "All"
      ? additionalCertifications
      : additionalCertifications.filter((cert) => cert.category === filter);

  const openCertificate = (certUid: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("uid", certUid);

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
    <main className="min-h-screen bg-[#080808] text-[#eae8e3]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,220,255,0.05),transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-24 sm:pt-28">
        <header className="mb-10 border-b border-white/10 pb-8">
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-cyan-300" />
            <p className="text-[11px] uppercase tracking-[0.2em] text-cyan-300/80">
              Credentials
            </p>
          </div>

          <div className="mt-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <h1 className="text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
              Certifications<span className="text-white/30">.</span>
            </h1>

            <p className="text-xs text-white/35">
              {allCertifications.length} credentials
            </p>
          </div>

          <p className="mt-3 max-w-xl text-sm leading-6 text-white/45">
            Professional certifications and technical learning across cloud
            computing, backend engineering, and computer science.
          </p>
        </header>

        <section>
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const active = filter === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setFilter(category)}
                    aria-pressed={active}
                    className={`rounded-full border px-3.5 py-2 text-xs transition-colors ${
                      active
                        ? "border-cyan-300/70 bg-cyan-300 text-black"
                        : "border-white/10 text-white/50 hover:border-white/25 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {filteredCore.length > 0 && (
            <section className="mb-12">
              <div className="mb-5 flex items-center justify-between border-b border-white/[0.08] pb-3">
                <h2 className="text-sm font-medium text-white/85">
                  Core certifications
                </h2>
                <span className="text-xs text-white/30">
                  {filteredCore.length.toString().padStart(2, "0")}
                </span>
              </div>

              <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

          {filteredAdditional.length > 0 && (
            <section>
              <div className="mb-5 flex items-center justify-between border-b border-white/[0.08] pb-3">
                <h2 className="text-sm font-medium text-white/85">
                  Additional learning
                </h2>
                <span className="text-xs text-white/30">
                  {filteredAdditional.length.toString().padStart(2, "0")}
                </span>
              </div>

              <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

          {filteredCore.length === 0 && filteredAdditional.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-sm text-white/50">
                No certifications in this category.
              </p>
              <button
                type="button"
                onClick={() => setFilter("All")}
                className="mt-3 inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200"
              >
                View all
                <ArrowUpRight size={14} />
              </button>
            </div>
          )}
        </section>

        <footer className="mt-14 flex flex-col justify-between gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center">
          <p className="text-xs text-white/30">
            Learning, building, and getting better.
          </p>
          <a
            href="/projects"
            className="text-xs text-white/50 transition hover:text-cyan-300"
          >
            Explore projects ↗
          </a>
        </footer>
      </div>

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