// in src/users.js
import * as React from "react";
import {
  useCreate,
  useRecordContext,
  Form,
  ReferenceInput,
  useGetIdentity,
  TextInput,
  SelectInput,
  FileInput,
  FileField,
  CreateBase,
  SaveButton,
  useRefresh,
  useStore,
  useStoreContext,
  useStoreResult,
} from "react-admin";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material//DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { Box } from "@mui/material";

import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ChatIcon from "@mui/icons-material/Chat";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import MarkUnreadChatAltOutlinedIcon from "@mui/icons-material/MarkUnreadChatAltOutlined";
import Save from "@mui/icons-material/Save";

import { useAssuranceFormFieldContext } from "../context";
import { FieldNote } from "../../../types/assuranceFieldTypes";

export default function NoteControl({ type }: { type: string }) {
  const [open, setOpen] = React.useState(false); // Controls modal

  const { user, engagement, field, hasNote, hasFinding, setFieldNote, setFieldFinding } =
    useAssuranceFormFieldContext();

  // if (!fieldNotes || !user) return null;

  // const userFieldNotes = fieldNotes?.filter(
  //   (field_note: FieldNote) => field_note.user_id === user.id && field_note.type === type
  // );

  // if (userFieldNotes) {
  //   userFieldNotes.sort((a: FieldNote, b: FieldNote) => {
  //     return Date.parse(b.date_created) - Date.parse(a.date_created);
  //   });
  // }

  // if (userFieldNotes[0] && hasNote === false) {
  //   setHasNote(true);
  // }

  // const [create, { isLoading, error }] = useCreate(); // Access dataProvider API call
  // if (error) {
  //   console.log("error", error);
  // }
  const handleSubmit = async (data: any) => {
    setOpen(false);

    if (type === "note") {
      setFieldNote({
        field: field.field,
        message: data.message,
        comments: data.comments,
        type: type,
      });
    } else if (type === "finding") {
      setFieldFinding({
        field: field.field,
        message: data.message,
        comments: data.comments,
        type: type,
        finding_type: data.finding_type,
      });
    }

    // create(
    //   "notes",
    //   {
    //     data: {
    //       user_id: user.id,
    //       engagement_id: engagement.id,
    //       field: field.field,
    //       message: data.message,
    //       comments: data.comments,
    //       finding_type: data.finding_type,
    //       type: type,
    //     },
    //   },
    //   {
    //     onSettled: (data) => {
    //       console.log("saved a note");
    //       setHasNote(true);
    //       //refresh();
    //     },
    //   }
    // );
  };

  // const handleFileUpload = async (files: any) => {
  //   console.log("upload file", files);
  // };

  // const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  // const files = acceptedFiles.map((file: File) => (
  //   <li key={file.name}>
  //     {file.name} - {file.size} bytes
  //   </li>
  // ));

  return (
    <CreateBase resource="notes">
      <IconButton
        className={`inputIcon iconButton ${
          (type == "note" && hasNote) || (type == "finding" && hasFinding) ? "highlight " : ""
        }}`}
        aria-label="create"
        onClick={() => setOpen(true)}
      >
        {type == "note" && !hasNote && <ChatBubbleOutlineOutlinedIcon />}
        {type == "note" && hasNote && <ChatIcon />}
        {type == "finding" && !hasFinding && <ReportProblemOutlinedIcon />}
        {type == "finding" && hasFinding && <ReportProblemIcon />}
      </IconButton>
      <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title" maxWidth="md" fullWidth>
        <Form onSubmit={handleSubmit}>
          {type == "note" && <DialogTitle id="form-dialog-title">Add a note</DialogTitle>}
          {type == "attach" && <DialogTitle id="form-dialog-title">Attach a file or image</DialogTitle>}
          {type == "finding" && <DialogTitle id="form-dialog-title">Log a finding</DialogTitle>}

          <DialogContent>
            {type == "finding" && (
              <>
                <SelectInput
                  source="finding_type"
                  label="Finding Type"
                  choices={[
                    { id: "NCR", name: "Major Non-Conformance" },
                    { id: "mNCR", name: "Minor Non-Conformance" },
                    { id: "OBS", name: "Observation" },
                    { id: "RFI", name: "Request for Information" },
                    { id: "FFAV", name: "Fact Found After Verification" },
                  ]}
                />
                <TextInput source="message" autoFocus label="Issue" className="noteInput" fullWidth multiline />
                <TextInput
                  source="comments"
                  autoFocus
                  label="Comments"
                  className="shortNoteInput"
                  fullWidth
                  multiline
                />
              </>
            )}

            {type == "note" && (
              <TextInput source="message" autoFocus label={false} className="noteInput" fullWidth multiline />
            )}
            <FileInput source="attachments">
              <FileField source="src" title="title" />
            </FileInput>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <SaveButton />
          </DialogActions>
        </Form>
      </Dialog>
    </CreateBase>
  );
}
