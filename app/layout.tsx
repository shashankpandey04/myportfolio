import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navigationBar";
import PageTransition from "@/components/PageTransition";
import CatAssistant from "@/components/CatAssistant";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shashankpandey.me"),

  title: {
    default: "Shashank Pandey | Software Engineer",
    template: "%s | Shashank Pandey",
  },

  description:
    "Official website of Shashank Pandey — Software Engineer, AWS Community Leader, Builder, and Founder building scalable backend systems, cloud-native platforms, and developer tools.",

  keywords: [
    "Shashank Pandey",
    "Shashank Pandey Portfolio",
    "Shashank Pandey Software Engineer",
    "Shashank Pandey Developer",
    "Backend Engineer",
    "Software Engineer",
    "AWS Community Leader",
    "AWS Student Builder",
    "FastAPI Developer",
    "Next.js Developer",
    "Python Developer",
    "Cloud Computing",
    "System Design",
    "Developer Portfolio",
    "CYNI",
    "Open Source",
  ],

  authors: [
    {
      name: "Shashank Pandey",
      url: "https://shashankpandey.me",
    },
  ],

  creator: "Shashank Pandey",
  publisher: "Shashank Pandey",

  alternates: {
    canonical: "https://shashankpandey.me",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Shashank Pandey | Software Engineer",
    description:
      "Official website of Shashank Pandey — Software Engineer, AWS Community Leader, Builder, and Founder.",

    url: "https://shashankpandey.me",

    siteName: "Shashank Pandey",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shashank Pandey",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Shashank Pandey | Software Engineer",

    description:
      "Software Engineer building cloud-native platforms, scalable backend systems, and developer tools.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ colorScheme: "dark" }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0B1220] text-white`}
      >
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",

              name: "Shashank Pandey",

              url: "https://shashankpandey.me",

              image: "https://shashankpandey.me/profile.jpg",

              jobTitle: "Software Engineer",

              sameAs: [
                "https://www.linkedin.com/in/shashankpandey04/",
                "https://github.com/shashankpandey04",
                "https://instagram.com/shashank.pandey04",
                "https://x.com/ShashankP04",
              ],

              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Lovely Professional University",
              },

              knowsAbout: [
                "Software Engineering",
                "Backend Development",
                "FastAPI",
                "Next.js",
                "Cloud Computing",
                "AWS",
                "System Design",
                "Developer Tools",
              ],
            }),
          }}
        />

        <Navbar />

        <PageTransition>{children}</PageTransition>

        <CatAssistant />
      </body>
    </html>
  );
}
