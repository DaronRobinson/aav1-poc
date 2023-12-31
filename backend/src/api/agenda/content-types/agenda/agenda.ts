// Interface automatically generated by schemas-to-ts

import { Assurance } from '../../../assurance/content-types/assurance/assurance';
import { AgendaDay } from '../../../agenda-day/content-types/agenda-day/agenda-day';
import { Assurance_Plain } from '../../../assurance/content-types/assurance/assurance';
import { AgendaDay_Plain } from '../../../agenda-day/content-types/agenda-day/agenda-day';
import { AdminPanelRelationPropertyModification } from '../../../../common/schemas-to-ts/AdminPanelRelationPropertyModification';

export enum Type {
  Remote = 'remote',
  OnSite = 'onSite',}

export interface Agenda {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    requiredResouces?: string;
    type?: Type;
    assurance?: { data: Assurance };
    agendaDays: { data: AgendaDay[] };
  };
}
export interface Agenda_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  requiredResouces?: string;
  type?: Type;
  assurance?: Assurance_Plain;
  agendaDays: AgendaDay_Plain[];
}

export interface Agenda_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  requiredResouces?: string;
  type?: Type;
  assurance?: number;
  agendaDays: number[];
}

export interface Agenda_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  requiredResouces?: string;
  type?: Type;
  assurance?: AdminPanelRelationPropertyModification<Assurance_Plain>;
  agendaDays: AdminPanelRelationPropertyModification<AgendaDay_Plain>;
}
