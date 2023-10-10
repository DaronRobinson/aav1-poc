// Interface automatically generated by schemas-to-ts

import { Media } from '../../../common/schemas-to-ts/Media';

export interface Logo {
  logoImg: { data: Media };
  logoText?: string;
}
export interface Logo_Plain {
  logoImg: Media;
  logoText?: string;
}

export interface Logo_NoRelations {
  logoImg: number;
  logoText?: string;
}
