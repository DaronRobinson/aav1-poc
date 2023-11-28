import React, { useState, createContext } from "react";
import { AssuranceFormItemProps } from "./assuranceFormFields";
import { type } from "os";

type FieldContextType = {
  fieldData?: any;
  fieldSettings?: any;
  fieldStates?: any;
  fieldNotes?: any;
};
export const FieldContext = createContext<FieldContextType>({});
