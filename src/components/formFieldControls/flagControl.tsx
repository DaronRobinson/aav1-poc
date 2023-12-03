import React, { useState } from "react";
import { useCreate, useGetList, useRecordContext, useGetIdentity, useRefresh } from "react-admin";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import FlagIcon from "@mui/icons-material/Flag";
import { FieldContext } from "../assuranceFormFields";
import { Field, FieldState } from "../../types/assuranceFieldTypes";

export default function FlagControl() {
  const refresh = useRefresh();
  const { fieldData, fieldSettings, fieldStates } = React.useContext(FieldContext);
  const engagement = useRecordContext();
  const user = useGetIdentity();

  if (!fieldStates) return null;

  const userFieldStates = fieldStates?.filter((field_state: FieldState) => field_state.user_id === user.identity?.id);

  if (userFieldStates) {
    userFieldStates.sort((a: FieldState, b: FieldState) => {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return Date.parse(b.date_created) - Date.parse(a.date_created);
    });
  }

  if (userFieldStates[0] && fieldSettings.flag === null) {
    console.log("set user_field_state from DB", userFieldStates[0]);
    fieldSettings.setFlag(userFieldStates[0].status);
  }

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const [create, { data, isLoading, error }] = useCreate(); // Access dataProvider API call

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (choice: string) => {
    setAnchorEl(null);
    fieldSettings.setFlag(choice);
    create(
      "field_status",
      {
        data: {
          user_id: user.identity?.id,
          engagement_id: engagement.id,
          field: fieldData.field,
          status: choice,
        },
      },
      {
        onSettled: (data) => {
          console.log("saved a field_status");
          refresh();
        },
      }
    );
  };

  return (
    <>
      {fieldData.meta != undefined && (
        <>
          <Button className="buttonIconWrapper inputIcon flag" onClick={handleClick} aria-title="Flag this field">
            {(fieldSettings.flag === "reviewed" || fieldSettings.flag === "rejected") && (
              <FlagIcon className={`flagIcon ${fieldSettings.flag}`} />
            )}
            {fieldSettings.flag !== "reviewed" && fieldSettings.flag !== "rejected" && (
              <OutlinedFlagIcon className={`flagIcon ${fieldSettings.flag}`} />
            )}
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
            <MenuItem onClick={() => handleClose("approved")}>
              <OutlinedFlagIcon className="flagIcon approved" />
              Approved
            </MenuItem>
            <MenuItem onClick={() => handleClose("reviewed")}>
              <FlagIcon className="flagIcon reviewed" />
              Reviewed
            </MenuItem>
            <MenuItem onClick={() => handleClose("rejected")}>
              <FlagIcon className="flagIcon rejected" />
              Rejected
            </MenuItem>
            <MenuItem onClick={() => handleClose("remove")}>
              <OutlinedFlagIcon className="flagIcon remove" />
              Remove Flag
            </MenuItem>
          </Menu>
        </>
      )}
    </>
  );
}
