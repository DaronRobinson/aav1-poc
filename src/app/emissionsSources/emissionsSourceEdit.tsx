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
import { Box, Typography } from "@mui/material";
export const EmissionsSourceEdit = () => (
  <Box sx={{ width: "66%", margin: "0 auto" }}>
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
        Edit Emissions Source
      </Typography>
    </Box>
    <Edit>
      <SimpleForm sx={{ padding: "30px 50px" }}>
        <WrapperField>
          <Box sx={{ paddingBottom: "30px", fontSize: "15px" }}>
            ID: <TextField source="id" label="ID" />
          </Box>
        </WrapperField>
        <TextInput source="division" sx={{ width: "100%" }} />
        <TextInput source="code" sx={{ width: "100%" }} />
        <TextInput source="division_code" sx={{ width: "100%" }} />
        <TextInput source="subdivision" sx={{ width: "100%" }} />
        <TextInput source="group" sx={{ width: "100%" }} />
        <TextInput source="class" sx={{ width: "100%" }} />
        <TextInput source="label" sx={{ width: "100%" }} />
        <TextInput source="risk" sx={{ width: "100%" }} />
        <TextInput source="emission_data" sx={{ width: "100%" }} />
      </SimpleForm>
    </Edit>
  </Box>
);
