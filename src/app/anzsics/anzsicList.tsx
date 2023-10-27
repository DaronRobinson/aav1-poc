import { Datagrid, DateField, List, TextField } from 'react-admin';
import {
  Box,
  Typography,
} from '@mui/material';
export const AnzsicList = () => (
  <div>
    <Box><Typography sx={{ fontSize: '28px', fontWeight: '600', paddingTop: '30px', marginBottom: "-20px" }}> Anzsic Codes</Typography></Box>
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="division" />
      <TextField source="code" />
      <TextField source="divisionCode" />
      <TextField source="subdivision" />
      <TextField source="group" />
      <TextField source="class" />
      <TextField source="label" />
      <TextField source="risk" />
      <TextField source="emissionData" />
    </Datagrid>
    </List>
    </div>
);