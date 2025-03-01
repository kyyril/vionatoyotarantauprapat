import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navbar";
import BackToTopButton from "@/components/BackToTop";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import FloatingContact from "@/components/ContactFloating";

export const metadata: Metadata = {
  title: {
    default: "Toyota Rantauprapat | Dealer Resmi Toyota",
    template: "%s | Toyota Rantauprapat",
  },
  description:
    "Dealer Resmi Toyota Cabang Labuhanbatu Rantauprapat - Melayani penjualan mobil baru, servis berkala, dan sparepart asli Toyota dengan harga terbaik.",
  keywords:
    "toyota rantauprapat, dealer toyota, mobil toyota, servis toyota, sparepart toyota, auto 2000, labuhanbatu",
  authors: [{ name: "Toyota Rantauprapat" }],
  creator: "Toyota Rantauprapat",
  publisher: "Toyota Auto 2000",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "24f9cc081f9ae37b",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.toyotarantauprapat.com/",
    title: "Toyota Rantauprapat | Dealer Resmi Toyota Auto 2000",
    description:
      "Dealer Resmi Toyota Cabang Labuhanbatu Rantauprapat - Melayani penjualan mobil baru, servis berkala, dan sparepart asli Toyota.",
    siteName: "Toyota Rantauprapat",
    images: [
      {
        url: "/images/pt.png",
        width: 1200,
        height: 630,
        alt: "Toyota Rantauprapat",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased scroll-smooth`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          <Analytics />
          <Toaster />
          <Footer />
          <BackToTopButton />
          <FloatingContact />
        </ThemeProvider>
      </body>
    </html>
  );
}
