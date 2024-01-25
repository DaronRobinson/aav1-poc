import React, { useContext, useState, createContext } from "react";
import { TextInput, NumberInput } from "react-admin";
import { Box, Typography } from "@mui/material";

import { slugToString } from "../../utils/utils";
import { AssuranceFormItemProps } from "../../types/assuranceFieldTypes";

import AssuranceFormFieldControls from "./formFieldControls/assuranceFormFieldControls";
import { AssuranceFormFieldContext, useAssuranceFormFieldContext, useAssuranceFormField } from "./context";

export const AssuranceFormField = (props: AssuranceFormItemProps) => {
  const context = useAssuranceFormField(props);
  return (
    <AssuranceFormFieldContext.Provider value={context}>
      {props.field?.type === "text" && <TextAreaField />}
    </AssuranceFormFieldContext.Provider>
  );
};

export const AssuranceFormNumber = ({ field }: AssuranceFormItemProps) => (
  <Box>
    <Typography sx={{ fontSize: "20px", fontWeight: "400", paddingTop: "10px" }}>
      {slugToString(field.field)}
    </Typography>
    <NumberInput source={field.field} fullWidth className="standardInput" />
  </Box>
);

const TextAreaField = () => {
  const { field, flag } = useAssuranceFormFieldContext();
  if (!field) return null;
  return (
    <Box className="formField">
      <AssuranceFormFieldControls />
      <TextInput
        source={field.field}
        fullWidth
        label={false}
        multiline={field.type === "text" ? true : false}
        className={field.type === "text" ? `standardInput multiline ${flag}` : `standardInput ${flag}`}
      />
    </Box>
  );
};
