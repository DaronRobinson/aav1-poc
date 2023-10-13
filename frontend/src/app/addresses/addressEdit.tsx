import { DateInput, Edit, ReferenceInput, SimpleForm, TextInput, WrapperField, TextField, ReferenceField, BooleanInput } from 'react-admin';
import {
  Box,
  Typography,
} from '@mui/material';
export const AddressEdit = () => (
  <Box sx={{ width: "66%", margin: "0 auto" }}>
    <Box><Typography sx={{ fontSize: '28px', fontWeight: '600', paddingTop: '24px', marginBottom: "-10px" }}> Edit Address</Typography></Box>
  <Edit>
      <SimpleForm sx={{ padding: "30px 50px" }}>
        <WrapperField >
          <Box sx={{  fontSize: "15px" }}>ID: <TextField source="id" label="ID" /></Box>
          <Box sx={{ paddingBottom: "30px", fontSize: "15px" }}>Business Unit: <ReferenceField source="businessUnitId" reference="business-units" /></Box>
        </WrapperField> 
        <TextInput source="streetAddress" sx={{ width: "100%" }} />
        <TextInput source="suburb" sx={{ width: "100%" }} />
        <TextInput source="city" sx={{ width: "100%" }} />
        <TextInput source="stateOrProvince" sx={{ width: "100%" }} />
        <TextInput source="postCode" sx={{ width: "100%" }} />
        <TextInput source="country" sx={{ width: "100%" }} />
        <BooleanInput source="isPrimaryAddress" />
    </SimpleForm>
    </Edit>
  </Box>
);