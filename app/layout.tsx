import type { Metadata } from "next";
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
  metadataBase: new URL("https://shashankpandey04.netlify.app"),

  title: {
    default: "Shashank Pandey | Backend Engineer",
    template: "%s | Shashank Pandey",
  },

  description:
    "Portfolio of Shashank Pandey — Backend Engineer building scalable systems using FastAPI, Next.js, Docker and cloud infrastructure.",

  keywords: [
    "Shashank Pandey",
    "Backend Engineer",
    "FastAPI Developer",
    "Next.js Developer",
    "Python Developer",
    "Software Engineer Portfolio",
    "System Design",
    "Cloud Developer",
    "AWS Cloud Captain"
  ],

  authors: [
    {
      name: "Shashank Pandey",
      url: "https://shashankpandey04.netlify.app",
    },
  ],

  creator: "Shashank Pandey",

  openGraph: {
    title: "Shashank Pandey | Backend Engineer",
    description:
      "AWS Cloud Captain - Backend engineer building scalable platforms, cloud systems, and developer tools.",
    url: "https://shashankpandey04.netlify.app",
    siteName: "Shashank Pandey Portfolio",
    images: [
      {
        url: "/og-image.png", // add later
        width: 1200,
        height: 630,
        alt: "Shashank Pandey Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shashank Pandey | Backend Engineer",
    description:
      "Backend engineer building scalable systems with FastAPI, Next.js and Docker.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0B1220] text-white`}
      >
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <CatAssistant />
      </body>
    </html>
  );
}