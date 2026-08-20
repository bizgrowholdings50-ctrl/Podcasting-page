import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BizGrow Media | Professional Podcast Production & Authority Building",
  description: "Transform your business voice with BizGrow Media. Premium podcast production, content engine, and authority-building solutions for founders and executives.",
   icons: {
    icon: [
      { url: "/site-logo.png", href: "/site-logo.png" },
      { url: "/site-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/site-logo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/site-logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}