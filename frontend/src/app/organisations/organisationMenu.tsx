import { Menu } from 'react-admin';
import { useParams } from 'react-router-dom';

import LabelIcon from '@mui/icons-material/Label';
import EditIcon from '@mui/icons-material/Edit';
import ViewListIcon from '@mui/icons-material/ViewList';

export const OrganisationMenu = () => {
  const { id } = useParams();
  return (<Menu sx={{paddingTop:"20px"}}>
    <Menu.ResourceItem name="organisations" />

    <Menu.Item to={`/business-units`} primaryText="Business Units" leftIcon={<ViewListIcon />} >
      <Menu.ResourceItem name="business-units" />
    </Menu.Item>
    <Menu.ResourceItem name="addresses" />
    <Menu.ResourceItem name="contacts" />

    {/* <Menu.Item to={`/organisations/${id}/business-units`} primaryText="Business Units" leftIcon={<LabelIcon />} />
    <Menu.Item to={`/organisations/${id}/addresses`} primaryText="Addresses" leftIcon={<LabelIcon />} />
    <Menu.Item to={`/organisations/${id}/contacts`} primaryText="Contacts" leftIcon={<LabelIcon />} /> */}
    <Menu.Item to="/organisations-route" primaryText="..and more things" leftIcon={<LabelIcon />} />
    </Menu>
  )
};