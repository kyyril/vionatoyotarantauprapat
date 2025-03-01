"use client";

import { useEffect } from "react";
import { useLayananDetailStore } from "@/lib/store/useLayananDetailStore";
import LayananDetailContent from "@/components/Layanan/LayananDetailContent";
import { DetailLayananSkeleton } from "@/components/Layanan/LayananDetailSkeleton";
import ErrorScreen from "@/components/MobilDetail/ErrorDetail";

interface LayananDetailClientProps {
  slug: string;
}

export default function LayananDetailClient({
  slug,
}: LayananDetailClientProps) {
  const { layananCache, isLoading, error, fetchLayananDetail } =
    useLayananDetailStore();

  useEffect(() => {
    if (slug && !layananCache[slug]) {
      fetchLayananDetail(slug);
    }
  }, [slug, layananCache, fetchLayananDetail]);

  if (isLoading) {
    return <DetailLayananSkeleton />;
  }

  if (error || !layananCache[slug]) {
    return <ErrorScreen onReload={() => fetchLayananDetail(slug)} />;
  }

  return <LayananDetailContent layanan={layananCache[slug]} />;
}
