import { Address } from "../schemas";
import { timestamps } from "./lib";

export const addresses: Address[] = [
  {
    id: "A-1",
    businessUnitId: "B-2",
    isPrimaryAddress: true,
    streetAddress: "472 Mangatarata Road",
    suburb: "Waipukurau",
    city: "Wairarapa",
    stateOrProvince: "Wellington",
    postCode: "3456",
    country: "New Zealand",
    ...timestamps,
  },
  {
    id: "A-2",
    businessUnitId: "B-3",
    isPrimaryAddress: true,
    streetAddress: "44 Queen Street",
    suburb: "Auckland Central",
    city: "Auckland",
    stateOrProvince: "Auckland",
    postCode: "1023",
    country: "New Zealand",
    ...timestamps,
  },
  {
    id: "A-3",
    businessUnitId: "B-4",
    isPrimaryAddress: true,
    streetAddress: "512 Adelaide Road",
    suburb: "Newtown",
    city: "Wellington",
    stateOrProvince: "Wellington",
    postCode: "3456",
    country: "New Zealand",
    ...timestamps,
  },
  {
    id: "A-4",
    businessUnitId: "B-1",
    isPrimaryAddress: true,
    streetAddress: "5 Rangatira Place",
    suburb: "Masterton",
    city: "Masterton",
    stateOrProvince: "Wellington",
    postCode: "5810",
    country: "New Zealand",
    ...timestamps,
  }
];
