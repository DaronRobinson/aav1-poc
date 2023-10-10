import { BusinessUnit } from "../schemas";
import { timestamps } from "./lib";

export const businessUnits: BusinessUnit[] = [
  {
    id: "B-1",
    organisationId: "O-125",
    addressId: "A-4",
    name: "Head Office",
    type: "Office Activities",
    country: "New Zealand",
    isHeadOffice: true,
    ...timestamps,
  },
  {
    id: "B-2",
    organisationId: "O-124",
    addressId: "A-1",
    name: "Pine Seedling Nursery",
    type: "Production Facility",
    country: "New Zealand",
    isHeadOffice: false,
    ...timestamps,
  },
  {
    id: "B-3",
    organisationId: "O-123",
    addressId: "A-2",
    name: "Airline Head Office",
    type: "Office Activities",
    country: "New Zealand",
    isHeadOffice: true,
    ...timestamps,
  },
  {
    id: "B-4",
    organisationId: "O-126",
    addressId: "A-3",
    name: "Manufacturing Facility",
    type: "Manufacturing",
    country: "New Zealand",
    isHeadOffice: true,
    ...timestamps,
  },
];


