import { DateInput, Edit, ReferenceInput, SimpleForm, TextInput, WrapperField, TextField, ReferenceField, BooleanInput, AutocompleteInput } from 'react-admin';
import {
  Box,
  Typography,
} from '@mui/material';
export const BusinessUnitEdit = () => (
  <Box sx={{ width: "66%", margin: "0 auto" }}>
    <Box><Typography sx={{ fontSize: '28px', fontWeight: '600', paddingTop: '24px', marginBottom: "-10px" }}> Edit Business Unit</Typography></Box>
  <Edit>
      <SimpleForm sx={{ padding: "30px 50px" }}>
        <WrapperField >
          <Box sx={{  fontSize: "15px" }}>ID: <TextField source="id" label="ID" /></Box>
          <Box sx={{ paddingBottom: "30px", fontSize:"15px" }}>Organisation: <ReferenceField source="organisationId" reference="organisations" /></Box>
        </WrapperField>
        <TextInput source="name" sx={{ width: "100%" }} />
        <TextInput source="type" sx={{ width: "100%" }} />
        <TextInput source="country" sx={{ width: "100%" }} />
        <BooleanInput source="isHeadOffice" />
        <ReferenceInput source="addresses" reference="addresses"  >
          <AutocompleteInput label="Addresses" sx={{ width: "100%" }} />
        </ReferenceInput>
        <span>^ Not the right widget here : We need the enterprise version to support <strong>one-to-many</strong> relationships in the form easily</span><br />
    </SimpleForm>
    </Edit>
  </Box>
);