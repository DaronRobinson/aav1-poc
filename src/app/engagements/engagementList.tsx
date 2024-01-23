import { Datagrid, DateField, List, ReferenceArrayField, ReferenceField, TextField } from "react-admin";
import { Box, Typography, Grid } from "@mui/material";
export const EngagementList = () => (
  <Grid container spacing={2}>
    <Grid item xs={6} sm={12}>
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
          Engagements
        </Typography>
      </Box>
      <List>
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <DateField source="auditDate" />
          <TextField source="certificationProgramme" />
          <TextField source="reportingYearStartDate" label="Start Date" />
          <TextField source="reportingYearEndDate" label="End Date" />
          <TextField source="auditType" />
          <TextField source="geographicalBoundaries" />
          <TextField source="statementOfIntent" />
          <TextField source="status" />
          <ReferenceField source="organisationId" reference="organisations" />
        </Datagrid>
      </List>
    </Grid>
    <Grid item xs={6} sm={1}></Grid>
  </Grid>
);
