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
import { AssuranceMenu } from "./assuranceMenu";
import TitleBar from "../../components/titleBar";

export const StrategicAnalysis = () => {
  const { id } = useParams();
  const { data, isLoading, error, refetch } = useGetOne("assurances", { id });
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} sm={2}>
        <AssuranceMenu />
      </Grid>
      <Grid item xs={6} sm={9}>
        {" "}
        <Box>
          <TitleBar title="Edit Strategic Analysis" itemName={data.name} />
          <Edit>
            <SimpleForm sx={{ padding: "30px 50px" }}>
              <p>Analysis here</p>
            </SimpleForm>
          </Edit>
        </Box>
      </Grid>
      <Grid item xs={6} sm={1}></Grid>
    </Grid>
  );
};
