import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://komikan.org"),
  keywords: ["Manga reading site", "Manga", "Comic", "Komikan"],
  applicationName: "Komikan",
  category: "Manga reading site",
  title: {
    default: "Komikan - Free and no-ads manga reading site",
    template: "%s | Komikan",
  },
  description:
    "Free and no-ads manga reading website, provide high-quality images with a comprehensive finding system, helps you easier to find your favourite manga",
  authors: { name: "Liquiddev99", url: "https://github.com/liquiddev99" },
  openGraph: {
    title: "Komikan - Free and no-ads manga reading site",
    siteName: "Komikan",
    url: "https://komikan.org",
    description:
      "Free and no-ads manga reading website, provide high-quality images with a comprehensive finding system, helps you easier to find your favourite manga",
    images: "/logo.png",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-bg-color text-slate-200 ${nunito.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
