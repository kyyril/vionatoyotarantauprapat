import Image from "next/image";
import { Bot, Car, CreditCard } from "lucide-react";
import { CardPromo } from "@/components/Promo/CardPromo";

import { BerandaCardMobil } from "@/components/Mobil/BerandaCardMobil";

import { Metadata } from "next";
import PhoneContact from "@/components/PhoneContact";
import Link from "next/link";
import ReviewCarousel from "@/components/ReviewCarousel";

export const metadata: Metadata = {
  title: "Toyota Viona Rantauprapat | Sales Resmi Toyota",
  description:
    "Sales Resmi Toyota Rantauprapat - Layanan penjualan mobil Toyota baru, servis, dan sparepart. Dapatkan promo menarik dan fasilitas pembayaran kredit maupun tunai.",
  keywords:
    "toyota rantauprapat, Sales toyota, mobil toyota, servis toyota, sparepart toyota, kredit toyota",
  openGraph: {
    title: "Toyota Rantauprapat | Sales Resmi Toyota",
    description:
      "Sales Resmi Toyota Rantauprapat - Layanan penjualan mobil Toyota baru, servis, dan sparepart.",
    images: [
      {
        url: "/images/profile.png",
        width: 1200,
        height: 630,
        alt: "Toyota Viona Rantauprapat",
      },
    ],
    locale: "id_ID",
    type: "website",
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

  verification: {
    google: "google24f9cc081f9ae37b.html", // Add your Google verification code
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <section
        id="profile"
        className="container max-w-5xl mx-auto md:py-16 lg:py-20 h-screen"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mx-1">
          <div className="w-1/2 mx-auto lg:w-1/3">
            <Image
              src={"/images/profile.png"}
              width={280}
              height={280}
              loading="lazy"
              alt="image"
              className="mx-auto aspect-square overflow-hidden object-cover object-center rounded-full border-2 border-red-500"
            />
          </div>
          <div className="max-w-7xl w-full px-2 mx-auto">
            <div className="space-y-1 mb-2 flex flex-col">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter ">
                <span className="text-red-500">Toyota Viona</span>
              </h1>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter">
                Rantauprapat
              </h1>
            </div>
            <p className="max-w-[600px] lg:text-lg  text-gray-500 font-light dark:text-gray-400">
              Halo! Perkenalkan saya Viona Pakpahan, seorang sales executive
              yang penuh semangat di Auto2000 Rantauprapat. Saya senang membantu
              pelanggan menemukan mobil Toyota yang sempurna untuk kebutuhan
              mereka. Saya memiliki kepribadian yang ramah dan mudah bergaul,
              dan selalu siap untuk menjawab pertanyaan dan memberikan saran.
            </p>
            <div className="space-x-4 mt-2">
              <PhoneContact />
            </div>
          </div>
        </div>
      </section>

      {/* promo */}
      <section
        className="max-w-8xl w-full mt-10 px-4 md:px-16 mx-auto"
        id="promo"
      >
        <h2 className="text-2xl font-semibold">Promo</h2>
        <CardPromo />
      </section>

      {/* {highlight} */}

      <section
        id="feature-highlights"
        className="max-w-8xl w-full mt-24 px-4 md:px-16 mx-auto"
      >
        <h2 className="text-2xl font-semibold">Menyediakan</h2>
        <div className="gap-6 mt-6 flex justify-between flex-col md:flex-row">
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <Car className="h-8 w-8 text-red-500 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Mobil</h3>
            <p className="text-gray-500">
              Berbagai pilihan mobil Toyota terbaru dengan harga kompetitif
            </p>
            <Link
              className="text-red-500 underline hover:opacity-50 flex justify-end w-full"
              href={"/mobil"}
            >
              kunjungi
            </Link>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <Bot className="h-8 w-8 text-red-500 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Rekomendasi AI</h3>
            <p className="text-gray-500">
              Dapatkan rekomendasi mobil yang sesuai dengan kebutuhan Anda
            </p>
            <a
              className="text-red-500 underline hover:opacity-50 flex justify-end w-full"
              href="/rekomendasi-ai"
            >
              kunjungi
            </a>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <CreditCard className="h-8 w-8 text-red-500 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Simulasi Kredit</h3>
            <p className="text-gray-500">
              Hitung estimasi cicilan bulanan untuk pembelian mobil Toyota
            </p>
          </div>
        </div>
      </section>

      <section
        id="sales"
        className="max-w-8xl w-full mt-24 px-4 md:px-16 mx-auto"
      >
        <h2 className="text-2xl font-semibold">Mobil</h2>
        <BerandaCardMobil />
      </section>

      {/* Review */}
      <section
        className="max-w-8xl w-full mt-10 px-4 md:px-16 mx-auto"
        id="review"
      >
        <ReviewCarousel />
      </section>

      <section
        className="max-w-8xl w-full mt-24 px-4 md:px-16 mx-auto"
        id="lokasi"
      >
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Lokasi</h2>
        </div>
        <div className="flex justify-center items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6288.034080097089!2d99.83794699514428!3d2.0921307861927723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x302da1ac3eab9c87%3A0x979ac3ca48e16c17!2sAuto2000%20Rantauprapat!5e1!3m2!1sid!2sid!4v1736217571208!5m2!1sid!2sid"
            width="800"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
