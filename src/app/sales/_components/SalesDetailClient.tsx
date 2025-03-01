"use client";

import { useEffect } from "react";
import { useSalesDetailStore } from "@/lib/store/useSalesDetailStore";
import SalesDetailsSkeleton from "@/components/Sales/SalesDetailSkeleton";
import ErrorScreen from "@/components/MobilDetail/ErrorDetail";
import SalesDetailContent from "@/components/Sales/SalesDetailContent";

interface SalesDetailClientProps {
  slug: string;
}

export default function SalesDetailClient({ slug }: SalesDetailClientProps) {
  const { sales, isLoading, error, fetchSalesDetail } = useSalesDetailStore();

  useEffect(() => {
    if (slug && !sales[slug]) {
      fetchSalesDetail(slug);
    }
  }, [slug, sales, fetchSalesDetail]);

  if (isLoading) {
    return <SalesDetailsSkeleton />;
  }

  if (error || !sales[slug]) {
    return <ErrorScreen onReload={() => fetchSalesDetail(slug)} />;
  }

  return <SalesDetailContent sales={sales[slug]} />;
}
