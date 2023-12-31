// Interface automatically generated by schemas-to-ts

import { AgendaItem } from '../../../../components/repeating/interfaces/AgendaItem';
import { Agenda } from '../../../agenda/content-types/agenda/agenda';
import { AgendaItem_Plain } from '../../../../components/repeating/interfaces/AgendaItem';
import { Agenda_Plain } from '../../../agenda/content-types/agenda/agenda';
import { AgendaItem_NoRelations } from '../../../../components/repeating/interfaces/AgendaItem';
import { AdminPanelRelationPropertyModification } from '../../../../common/schemas-to-ts/AdminPanelRelationPropertyModification';

export interface AgendaDay {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    Label?: string;
    Date?: Date;
    AgendaItems: AgendaItem[];
    agenda?: { data: Agenda };
  };
}
export interface AgendaDay_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  Label?: string;
  Date?: Date;
  AgendaItems: AgendaItem_Plain[];
  agenda?: Agenda_Plain;
}

export interface AgendaDay_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  Label?: string;
  Date?: Date;
  AgendaItems: AgendaItem_NoRelations[];
  agenda?: number;
}

export interface AgendaDay_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  Label?: string;
  Date?: Date;
  AgendaItems: AgendaItem_Plain[];
  agenda?: AdminPanelRelationPropertyModification<Agenda_Plain>;
}
