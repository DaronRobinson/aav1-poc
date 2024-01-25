import { Menu } from "react-admin";
import { useParams } from "react-router-dom";

import LabelIcon from "@mui/icons-material/Label";
import EditIcon from "@mui/icons-material/Edit";
import ViewListIcon from "@mui/icons-material/ViewList";

export const EngagementMenu = () => {
  const { id } = useParams();
  return (
    <Menu sx={{ paddingTop: "20px" }}>
      <Menu.Item to={`/engagements/${id}/details`} primaryText="Engagement Details" leftIcon={<ViewListIcon />} />
      <Menu.Item
        to={`/engagements/${id}/strategic-analysis`}
        primaryText="Strategic Analysis"
        leftIcon={<ViewListIcon />}
      />
      <Menu.Item
        to={`/engagements/${id}/emissions-inventory`}
        primaryText="Emissions Inventory"
        leftIcon={<ViewListIcon />}
      />
      <Menu.Item to={`/engagements/${id}/findings-log`} primaryText="Findings" leftIcon={<ViewListIcon />} />
      <Menu.Item to={`/engagements/${id}/risk-assessment`} primaryText="Risk Assessment" leftIcon={<ViewListIcon />} />
      <Menu.Item to="/custom-route" primaryText="..and more things" leftIcon={<LabelIcon />} />
    </Menu>
  );
};
