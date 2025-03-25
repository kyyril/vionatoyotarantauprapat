import { Metadata } from "next";
import CarDetailClient from "../_components/CarDetailClient";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const title = `Mobil ${slug} | Toyota Viona Labuhanbatu Rantauprapat`;
  const description = `Dapatkan informasi lengkap tentang Toyota ${slug} di Toyota Viona Labuhanbatu Rantauprapat. Spesifikasi, harga OTR terbaru, promo, dan paket kredit terbaik untuk Anda. Hubungi sales Toyota terdekat sekarang!`;

  return {
    title: {
      default: title,
      template: `%s | Dealer Resmi Toyota Viona Labuhanbatu Rantauprapat`,
    },
    description,
    openGraph: {
      title,
      description,
      url: `https://www.toyotarantauprapatviona.com/mobil/${slug}/`,
      siteName: "Toyota Viona Labuhanbatu Rantauprapat",
      locale: "id_ID",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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
    alternates: {
      canonical: `https://www.toyotarantauprapatviona.com/${slug}/`,
    },
    keywords: `toyota ${slug}, harga toyota ${slug}, kredit toyota ${slug}, promo toyota ${slug}, spesifikasi toyota ${slug}, dealer toyota labuhanbatu, mobil toyota terbaru, sales toyota labuhanbatu`,
    verification: {
      google: "24f9cc081f9ae37b",
    },
    authors: [{ name: "Toyota Viona Labuhanbatu Rantauprapat" }],
    category: "Automotive",
    metadataBase: new URL("https://www.toyotarantauprapatviona.com/mobil/"),
  };
}

export default async function CarDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  return <CarDetailClient slug={resolvedParams.slug} />;
}
