import { useParams } from 'react-router-dom';
import { List, Datagrid, TextField, Edit, SimpleForm, useGetOne } from 'react-admin';
import {
  Box,
  Typography,
} from '@mui/material';
import { AssuranceMenu } from './assuranceMenu';
import SideMenuLayout from '../../components/sideMenuLayout';
import TitleBar from '../../components/titleBar';

export const Agenda = () => {
  const { id } = useParams();
  const { data, isLoading, error, refetch } = useGetOne(
    'assurances',
    { id }
  );
  return (
    <SideMenuLayout Menu={<AssuranceMenu />}>
      <Box>
        <TitleBar title="Edit Verification & Validation Agenda" itemName={data.name} />
      <Edit>
        <SimpleForm sx={{ padding: "30px 50px" }}>
          <p>Agenda here</p>
        </SimpleForm>
      </Edit>
    </Box>
    </SideMenuLayout>
  );
};