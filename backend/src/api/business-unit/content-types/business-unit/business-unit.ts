// Interface automatically generated by schemas-to-ts

import { Organisation } from '../../../organisation/content-types/organisation/organisation';
import { Address } from '../../../address/content-types/address/address';
import { Organisation_Plain } from '../../../organisation/content-types/organisation/organisation';
import { Address_Plain } from '../../../address/content-types/address/address';
import { AdminPanelRelationPropertyModification } from '../../../../common/schemas-to-ts/AdminPanelRelationPropertyModification';

export interface BusinessUnit {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    name?: string;
    organisationId?: { data: Organisation };
    type?: string;
    country?: string;
    isHeadOffice?: boolean;
    addresses: { data: Address[] };
  };
}
export interface BusinessUnit_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name?: string;
  organisationId?: Organisation_Plain;
  type?: string;
  country?: string;
  isHeadOffice?: boolean;
  addresses: Address_Plain[];
}

export interface BusinessUnit_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name?: string;
  organisationId?: number;
  type?: string;
  country?: string;
  isHeadOffice?: boolean;
  addresses: number[];
}

export interface BusinessUnit_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name?: string;
  organisationId?: AdminPanelRelationPropertyModification<Organisation_Plain>;
  type?: string;
  country?: string;
  isHeadOffice?: boolean;
  addresses: AdminPanelRelationPropertyModification<Address_Plain>;
}