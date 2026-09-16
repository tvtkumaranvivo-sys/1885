import type { Vehicle } from "@/features/browse-cars/types";

export type OfferStatus = "PENDING" | "ACCEPTED" | "REJECTED" | "COUNTERED" | "EXPIRED" | "CANCELLED";

export type Offer = {
  id: string;
  vehicleId: string;
  amount: number;
  message?: string;
  status: OfferStatus;
  sentAt: string;
  expiresAt: string;
};

export type OfferVehicle = Pick<Vehicle, "id" | "name" | "price" | "kilometres" | "fuel" | "transmission" | "city" | "inspectionScore"> & { image: string };
