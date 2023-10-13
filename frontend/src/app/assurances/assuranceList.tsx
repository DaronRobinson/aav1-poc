import { Datagrid, DateField, List, ReferenceArrayField, ReferenceField, TextField } from 'react-admin';
import {
    Box,
    Typography,
} from '@mui/material';
export const AssuranceList = () => (
    <div>
        <Box><Typography sx={{ fontSize: '28px', fontWeight: '600', paddingTop: '30px', marginBottom: "-20px" }}> Engagements</Typography></Box>
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <DateField source="auditDate" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
            <TextField source="certificationProgramme" />
            <TextField source="auditObjectives" />
            <TextField source="auditCriteria" />
            <TextField source="scope" />
            <TextField source="reportingYearStartDate" label="Start Date"/>
            <TextField source="reportingYearEndDate" label="End Date" />
            <TextField source="auditType" />
            <TextField source="geographicalBoundaries" />
            <TextField source="statementOfIntent" />
            <TextField source="status" />
            <ReferenceField source="organisationId" reference="organisations" />
        </Datagrid>
    </List>
 </div>
);