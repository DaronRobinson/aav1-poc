// in src/users.js
import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  UrlField,
  useCreate,
  CreateButton,
  useRecordContext,
  Form,
  ReferenceInput,
  useGetIdentity,
  TextInput,
  CreateBase,
  SaveButton,
  useRefresh,
} from "react-admin";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material//DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import MarkUnreadChatAltOutlinedIcon from "@mui/icons-material/MarkUnreadChatAltOutlined";
import Save from "@mui/icons-material/Save";
import { FieldContext } from "../assuranceFormFieldContext";
import { Field, FieldState, FieldNote } from "../../types/assuranceFieldTypes";
import { useDropzone } from "react-dropzone";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const getColor = (props: any) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isFocused) {
    return "#2196f3";
  }
  return "#eeeeee";
};

const Container = styled(Box)((props) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: "2px",
  borderRadius: "2px",
  borderColor: `${(props: any) => getColor(props)}`,
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border 0.24s ease-in-out",
}));

function StyledDropzone(props: any) {
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({ accept: { "image/*": [] } });

  return (
    <div className="container">
      <Container {...getRootProps({ isFocused, isDragAccept, isDragReject })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </Container>
    </div>
  );
}

export default function NoteControl({ type }: { type: string }) {
  const [open, setOpen] = React.useState(false); // Controls modal
  const [hasNote, setHasNote] = React.useState(false); // Controls icon
  const refresh = useRefresh();
  const engagement = useRecordContext();
  const user = useGetIdentity();

  const { fieldData, fieldSettings, fieldNotes } =
    React.useContext(FieldContext);

  if (!fieldNotes) return null;

  const userFieldNotes = fieldNotes?.filter(
    (field_note: FieldNote) =>
      field_note.user_id === user.identity?.id && field_note.type === type
  );

  if (userFieldNotes) {
    userFieldNotes.sort((a: FieldNote, b: FieldNote) => {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return Date.parse(b.date_created) - Date.parse(a.date_created);
    });
  }

  if (userFieldNotes[0] && hasNote === false) {
    console.log("set user_field_note from DB", userFieldNotes[0]);
    setHasNote(true);
  }

  const [create, { isLoading, error }] = useCreate(); // Access dataProvider API call
  if (error) {
    console.log("error", error);
  }
  console.log("hasNote", hasNote);

  const handleSubmit = async (data: any) => {
    console.log("make a " + type + "note"); //, fieldData, fieldSettings, fieldStates); also note.message save
    console.log(data);
    setOpen(false);
    create(
      "notes",
      {
        data: {
          user_id: user.identity?.id,
          engagement_id: engagement.id,
          field: fieldData.field,
          message: data.message,
          type: type,
        },
      },
      {
        onSettled: (data) => {
          console.log("saved a note");
          setHasNote(true);
          //refresh();
        },
      }
    );
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
        className={`inputIcon iconButton ${hasNote ? "highlight " : ""}}`}
        aria-label="create"
        onClick={() => setOpen(true)}
      >
        {type == "note" && !hasNote && <ChatBubbleOutlineOutlinedIcon />}
        {type == "note" && hasNote && <ChatOutlinedIcon />}
        {type == "finding" && <ReportProblemOutlinedIcon />}
      </IconButton>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="form-dialog-title"
        maxWidth="md"
        fullWidth
      >
        <Form onSubmit={handleSubmit}>
          {type == "note" && (
            <DialogTitle id="form-dialog-title">Add a note</DialogTitle>
          )}
          {type == "attach" && (
            <DialogTitle id="form-dialog-title">
              Attach a file or image
            </DialogTitle>
          )}
          {type == "finding" && (
            <DialogTitle id="form-dialog-title">Log a finding</DialogTitle>
          )}

          <DialogContent>
            <TextInput
              source="message"
              autoFocus
              label={false}
              className="noteInput"
              fullWidth
              multiline
            />
            <StyledDropzone />
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
