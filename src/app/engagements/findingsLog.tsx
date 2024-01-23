import { useParams } from "react-router-dom";
import { List, Datagrid, TextField, DateField, ReferenceField, useGetOne } from "react-admin";
import { Box, Typography, Grid } from "@mui/material";
import { EngagementMenu } from "./engagementMenu";
import TitleBar from "../../components/titleBar";

export const FindingsLog = () => {
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
        {" "}
        <Box>
          <TitleBar title="Findings Log" itemName={engagement.name} />
          <List resource="notes" filter={{ type: "finding", engagement_id: id }}>
            <Datagrid rowClick="show">
              <TextField source="id" />
              <TextField source="field" />
              <DateField source="date_created" />
              <TextField source="message" />
              <TextField source="status" />
              <TextField source="comments" />
              <TextField source="finding_type" />
              <ReferenceField source="user_id" reference="directus_users" />
            </Datagrid>
          </List>
        </Box>
      </Grid>
      <Grid item xs={6} sm={1}></Grid>
    </Grid>
  );
};
