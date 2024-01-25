import {
  BooleanField,
  Datagrid,
  DateField,
  List,
  ReferenceField,
  TextField,
  ReferenceManyField,
  SingleFieldList,
  ChipField,
} from "react-admin";
import { Box, Typography, Grid } from "@mui/material";
import { OrganisationMenu } from "../organisations/organisationMenu";
export const BusinessUnitList = () => (
  <Grid container spacing={2}>
    <Grid item xs={6} sm={2}>
      <OrganisationMenu />
    </Grid>
    <Grid item xs={6} sm={9}>
      <Box>
        <Typography
          sx={{
            fontSize: "28px",
            fontWeight: "600",
            paddingTop: "30px",
            marginBottom: "-20px",
          }}
        >
          {" "}
          Business Units
        </Typography>
      </Box>
      <List>
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="type" />
          <TextField source="country" />
          <BooleanField source="is_head_office" />
          <ReferenceField source="organisationId" reference="organisations" />
          <ReferenceManyField
            label="Addresses"
            reference="addresses"
            target="businessUnitId"
          >
            <SingleFieldList>
              <ChipField source="street_address" />
            </SingleFieldList>
          </ReferenceManyField>
        </Datagrid>
      </List>
    </Grid>
    <Grid item xs={6} sm={1}></Grid>
  </Grid>
);
