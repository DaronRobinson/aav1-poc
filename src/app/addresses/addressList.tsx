import {
  BooleanField,
  Datagrid,
  DateField,
  List,
  NumberField,
  ReferenceField,
  TextField,
} from "react-admin";
import { Box, Typography, Grid } from "@mui/material";
import { OrganisationMenu } from "../organisations/organisationMenu";
export const AddressList = () => (
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
            paddingTop: "24px",
            marginBottom: "-20px",
          }}
        >
          {" "}
          Addresses
        </Typography>
      </Box>
      <List>
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="street_address" />
          <TextField source="suburb" />
          <TextField source="city" />
          <TextField source="state_or_province" />
          <TextField source="post_code" />
          <TextField source="country" />
          <BooleanField source="is_primary_address" />
          <ReferenceField source="businessUnitId" reference="business_units" />
        </Datagrid>
      </List>
    </Grid>
    <Grid item xs={6} sm={1}></Grid>
  </Grid>
);
