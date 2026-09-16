import { vehicles } from "@/features/browse-cars/data";
import type { Offer, OfferVehicle } from "./types";

export const sampleOffer: Offer = { id: "TC-OFR-000124", vehicleId: "hyundai-creta-2021", amount: 1180000, status: "PENDING", sentAt: "Sample date/time", expiresAt: "48 hours from sample submission" };

export function getOfferVehicle(id: string): OfferVehicle | undefined {
  const vehicle = vehicles.find((item) => item.id === id);
  if (!vehicle) return undefined;
  return { id: vehicle.id, name: vehicle.name, price: vehicle.price, kilometres: vehicle.kilometres, fuel: vehicle.fuel, transmission: vehicle.transmission, city: vehicle.city, inspectionScore: vehicle.inspectionScore, image: vehicle.images[0]?.src ?? "" };
}
