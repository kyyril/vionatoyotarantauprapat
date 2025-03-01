import { Metadata, Viewport } from "next";
import SalesDetailClient from "../_components/SalesDetailClient";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};
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

  return {
    title: {
      default: `Sales ${slug} | Toyota Rantauprapat`,
      template: `%s | Sales Toyota Rantauprapat`,
    },
    description: `Hubungi Sales Executive Toyota Auto 2000 Rantauprapat untuk mendapatkan penawaran terbaik mobil Toyota baru.`,
    openGraph: {
      title: `Sales Toyota ${slug} | Toyota Rantauprapat`,
      description: `Hubungi Sales Executive Toyota Auto 2000 Rantauprapat untuk mendapatkan penawaran terbaik mobil Toyota baru.`,
      url: `https://www.toyotarantauprapat.com/sales/${slug}`,
      siteName: "Toyota Rantauprapat",
      locale: "id_ID",
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: `Sales Toyota ${slug} | Toyota Rantauprapat`,
      description: `Hubungi Sales Executive Toyota Auto 2000 Rantauprapat`,
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
      canonical: `https://www.toyotarantauprapat.com/sales/${slug}`,
    },
    authors: [{ name: "Toyota Labuhanbatu" }],
    category: "Automotive",
    metadataBase: new URL("https://www.toyotarantauprapat.com"),
    keywords: `toyota, sales, rantauprapat, labuhanbatu, auto 2000, mobil toyota`,
    verification: {
      google: "24f9cc081f9ae37b",
    },
  };
}

export default async function SalesDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  return <SalesDetailClient slug={resolvedParams.slug} />;
}
