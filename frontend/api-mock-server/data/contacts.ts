import { Contact } from "../schemas";
import { timestamps } from "./lib";

export const contacts: Contact[] = [
  {
    id: "C-1",
    organisationId: "O-123",
    firstName: "Jim",
    lastName: "Mitchell",
    email: "jim@ecofly.co.nz",
    phone: "+6421778654",
    role: "CEO",
    ...timestamps,
  },
  {
    id: "C-2",
    organisationId: "O-124",
    firstName: "John",
    lastName: "Hohepa",
    email: "j.hohepa@forestenterprises.co.nz",
    phone: "+64215674565",
    role: "Nursery Manager",
    ...timestamps,
  },
  {
    id: "C-3",
    organisationId: "O-125",
    firstName: "Susan",
    lastName: "Mason",
    email: "s.mason@forestenterprises.co.nz",
    phone: "+6421445678",
    role: "Lead Operations Officer",
    ...timestamps,
  },
  {
    id: "C-4",
    organisationId: "O-126",
    firstName: "Brittany",
    lastName: "Carmicheal",
    email: "brittany@carmichealextrusions.co.nz",
    phone: "+64212345678",
    role: "Office Manager",
    ...timestamps,
  }
];
