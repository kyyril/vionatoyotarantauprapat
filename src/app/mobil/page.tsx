import ListMobil from "@/components/Mobil/ListMobil";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Mobil Toyota Terbaru | Toyota Viona Rantauprapat",
    template: "%s | Toyota Viona Rantauprapat",
  },
  description:
    "Jelajahi koleksi lengkap mobil Toyota terbaru di Rantauprapat. Dapatkan informasi harga, spesifikasi, dan promo untuk MPV, SUV, hatchback, dan sedan Toyota. Tersedia Avanza, Innova, Rush, Fortuner, dan lainnya.",
  keywords:
    "mobil toyota rantauprapat, harga mobil toyota, dealer toyota labuhanbatu, jual mobil toyota, toyota mpv, toyota suv, avanza, innova, rush, fortuner, raize, yaris",
  openGraph: {
    title: "Mobil Toyota Terbaru 2025 | Toyota Viona Rantauprapat",
    description:
      "Koleksi lengkap mobil Toyota terbaru dengan harga terbaik. Tersedia MPV, SUV, hatchback, dan sedan Toyota di Rantauprapat dan sekitarnya.",
    url: "https://www.toyotarantauprapatviona.com/mobil/",
    siteName: "Toyota Rantauprapat",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/profile.png",
        width: 1200,
        height: 630,
        alt: "Toyota Viona Rantauprapat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harga Mobil Toyota Terbaru 2025 | Toyota Viona Rantauprapat",
    description:
      "Koleksi lengkap mobil Toyota terbaru dengan harga terbaik di Rantauprapat",
    images: ["/images/pt.png"],
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
  authors: [{ name: "Toyota Viona Rantauprapat" }],
  category: "Automotive",
};

const MobilPage = async () => {
  return (
    <main className="w-full flex justify-center items-start min-h-screen">
      <section className="w-full max-w-5xl flex justify-center items-center flex-col">
        <div className="mb-4">
          <h1 className="text-3xl font-bold text-center mb-2">
            Daftar Harga Mobil Toyota Terbaru
          </h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Temukan mobil Toyota impian Anda dengan harga terbaik. Tersedia
            berbagai model MPV, SUV, hatchback, dan sedan Toyota.
          </p>
        </div>
        <ListMobil />
      </section>
    </main>
  );
};

export default MobilPage;
