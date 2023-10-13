import { BooleanField, Datagrid, DateField, List, ReferenceField, TextField } from 'react-admin';
import {
  Box,
  Typography,
} from '@mui/material';
export const AddressList = () => (
  <div>
    <Box><Typography sx={{ fontSize: '28px', fontWeight: '600', paddingTop: '24px', marginBottom: "-20px" }}> Addresses</Typography></Box>
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="streetAddress" />
      <TextField source="suburb" />
      <TextField source="city" />
      <TextField source="stateOrProvince" />
      <DateField source="postCode" />
      <TextField source="country" />
      <BooleanField source="isPrimaryAddress" />
      <ReferenceField source="businessUnitId" reference="business-units" />
    </Datagrid>
    </List>
    </div>
);