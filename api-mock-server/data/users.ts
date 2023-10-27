import { User } from "../schemas";
import { timestamps } from "./lib";

export const users: User[] = [
  {
    id: "U-1",
    firstName: "Jim",
    lastName: "Parata",
    email: "lead-auditor@toitu.co.nz",
    password: "password",
    role: "lead-auditor",
    lastLogin: new Date(),
    ...timestamps,
  },
  {
    id: "U-2",
    firstName: "Sarah",
    lastName: "McDonald",
    email: "reviewer@toitu.co.nz",
    password: "password",
    role: "reviewer",
    lastLogin: new Date(),
    ...timestamps,
  },
  {
    id: "U-3",
    firstName: "Aisha",
    lastName: "Bahri",
    email: "auditor@toitu.co.nz",
    password: "password",
    role: "auditor",
    lastLogin: new Date(),
    ...timestamps,
  }
];

