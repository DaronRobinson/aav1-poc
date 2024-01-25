import { useParams } from "react-router-dom";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  NumberField,
  ReferenceField,
  useGetOne,
  SearchInput,
  TextInput,
  SelectInput,
} from "react-admin";
import { Box, Typography, Grid } from "@mui/material";
import { EngagementMenu } from "../engagements/engagementMenu";
import TitleBar from "../../components/titleBar";
import { StatusField } from "../../components/statusField";

const inventoryFilters = [
  <SearchInput source="q" alwaysOn />,
  <SelectInput
    label="Status"
    source="status"
    choices={[
      { id: "pending", name: "Pending" },
      { id: "investigating", name: "Investigating" },
      { id: "with_client", name: "With Client" },
      { id: "revised", name: "Revised" },
      { id: "verified", name: "Verified" },
      { id: "modified", name: "Modified" },
    ]}
  />,
];

export const EmissionsInventory = () => {
  const { id } = useParams();
  const {
    data: engagement,
    isLoading,
    error,
    refetch,
  } = useGetOne("engagements", {
    id,
  });
  if (!engagement) return null;
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} sm={2}>
        <EngagementMenu />
      </Grid>
      <Grid item xs={6} sm={9}>
        <Box>
          <TitleBar title="Emissions Inventory" itemName={engagement.name} />
          <List resource="emissions_sources" filter={{ engagement: id }} filters={inventoryFilters}>
            <Datagrid rowClick="show">
              <StatusField source="status" />
              {/* <DateField source="date_updated" /> */}
              {/* <ReferenceField source="user_assigned" reference="directus_users" /> */}
              {/* <ReferenceField source="organisation" reference="organisations" /> */}
              <ReferenceField source="business_unit" reference="business_units" />
              <TextField source="activity" />
              <TextField source="activity_description" />
              <TextField source="category" />
              <TextField source="subcategory" />
              <TextField source="scope" />
              <NumberField source="quantity" />
              <TextField source="unit" />
              <NumberField source="ef" label="Emissions factor" />
              <NumberField source="tCO2e" label="tCO2e" />
            </Datagrid>
          </List>
        </Box>
      </Grid>
      <Grid item xs={6} sm={1}></Grid>
    </Grid>
  );
};
