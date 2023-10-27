'use client'; // only needed if you choose App Router
import { Datagrid, DateField, List, SimpleList, TextField, ReferenceField, ReferenceManyField, SingleFieldList, ChipField,  } from 'react-admin';
import {
  Box,
  Typography,
  Grid,
} from '@mui/material';
import { OrganisationMenu } from './organisationMenu';
import  CustomChipField from '../../components/customChipField';

export const OrganisationList = () => (
  <Grid container spacing={2}>
    <Grid item xs={6} sm={2}>
      <OrganisationMenu />
    </Grid>
    <Grid item xs={6} sm={9}>    <Box><Typography sx={{fontSize:'28px', fontWeight:'600', paddingTop:'30px', marginBottom:"-20px"}}> Organisations</Typography></Box>
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="legalName" />
      <TextField source="type" />
      <TextField source="highestParentCompany" label="Parent"/>
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
    </Grid>
    <Grid item xs={6} sm={1}>
    </Grid>
  </Grid>
  );