import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/lib/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joseph Alesna | Automation Specialist for Growing Teams",
  description:
    "I build reliable workflows using n8n, Make, and Zapier to eliminate repetitive work and streamline operations. Hire an automation specialist to scale your business.",
  keywords: [
    "automation specialist",
    "n8n",
    "Zapier",
    "Make",
    "workflow automation",
    "API integrations",
    "business automation",
    "no-code automation",
    "freelance automation",
  ],
  authors: [{ name: "Joseph Alesna" }],
  creator: "Joseph Alesna",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jvalesna.vercel.app/",
    siteName: "Joseph Alesna - Automation Specialist",
    title: "Joseph Alesna | Automation Specialist for Growing Teams",
    description:
      "I build reliable workflows using n8n, Make, and Zapier to eliminate repetitive work and streamline operations.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Joseph Alesna - Automation Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joseph Alesna | Automation Specialist for Growing Teams",
    description:
      "I build reliable workflows using n8n, Make, and Zapier to eliminate repetitive work and streamline operations.",
    images: ["/og-image.jpg"],
    creator: "@josephvalesna",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://jvalesna.vercel.app/"),
};

// Script to prevent FOUC by setting theme before render
const themeScript = `
  (function() {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored === 'dark' || stored === 'light' ? stored : (prefersDark ? 'dark' : 'light');
    document.documentElement.classList.add(theme);
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
