"use client";

import { useEffect } from "react";
import { useCarDetailStore } from "@/lib/store/useCarDetailStore";
import ErrorScreen from "@/components/MobilDetail/ErrorDetail";
import CarDetailSkeleton from "@/components/MobilDetail/CarDetailSkeleton";
import CarDetailContent from "@/components/MobilDetail/CarDetailContent";

interface CarDetailClientProps {
  slug: string;
}

export default function CarDetailClient({ slug }: CarDetailClientProps) {
  const { cars, isLoading, error, fetchCarDetail } = useCarDetailStore();

  useEffect(() => {
    if (slug && !cars[slug]) {
      fetchCarDetail(slug);
    }
  }, [slug, cars, fetchCarDetail]);

  if (isLoading) {
    return <CarDetailSkeleton />;
  }

  if (error || !cars[slug]) {
    return <ErrorScreen onReload={() => fetchCarDetail(slug)} />;
  }

  return <CarDetailContent mobil={cars[slug]} />;
}
