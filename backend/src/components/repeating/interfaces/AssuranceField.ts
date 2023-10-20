// Interface automatically generated by schemas-to-ts

import { Note } from '../../../api/note/content-types/note/note';
import { DataEntry } from '../../../api/data-entry/content-types/data-entry/data-entry';
import { Reference } from '../../../api/reference/content-types/reference/reference';
import { OptionSet } from '../../../api/option-set/content-types/option-set/option-set';
import { Note_Plain } from '../../../api/note/content-types/note/note';
import { DataEntry_Plain } from '../../../api/data-entry/content-types/data-entry/data-entry';
import { Reference_Plain } from '../../../api/reference/content-types/reference/reference';
import { OptionSet_Plain } from '../../../api/option-set/content-types/option-set/option-set';

export enum Status {
  Pending = 'pending',
  Completed = 'completed',
  Approved = 'approved',}
export enum Type {
  Text = 'text',
  Number = 'number',
  Boolean = 'boolean',
  Email = 'email',
  Phone = 'phone',
  DatePicker = 'datePicker',
  DateTimePicker = 'dateTimePicker',
  Select = 'select',
  MultiSelect = 'multiSelect',
  RadioButton = 'radioButton',}

export interface AssuranceField {
  name?: string;
  label?: string;
  validation?: string;
  helpText?: string;
  status?: Status;
  placeHolder?: string;
  notes: { data: Note[] };
  dataEntry?: { data: DataEntry };
  references: { data: Reference[] };
  value?: string;
  type?: Type;
  optionSet?: { data: OptionSet };
}
export interface AssuranceField_Plain {
  name?: string;
  label?: string;
  validation?: string;
  helpText?: string;
  status?: Status;
  placeHolder?: string;
  notes: Note_Plain[];
  dataEntry?: DataEntry_Plain;
  references: Reference_Plain[];
  value?: string;
  type?: Type;
  optionSet?: OptionSet_Plain;
}

export interface AssuranceField_NoRelations {
  name?: string;
  label?: string;
  validation?: string;
  helpText?: string;
  status?: Status;
  placeHolder?: string;
  notes: number[];
  dataEntry?: number;
  references: number[];
  value?: string;
  type?: Type;
  optionSet?: number;
}

