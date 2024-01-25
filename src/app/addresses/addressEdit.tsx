import {
  DateInput,
  Edit,
  ReferenceInput,
  SimpleForm,
  TextInput,
  WrapperField,
  TextField,
  ReferenceField,
  BooleanInput,
} from "react-admin";
import { Box, Typography, Grid } from "@mui/material";
import { OrganisationMenu } from "../organisations/organisationMenu";
export const AddressEdit = () => (
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
            marginBottom: "-10px",
          }}
        >
          {" "}
          Edit Address
        </Typography>
      </Box>
      <Edit>
        <SimpleForm sx={{ padding: "30px 50px" }}>
          <WrapperField>
            <Box sx={{ fontSize: "15px" }}>
              ID: <TextField source="id" label="ID" />
            </Box>
            <Box sx={{ paddingBottom: "30px", fontSize: "15px" }}>
              Business Unit:{" "}
              <ReferenceField
                source="businessUnitId"
                reference="business_units"
              />
            </Box>
          </WrapperField>
          <TextInput source="street_address" sx={{ width: "100%" }} />
          <TextInput source="suburb" sx={{ width: "100%" }} />
          <TextInput source="city" sx={{ width: "100%" }} />
          <TextInput source="state_or_province" sx={{ width: "100%" }} />
          <TextInput source="post_code" sx={{ width: "100%" }} />
          <TextInput source="country" sx={{ width: "100%" }} />
          <BooleanInput source="is_primary_address" />
        </SimpleForm>
      </Edit>
    </Grid>
    <Grid item xs={6} sm={1}></Grid>
  </Grid>
);
