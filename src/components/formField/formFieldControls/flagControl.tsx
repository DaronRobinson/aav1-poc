import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import FlagIcon from "@mui/icons-material/Flag";
import { useAssuranceFormFieldContext } from "../context";

export default function FlagControl() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { flag, setFlag, setFieldStatus } = useAssuranceFormFieldContext();
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (choice: string) => {
    setAnchorEl(null);
    setFlag(choice);
    setFieldStatus(choice);
  };

  return (
    <>
      <Button className="buttonIconWrapper inputIcon flag" onClick={handleClick}>
        {(flag === "reviewed" || flag === "rejected") && <FlagIcon className={`flagIcon ${flag}`} />}
        {flag !== "reviewed" && flag !== "rejected" && <OutlinedFlagIcon className={`flagIcon ${flag}`} />}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={() => handleClose("investigate")}>
          <OutlinedFlagIcon className="flagIcon investigate" />
          Needs Investigation
        </MenuItem>
        <MenuItem onClick={() => handleClose("client")}>
          <OutlinedFlagIcon className="flagIcon client" />
          Needs Client Discussion
        </MenuItem>
        <MenuItem onClick={() => handleClose("verified")}>
          <OutlinedFlagIcon className="flagIcon verified" />
          Verified
        </MenuItem>
        {/* <MenuItem onClick={() => handleClose("reviewed")}>
          <FlagIcon className="flagIcon reviewed" />
          Reviewed
        </MenuItem>
        <MenuItem onClick={() => handleClose("rejected")}>
          <FlagIcon className="flagIcon rejected" />
          Rejected
        </MenuItem> */}
        <MenuItem onClick={() => handleClose("remove")}>
          <OutlinedFlagIcon className="flagIcon remove" />
          Remove Flag
        </MenuItem>
      </Menu>
    </>
  );
}
