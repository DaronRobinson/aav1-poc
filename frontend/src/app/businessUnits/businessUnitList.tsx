
import { BooleanField, Datagrid, DateField, List, ReferenceField, TextField, ReferenceManyField , SingleFieldList, ChipField} from 'react-admin';
import {
  Box,
  Typography,
} from '@mui/material';
export const BusinessUnitList = () => (
  <div>
    <Box><Typography sx={{ fontSize: '28px', fontWeight: '600', paddingTop: '30px', marginBottom: "-20px" }}> Business Units</Typography></Box>
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <DateField source="publishedAt" />
      <TextField source="type" />
      <TextField source="country" />
      <BooleanField source="isHeadOffice" />
        <ReferenceField source="organisationId" reference="organisations"/>
      <ReferenceManyField label="Addresses" reference="addresses" target="businessUnitId">
        <SingleFieldList>
          <ChipField source="streetAddress" />
        </SingleFieldList>
      </ReferenceManyField>
    </Datagrid>
    </List>
    </div>
);