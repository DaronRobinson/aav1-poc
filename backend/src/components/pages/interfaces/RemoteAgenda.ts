// Interface automatically generated by schemas-to-ts

import { User } from '../../../common/schemas-to-ts/User';
import { AgendaDay } from '../../../api/agenda-day/content-types/agenda-day/agenda-day';
import { Assurance } from '../../../api/assurance/content-types/assurance/assurance';
import { User_Plain } from '../../../common/schemas-to-ts/User';
import { AgendaDay_Plain } from '../../../api/agenda-day/content-types/agenda-day/agenda-day';
import { Assurance_Plain } from '../../../api/assurance/content-types/assurance/assurance';

export interface RemoteAgenda {
  ResourcesRequired?: string;
  users: { data: User[] };
  agendaDays: { data: AgendaDay[] };
  assurance?: { data: Assurance };
}
export interface RemoteAgenda_Plain {
  ResourcesRequired?: string;
  users: User_Plain[];
  agendaDays: AgendaDay_Plain[];
  assurance?: Assurance_Plain;
}

export interface RemoteAgenda_NoRelations {
  ResourcesRequired?: string;
  users: number[];
  agendaDays: number[];
  assurance?: number;
}
