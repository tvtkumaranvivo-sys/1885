export type VehicleImage = {
  src: string;
  alt: string;
};

export type Vehicle = {
  id: string;
  name: string;
  make: string;
  model: string;
  price: number;
  year: number;
  kilometres: number;
  fuel: "Petrol" | "Diesel" | "Electric";
  transmission: "Automatic" | "Manual";
  bodyType: "SUV" | "Sedan" | "Hatchback";
  city: string;
  inspectionScore: number;
  images: VehicleImage[];
};

export type VehicleFilters = {
  location: string;
  price: string;
  make: string;
  model: string;
  year: string;
  kilometres: string;
  fuel: string;
  transmission: string;
  bodyType: string;
};

export const emptyFilters: VehicleFilters = {
  location: "", price: "", make: "", model: "", year: "", kilometres: "", fuel: "", transmission: "", bodyType: "",
};
