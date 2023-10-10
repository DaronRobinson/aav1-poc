// Interface automatically generated by schemas-to-ts

import { Organisation } from '../../../organisation/content-types/organisation/organisation';
import { Organisation_Plain } from '../../../organisation/content-types/organisation/organisation';
import { AdminPanelRelationPropertyModification } from '../../../../common/schemas-to-ts/AdminPanelRelationPropertyModification';

export interface Anzsic {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    division?: string;
    code?: string;
    divisionCode?: string;
    subdivision?: string;
    group?: string;
    class?: string;
    label?: string;
    risk?: string;
    emissionData?: any;
    organisations: { data: Organisation[] };
  };
}
export interface Anzsic_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  division?: string;
  code?: string;
  divisionCode?: string;
  subdivision?: string;
  group?: string;
  class?: string;
  label?: string;
  risk?: string;
  emissionData?: any;
  organisations: Organisation_Plain[];
}

export interface Anzsic_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  division?: string;
  code?: string;
  divisionCode?: string;
  subdivision?: string;
  group?: string;
  class?: string;
  label?: string;
  risk?: string;
  emissionData?: any;
  organisations: number[];
}

export interface Anzsic_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  division?: string;
  code?: string;
  divisionCode?: string;
  subdivision?: string;
  group?: string;
  class?: string;
  label?: string;
  risk?: string;
  emissionData?: any;
  organisations: AdminPanelRelationPropertyModification<Organisation_Plain>;
}
