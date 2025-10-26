import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const heading = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kunal Singh — Professional Video Editing Portfolio",
  description:
    "Cinematic video editing portfolio showcasing Kunal Singh's motion design, storytelling, and editing craft across brands, creators, and esports.",
  keywords: [
    "Kunal Singh",
    "video editor",
    "motion designer",
    "Adobe After Effects",
    "Premiere Pro",
    "cinematic portfolio",
    "showreel",
  ],
  openGraph: {
    title: "Kunal Singh — Professional Video Editing Portfolio",
    description:
      "Cinematic motion design portfolio highlighting typography, transitions, and storytelling from a professional video editor.",
    url: "https://kunal-singh-portfolio.example",
    siteName: "Kunal Singh Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kunal Singh Portfolio"
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://kunal-singh-portfolio.example"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
