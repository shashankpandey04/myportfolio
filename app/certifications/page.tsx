import React from "react";
import CertificationsClient from "@/components/certifications/CertificationsClient";

export default function CertificationsPage() {
  return (
    <React.Suspense fallback={<div />}> 
      <CertificationsClient />
    </React.Suspense>
  );
}
