import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Suleman — Senior React Native & Front-End Engineer",
  description:
    "Senior React Native, React.js, and Next.js engineer with 6+ years building high-performance mobile and web apps across fintech, eSIM, edtech, and media. Available for senior remote roles.",
  keywords: [
    "Muhammad Suleman",
    "React Native Developer",
    "React Native Engineer",
    "Senior React Native Developer",
    "Front-End Engineer",
    "React.js Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Mobile Engineer",
    "Software Engineer Pakistan",
    "Remote React Native Developer",
  ],
  authors: [{ name: "Muhammad Suleman" }],
  creator: "Muhammad Suleman",
  openGraph: {
    title: "Muhammad Suleman — Senior React Native & Front-End Engineer",
    description:
      "6+ years building high-performance mobile and web apps with React Native, React.js, and Next.js.",
    type: "website",
    locale: "en_US",
    siteName: "Muhammad Suleman Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Suleman — Senior React Native & Front-End Engineer",
    description:
      "6+ years building high-performance mobile and web apps with React Native, React.js, and Next.js.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="noise">{children}</body>
    </html>
  );
}
