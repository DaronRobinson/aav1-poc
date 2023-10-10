import { Event } from "../schemas";
import { timestamps } from "./lib";

export const events: Event[] = [
  {
    id: 1,
    message: "Storms this week.",
    severity: "error",
    dismissible: true,
    postDate: new Date("2022-01-01T00:00:00.000Z"),
    expiryDate: new Date("2022-01-31T00:00:00.000Z"),
    userId: 1,
    companyId: null,
    agentId: null,
    preferredPlantId: 1,
    dismissed: false,
    ...timestamps,
  },
];
