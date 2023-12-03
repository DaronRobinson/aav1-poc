import * as React from "react";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { FieldContext } from "../assuranceFormFields";

export default function HelpTextControl() {
  const { fieldData } = React.useContext(FieldContext);
  //console.log(fieldData);
  const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#eee",
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      padding: "10px",
      fontSize: 15,
    },
  }));

  return (
    <div>
      {fieldData.meta != undefined && (
        <LightTooltip title={fieldData.meta.options.help_text} className="helpText">
          <HelpOutlineOutlinedIcon />
        </LightTooltip>
      )}
    </div>
  );
}
