import { notFound } from "next/navigation";
import { CarDetailsPage } from "@/features/car-details/car-details-page";
import { getVehicleDetails } from "@/features/car-details/data";

export default async function CarPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const vehicle = getVehicleDetails(id);
  if (!vehicle) notFound();
  return <CarDetailsPage vehicle={vehicle} />;
}
