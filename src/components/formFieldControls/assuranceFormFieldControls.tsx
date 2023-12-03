import React, { useState, useContext } from "react";

import { Typography, Grid } from "@mui/material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, { AccordionSummaryProps } from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

import { styled } from "@mui/material/styles";

import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import { FieldContext } from "../assuranceFormFields";

import { slugToString } from "../../utils/utils";
import HelpTextControl from "./helpTextControl";
import FlagControl from "./flagControl";
import NoteControl from "./noteControl";

export default function AssuranceFormFieldControls() {
  const { fieldData } = useContext(FieldContext);

  const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
    ({ theme }) => ({
      border: `1px solid ${theme.palette.divider}`,
      "&:not(:last-child)": {
        borderBottom: 0,
      },
      "&:before": {
        display: "none",
      },
    })
  );

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));

  //console.log("field", fieldData);
  const [expanded, setExpanded] = useState<string | false>("");
  const [accordianButtonClass, setAccordianButtonClass] = useState<string>("referenceIcon");

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
    setAccordianButtonClass(newExpanded ? "referenceIcon active" : "referenceIcon");
  };

  return (
    <Accordion expanded={expanded === "reference"} onChange={handleChange("reference")} className="referenceAccordian">
      <Grid container spacing={2}>
        <Grid item xs={6} sm={4}>
          <Grid container spacing={2}>
            <Grid item>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "400",
                  paddingTop: "0px",
                }}
              >
                {slugToString(fieldData.field)}
              </Typography>
            </Grid>
            {fieldData.meta.options.help_text != null && (
              <Grid item xs={6} sm={1} className="inputIcon help">
                <HelpTextControl />
              </Grid>
            )}
            <Grid item xs={6} sm={1} className="inputIcon reference">
              <MuiAccordionSummary
                aria-controls="reference-content"
                id="reference-header"
                className={accordianButtonClass}
              >
                <ArticleOutlinedIcon />
              </MuiAccordionSummary>
            </Grid>
            <Grid item xs={6} sm={1}>
              <FlagControl />
            </Grid>
            <Grid item xs={6} sm={1} className="inputIcon note">
              <NoteControl type="note" />
            </Grid>
            <Grid item xs={6} sm={1} className="inputIcon finding">
              <NoteControl type="finding" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} sm={8}></Grid>
      </Grid>

      <AccordionDetails className="referenceData">
        <Typography>{fieldData.meta.options.reference_data}</Typography>
        <Typography sx={{ fontWeight: 700, paddingTop: "20px" }}>
          More information:&nbsp;
          <a style={{ color: "#36c" }} href={fieldData.meta.options.reference_data_url} target="_blank">
            {fieldData.meta.options.reference_data_url}
          </a>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
