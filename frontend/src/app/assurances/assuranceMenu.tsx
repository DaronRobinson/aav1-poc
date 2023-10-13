import { Menu } from 'react-admin';
import { useParams } from 'react-router-dom';

import LabelIcon from '@mui/icons-material/Label';
import EditIcon from '@mui/icons-material/Edit';

export const AssuranceMenu = () => {
  const { id } = useParams();
  return (<Menu sx={{paddingTop:"20px"}}>
    <Menu.Item to={`/assurances/${id}`} primaryText="Engagement" leftIcon={<LabelIcon />} />
    <Menu.Item to={`/assurances/${id}/strategic-analysis`} primaryText="Strategic Analysis" leftIcon={<LabelIcon />} />
    <Menu.Item to={`/assurances/${id}/site-visit`} primaryText="Site Visit" leftIcon={<LabelIcon />} />
    <Menu.Item to={`/assurances/${id}/risk-assessment`} primaryText="Risk Assessment" leftIcon={<LabelIcon />} />
    <Menu.Item to={`/assurances/${id}/agenda`} primaryText="Agenda" leftIcon={<LabelIcon />} />
      <Menu.Item to="/custom-route" primaryText="..and more things" leftIcon={<LabelIcon />} />
    </Menu>
  )
};