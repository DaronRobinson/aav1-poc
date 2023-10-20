// Interface automatically generated by schemas-to-ts

import { Assurance } from '../../../assurance/content-types/assurance/assurance';
import { AssuranceField } from '../../../../components/repeating/interfaces/AssuranceField';
import { Organisation } from '../../../organisation/content-types/organisation/organisation';
import { Assurance_Plain } from '../../../assurance/content-types/assurance/assurance';
import { AssuranceField_Plain } from '../../../../components/repeating/interfaces/AssuranceField';
import { Organisation_Plain } from '../../../organisation/content-types/organisation/organisation';
import { AssuranceField_NoRelations } from '../../../../components/repeating/interfaces/AssuranceField';
import { AdminPanelRelationPropertyModification } from '../../../../common/schemas-to-ts/AdminPanelRelationPropertyModification';

export interface Engagement {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    assurance?: { data: Assurance };
    engagementFields: AssuranceField[];
    organisation?: { data: Organisation };
  };
}
export interface Engagement_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  assurance?: Assurance_Plain;
  engagementFields: AssuranceField_Plain[];
  organisation?: Organisation_Plain;
}

export interface Engagement_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  assurance?: number;
  engagementFields: AssuranceField_NoRelations[];
  organisation?: number;
}

export interface Engagement_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  assurance?: AdminPanelRelationPropertyModification<Assurance_Plain>;
  engagementFields: AssuranceField_Plain[];
  organisation?: AdminPanelRelationPropertyModification<Organisation_Plain>;
}
