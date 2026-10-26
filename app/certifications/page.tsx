import { Suspense } from "react";
import CertificationsClient from "@/components/certifications/CertificationsClient";

export default function CertificationsPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#080808] px-6 py-24">
          <div className="mx-auto max-w-6xl animate-pulse">
            <div className="h-3 w-28 rounded bg-white/10" />
            <div className="mt-5 h-10 w-64 rounded bg-white/10" />
            <div className="mt-4 h-4 max-w-xl rounded bg-white/10" />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="h-80 rounded-2xl border border-white/10 bg-white/[0.03]"
                />
              ))}
            </div>
          </div>
        </main>
      }
    >
      <CertificationsClient />
    </Suspense>
  );
}