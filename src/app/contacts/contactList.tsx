import {
  Datagrid,
  DateField,
  EmailField,
  List,
  ReferenceField,
  TextField,
} from "react-admin";
import { Box, Typography, Grid } from "@mui/material";
import { OrganisationMenu } from "../organisations/organisationMenu";
export const ContactList = () => (
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
          Contacts
        </Typography>
      </Box>
      <List>
        <Datagrid rowClick="edit">
          <TextField source="id" />

          <TextField source="first_name" />
          <TextField source="last_name" />
          <EmailField source="email" />
          <TextField source="phone" />
          <TextField source="role" />
          <ReferenceField source="organisationId" reference="organisations">
            <TextField source="name" />
          </ReferenceField>
          <DateField source="createdAt" />
          <DateField source="updatedAt" />
        </Datagrid>
      </List>
    </Grid>
    <Grid item xs={6} sm={1}></Grid>
  </Grid>
);
