import { Menu } from 'react-admin';
import { useParams } from 'react-router-dom';

import LabelIcon from '@mui/icons-material/Label';
import EditIcon from '@mui/icons-material/Edit';
import ViewListIcon from '@mui/icons-material/ViewList';

export const AssuranceMenu = () => {
  const { id } = useParams();
  return (<Menu sx={{paddingTop:"20px"}}>

    <Menu.Item to={`/assurances`} primaryText="Engagements" leftIcon={<ViewListIcon />} >
      <Menu.ResourceItem name="assurances" />
    </Menu.Item>
    <Menu.Item to={`/assurances/${id}/strategic-analysis`} primaryText="Strategic Analysis" leftIcon={<ViewListIcon />} />
    <Menu.Item to={`/assurances/${id}/site-visit`} primaryText="Site Visit" leftIcon={<ViewListIcon />} />
    <Menu.Item to={`/assurances/${id}/risk-assessment`} primaryText="Risk Assessment" leftIcon={<ViewListIcon />} />
    <Menu.Item to={`/assurances/${id}/agenda`} primaryText="Agenda" leftIcon={<ViewListIcon />} />
      <Menu.Item to="/custom-route" primaryText="..and more things" leftIcon={<LabelIcon />} />
    </Menu>
  )
};