import React, { useContext, useState, createContext } from "react";
import { TextInput, NumberInput } from "react-admin";
import { Box, Typography } from "@mui/material";

import { slugToString } from "../utils/utils";
import { Field, FieldState, FieldNote } from "../types/assuranceFieldTypes";

import AssuranceFormFieldControls from "./formFieldControls/assuranceFormFieldControls";

type FieldContextType = {
  fieldData?: any;
  fieldSettings?: any;
  fieldStates?: FieldState[];
  fieldNotes?: FieldNote[];
};
export const FieldContext = createContext<FieldContextType>({});

export type AssuranceFormItemProps = {
  field: Field;
  fieldStates: FieldState[] | undefined;
  fieldNotes: FieldNote[] | undefined;
  type?: string;
};

export const AssuranceFormField = ({ field, fieldStates, fieldNotes, type }: AssuranceFormItemProps) => {
  const [flag, setFlag] = useState(null);
  //console.log("field", field);
  const context = useContext(FieldContext);
  context.fieldData = field;
  context.fieldSettings = { flag, setFlag };
  context.fieldStates = fieldStates;
  context.fieldNotes = fieldNotes;

  return (
    <FieldContext.Provider value={context}>{type === "textArea" && TextAreaField(field, flag)}</FieldContext.Provider>
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

const TextAreaField = (field: Field, flag: string | null) => {
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
