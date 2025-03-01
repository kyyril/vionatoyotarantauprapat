import { Metadata } from "next";

import LayananDetailClient from "../_components/LayananDetailClient";

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
      default: `Layanan ${slug} | Toyota Labuhanbatu`,
      template: `%s | Layanan Toyota Labuhanbatu, Rantauprapat`,
    },
    description: `Dapatkan informasi lengkap tentang layanan ${slug} di Toyota Auto 2000 Labuhanbatu`,
    openGraph: {
      title: `Layanan ${slug} | Toyota Labuhanbatu`,
      description: `Layanan ${slug} di Toyota Labuhanbatu`,
      url: `https://www.toyotarantauprapat.com/layanan/${slug}`,
      siteName: "Toyota Labuhanbatu",
      locale: "id_ID",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Layanan ${slug} | Toyota Labuhanbatu`,
      description: `Layanan ${slug} di Toyota Labuhanbatu`,
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
      canonical: `https://www.toyotarantauprapat.com/layanan/${slug}`,
    },
    keywords: `layanan toyota ${slug}, service toyota, bengkel toyota, toyota labuhanbatu`,
    verification: {
      google: "24f9cc081f9ae37b",
    },
    metadataBase: new URL("https://www.toyotarantauprapat.com/layanan"),
  };
}
export default async function LayananPage({ params }: PageProps) {
  const resolvedParams = await params;
  return <LayananDetailClient slug={resolvedParams.slug} />;
}
