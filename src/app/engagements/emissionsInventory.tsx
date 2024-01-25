import { useParams } from "react-router-dom";
import { List, Datagrid, TextField, Edit, SimpleForm, useGetOne } from "react-admin";
import { Box, Typography, Grid } from "@mui/material";
import { EngagementMenu } from "./engagementMenu";
import TitleBar from "../../components/titleBar";

export const EmissionsInventory = () => {
  const { id } = useParams();
  const { data, isLoading, error, refetch } = useGetOne("engagements", {
    id,
  });
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} sm={2}>
        <EngagementMenu />
      </Grid>
      <Grid item xs={6} sm={9}>
        {" "}
        <Box>
          <TitleBar title="Emissions Inventory" itemName={data.name} />
          <Edit>
            <SimpleForm sx={{ padding: "30px 50px" }}>
              <p>Inventory here</p>
            </SimpleForm>
          </Edit>
        </Box>
      </Grid>
      <Grid item xs={6} sm={1}></Grid>
    </Grid>
  );
};
