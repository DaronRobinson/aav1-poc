import {
  DateInput,
  Edit,
  SimpleForm,
  TextInput,
  TextField,
  WrapperField,
  ReferenceInput,
  AutocompleteInput,
} from "react-admin";
import { Box, Typography } from "@mui/material";
import { OrganisationMenu } from "./organisationMenu";
import SideMenuLayout from "../../components/sideMenuLayout";

export const OrganisationEdit = () => (
  <SideMenuLayout Menu={<OrganisationMenu />}>
    <Box>
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
          Edit Organisation
        </Typography>
      </Box>
      <Edit>
        <SimpleForm sx={{ padding: "30px 50px" }}>
          <WrapperField>
            <Typography>
              ID: <TextField source="id" label="ID" />
            </Typography>
          </WrapperField>
          <TextInput source="name" sx={{ width: "100%" }} />
          <TextInput source="legal_name" sx={{ width: "100%" }} />
          <TextInput source="type" sx={{ width: "100%" }} />
          <TextInput source="highest_parent_company" sx={{ width: "100%" }} />
          <TextInput source="description" multiline sx={{ width: "100%" }} />
          <TextInput
            source="statement_of_intent"
            multiline
            sx={{ width: "100%" }}
          />
          <ReferenceInput source="contacts" reference="contacts">
            <AutocompleteInput label="Contacts" sx={{ width: "100%" }} />
          </ReferenceInput>
          <ReferenceInput
            source="engagements"
            reference="engagements"
            emptyValue={null}
          >
            <AutocompleteInput label="Engagements" sx={{ width: "100%" }} />
          </ReferenceInput>
          <span>
            ^ Not the right widgets: We need the enterprise version to support{" "}
            <strong>one-to-many</strong> relationships in the form easily
          </span>
          <br />
          <ReferenceInput source="anzsicId" reference="anzsics">
            <AutocompleteInput label="Anzsic Code" sx={{ width: "100%" }} />
          </ReferenceInput>
        </SimpleForm>
      </Edit>
    </Box>
  </SideMenuLayout>
);
