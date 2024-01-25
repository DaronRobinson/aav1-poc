import {
  DateInput,
  Edit,
  ReferenceInput,
  SimpleForm,
  TextInput,
  WrapperField,
  TextField,
  ReferenceField,
} from "react-admin";
import { Box, Typography, Grid } from "@mui/material";
import { OrganisationMenu } from "../organisations/organisationMenu";
export const ContactEdit = () => (
  <Grid container spacing={2}>
    <Grid item xs={6} sm={2}>
      <OrganisationMenu />
    </Grid>
    <Grid item xs={6} sm={9}>
      {" "}
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
          Edit Contact
        </Typography>
      </Box>
      <Edit>
        <SimpleForm sx={{ padding: "30px 50px" }}>
          <WrapperField>
            <Box sx={{ fontSize: "15px" }}>
              ID: <TextField source="id" label="ID" />
            </Box>
            <Box sx={{ paddingBottom: "30px", fontSize: "15px" }}>
              Organisation:{" "}
              <ReferenceField
                source="organisationId"
                reference="organisations"
              />
            </Box>
          </WrapperField>
          <TextInput source="first_name" sx={{ width: "100%" }} />
          <TextInput source="last_name" sx={{ width: "100%" }} />
          <TextInput source="email" sx={{ width: "100%" }} />
          <TextInput source="phone" type="phone" sx={{ width: "100%" }} />
          <TextInput source="role" sx={{ width: "100%" }} />
        </SimpleForm>
      </Edit>
    </Grid>
    <Grid item xs={6} sm={1}></Grid>
  </Grid>
);
