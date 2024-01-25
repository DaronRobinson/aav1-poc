type Schema = {
  comment: string | null;
  data_type: string;
  default_value: string | null;
  max_length: number | null;
  name: string;
  nullable: boolean;
};

type Options = {
  help_text: string | null;
  placeholder?: string | null;
  reference_data: string | null;
  reference_data_url: string | null;
};

type Meta = {
  note?: string;
  required: boolean;
  options: Options;
};

export type Field = {
  collection?: string;
  field: string;
  meta: Meta;
  schema: Schema;
  type: string;
  notes?: FieldNote[];
};

export type FieldState = {
  id: string;
  field: string;
  status: string;
  user_id: string;
  engagement_id: string;
  date_created: string;
};

export type FieldNote = {
  id: string;
  field: string;
  message: string;
  type: string;
  user_id: string;
  engagement_id: string;
  date_created: string;
};

export type AssuranceFormItemProps = {
  field: Field;
  fieldStates: FieldState[] | undefined;
  fieldNotes: FieldNote[] | undefined;
  refresh: () => void;
};
