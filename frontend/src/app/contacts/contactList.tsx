import { Datagrid, DateField, EmailField, List, ReferenceField, TextField } from 'react-admin';
import {
  Box,
  Typography,
} from '@mui/material';
export const ContactList = () => (
  <div>
    <Box><Typography sx={{ fontSize: '28px', fontWeight: '600', paddingTop: '30px', marginBottom: "-20px" }}> Contacts</Typography></Box>
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />

      <TextField source="firstName" />
      <TextField source="lastName" />
      <EmailField source="email" />
      <TextField source="phone" />
        <TextField source="role" />
        <ReferenceField source="organisationId" reference="organisations" >
          <TextField source="name" />
        </ReferenceField>
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </Datagrid>
    </List>
    </div>
);