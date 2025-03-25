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
    default: "Dealer Resmi Toyota Rantauprapat | Harga Terbaik & Promo 2024",
    template: "%s | Toyota Viona Rantauprapat",
  },
  description:
    "Dealer resmi Toyota Rantauprapat - Dapatkan harga terbaik & promo menarik untuk semua tipe mobil Toyota. Melayani penjualan, servis, dan sparepart di wilayah Labuhanbatu dan sekitarnya ✓ Booking Service ✓ Test Drive ✓ Konsultasi Gratis",
  keywords:
    "dealer toyota rantauprapat, harga toyota rantauprapat, promo toyota labuhanbatu, mobil toyota terbaru, servis toyota rantauprapat, sparepart toyota asli, showroom toyota labuhanbatu, kredit toyota murah, cash toyota rantauprapat, toyota viona",
  authors: [{ name: "Toyota Viona Rantauprapat" }],
  creator: "Toyota Viona Rantauprapat",
  publisher: "Toyota Auto 2000",
  alternates: {
    canonical: "https://www.toyotarantauprapatviona.com",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    minimumScale: 1,
  },
  verification: {
    google: "24f9cc081f9ae37b",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.toyotarantauprapatviona.com/",
    siteName: "Toyota Viona Rantauprapat",
    title: "Dealer Resmi Toyota Rantauprapat | Harga & Promo Terbaik 2024",
    description:
      "Dealer resmi Toyota Rantauprapat menawarkan harga terbaik untuk semua tipe mobil Toyota. Dapatkan promo menarik, cicilan ringan, dan layanan purna jual terpercaya.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Toyota Viona Rantauprapat - D                                                                                          ealer Resmi Toyota Auto 2000",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dealer Resmi Toyota Rantauprapat | Harga & Promo Terbaik 2024",
    description:
      "Dealer resmi Toyota Rantauprapat menawarkan harga terbaik untuk semua tipe mobil Toyota. Dapatkan promo menarik, cicilan ringan, dan layanan purna jual terpercaya.",
    images: ["/images/og-image.jpg"],
    creator: "@ToyotaViona",
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
