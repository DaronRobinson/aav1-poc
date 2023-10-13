'use client'; // only needed if you choose App Router
import { Datagrid, DateField, List, SimpleList, TextField, ReferenceField, ReferenceManyField, SingleFieldList, ChipField,  } from 'react-admin';
import {
  Box,
  Typography,
} from '@mui/material';

import  CustomChipField from '../../components/customChipField';

export const OrganisationList = () => (
  <div>
    <Box><Typography sx={{fontSize:'28px', fontWeight:'600', paddingTop:'30px', marginBottom:"-20px"}}> Organisations</Typography></Box>
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="legalName" />
      <TextField source="type" />
      <TextField source="highestParentCompany" label="Parent"/>
      <TextField source="description" />
        <TextField source="statementOfIntent" />
        <ReferenceManyField label="Contacts" reference="contacts" target="organisationId">
          <SingleFieldList>
            <ChipField source="firstName" />
          </SingleFieldList>
        </ReferenceManyField>
        <ReferenceField source="anzsicId" reference="anzsics" >
          <TextField source="code" />
        </ReferenceField>
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </Datagrid>
    </List>
  </div>);