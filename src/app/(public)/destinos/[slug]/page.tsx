import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Surface } from "@/components/shared/surface";
import { TourDetailGallery } from "@/components/tours/tour-detail-gallery";
import { TourDetailInfo } from "@/components/tours/tour-detail-info";
import { TourBookingSidebar } from "@/components/tours/tour-booking-sidebar";
import { getTourBySlug, getAllSlugs } from "@/data/tours";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return { title: "Tour no encontrado" };

  return {
    title: tour.title,
    description: tour.subtitle,
  };
}

export default async function TourDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) notFound();

  return (
    <Surface level={1} className="py-8 px-4 min-h-screen">
      <div className="container mx-auto">
        <Link href="/destinos">
          <Button variant="ghost" size="sm" className="mb-6 gap-1.5">
            <ArrowLeft className="h-4 w-4" />
            Volver a Tours
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <TourDetailGallery images={tour.images} title={tour.title} />
            <TourDetailInfo tour={tour} />
          </div>
          <div>
            <TourBookingSidebar tour={tour} />
          </div>
        </div>
      </div>
    </Surface>
  );
}
