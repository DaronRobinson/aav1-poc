import { useParams } from "react-router-dom";
import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  useGetOne,
} from "react-admin";
import { Box, Typography, Grid } from "@mui/material";
import { EngagementMenu } from "./engagementMenu";
import TitleBar from "../../components/titleBar";

export const Agenda = () => {
  const { id } = useParams();
  const { data, isLoading, error, refetch } = useGetOne("engagements", { id });
  console.log(data);
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} sm={2}>
        <EngagementMenu />
      </Grid>
      <Grid item xs={6} sm={9}>
        <Box>
          <TitleBar
            title="Edit Verification & Validation Agenda"
            itemName={data && data.name ? data.name : "Agenda"}
          />
          <Edit>
            <SimpleForm sx={{ padding: "30px 50px" }}>
              <p>Agenda here</p>
            </SimpleForm>
          </Edit>
        </Box>
      </Grid>
      <Grid item xs={6} sm={1}></Grid>
    </Grid>
  );
};
