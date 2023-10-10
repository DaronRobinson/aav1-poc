// Interface automatically generated by schemas-to-ts

import { Button } from '../../links/interfaces/Button';
import { Button_Plain } from '../../links/interfaces/Button';
import { Button_NoRelations } from '../../links/interfaces/Button';

export interface LeadForm {
  title?: string;
  emailPlaceholder?: string;
  submitButton?: Button;
  location?: string;
  description?: string;
}
export interface LeadForm_Plain {
  title?: string;
  emailPlaceholder?: string;
  submitButton?: Button_Plain;
  location?: string;
  description?: string;
}

export interface LeadForm_NoRelations {
  title?: string;
  emailPlaceholder?: string;
  submitButton?: Button_NoRelations;
  location?: string;
  description?: string;
}

