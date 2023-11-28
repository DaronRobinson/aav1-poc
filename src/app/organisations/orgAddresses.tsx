import { useParams } from "react-router-dom";
import { List, Datagrid, TextField, Edit, SimpleForm } from "react-admin";
import { Box, Typography } from "@mui/material";
import { OrganisationMenu } from "./organisationMenu";
import SideMenuLayout from "../../components/sideMenuLayout";

export const OrgAddresses = () => {
  const { id } = useParams();
  return (
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
            Addresses of: Organisation Name
          </Typography>
        </Box>
        <Edit>
          <SimpleForm sx={{ padding: "30px 50px" }}>
            <p>Some addresses here</p>
          </SimpleForm>
        </Edit>
      </Box>
    </SideMenuLayout>
  );
};
