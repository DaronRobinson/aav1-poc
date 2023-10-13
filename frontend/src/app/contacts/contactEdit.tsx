import { DateInput, Edit, ReferenceInput, SimpleForm, TextInput, WrapperField, TextField, ReferenceField } from 'react-admin';
import {
  Box,
  Typography,
} from '@mui/material';
export const ContactEdit = () => (
  <Box sx={{ width: "66%", margin: "0 auto" }}>
    <Box><Typography sx={{ fontSize: '28px', fontWeight: '600', paddingTop: '24px', marginBottom: "-10px" }}> Edit Contact</Typography></Box>
  <Edit>
      <SimpleForm sx={{ padding: "30px 50px" }}>
        <WrapperField >
          <Box sx={{  fontSize: "15px" }}>ID: <TextField source="id" label="ID" /></Box>
          <Box sx={{ paddingBottom: "30px", fontSize:"15px" }}>Organisation: <ReferenceField source="organisationId" reference="organisations" /></Box>
        </WrapperField>
        <TextInput source="firstName" sx={{ width: "100%" }} />
        <TextInput source="lastName" sx={{ width: "100%" }} />
        <TextInput source="email" sx={{ width: "100%" }} />
        <TextInput source="phone" type="phone"  sx={{ width: "100%" }} />
        <TextInput source="role" sx={{ width: "100%" }} />
    </SimpleForm>
    </Edit>
  </Box>
);