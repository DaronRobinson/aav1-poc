// Interface automatically generated by schemas-to-ts

import { ButtonLink } from '../../links/interfaces/ButtonLink';
import { ButtonLink_Plain } from '../../links/interfaces/ButtonLink';
import { ButtonLink_NoRelations } from '../../links/interfaces/ButtonLink';

export interface BottomActions {
  title?: string;
  buttons: ButtonLink[];
  description?: string;
}
export interface BottomActions_Plain {
  title?: string;
  buttons: ButtonLink_Plain[];
  description?: string;
}

export interface BottomActions_NoRelations {
  title?: string;
  buttons: ButtonLink_NoRelations[];
  description?: string;
}
