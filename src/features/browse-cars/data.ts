import type { Vehicle } from "./types";

const placeholderImage = "/images/trusted-car-hero-placeholder.png";

export const vehicles: Vehicle[] = [
  { id: "hyundai-creta-2021", name: "2021 Hyundai Creta SX", make: "Hyundai", model: "Creta", price: 1240000, year: 2021, kilometres: 42800, fuel: "Petrol", transmission: "Automatic", bodyType: "SUV", city: "Chennai", inspectionScore: 96, images: [{ src: placeholderImage, alt: "2021 Hyundai Creta SX in graphite grey" }] },
  { id: "honda-city-2022", name: "2022 Honda City ZX", make: "Honda", model: "City", price: 1385000, year: 2022, kilometres: 26300, fuel: "Petrol", transmission: "Automatic", bodyType: "Sedan", city: "Bengaluru", inspectionScore: 94, images: [{ src: placeholderImage, alt: "2022 Honda City ZX in pearl white" }] },
  { id: "tata-nexon-2023", name: "2023 Tata Nexon Fearless", make: "Tata", model: "Nexon", price: 1190000, year: 2023, kilometres: 18400, fuel: "Petrol", transmission: "Manual", bodyType: "SUV", city: "Mumbai", inspectionScore: 97, images: [{ src: placeholderImage, alt: "2023 Tata Nexon Fearless in red" }] },
  { id: "maruti-baleno-2022", name: "2022 Maruti Baleno Alpha", make: "Maruti", model: "Baleno", price: 835000, year: 2022, kilometres: 31600, fuel: "Petrol", transmission: "Automatic", bodyType: "Hatchback", city: "Pune", inspectionScore: 93, images: [{ src: placeholderImage, alt: "2022 Maruti Baleno Alpha in blue" }] },
  { id: "mahindra-xuv700-2022", name: "2022 Mahindra XUV700 AX7", make: "Mahindra", model: "XUV700", price: 2075000, year: 2022, kilometres: 28700, fuel: "Diesel", transmission: "Automatic", bodyType: "SUV", city: "Hyderabad", inspectionScore: 95, images: [{ src: placeholderImage, alt: "2022 Mahindra XUV700 AX7 in black" }] },
  { id: "hyundai-ioniq-2023", name: "2023 Hyundai Ioniq 5", make: "Hyundai", model: "Ioniq 5", price: 3980000, year: 2023, kilometres: 12200, fuel: "Electric", transmission: "Automatic", bodyType: "SUV", city: "Delhi", inspectionScore: 98, images: [{ src: placeholderImage, alt: "2023 Hyundai Ioniq 5 in matte silver" }] },
];
