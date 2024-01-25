import { DateField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const NoteShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="user_created" />
      <DateField source="date_created" />
      <TextField source="user_updated" />
      <TextField source="date_updated" />
      <ReferenceField source="engagement_id" reference="engagements" />
      <TextField source="field" />
      <TextField source="type" />
      <TextField source="message" />
      <TextField source="status" />
      <TextField source="comments" />
      <TextField source="finding_type" />
    </SimpleShowLayout>
  </Show>
);
