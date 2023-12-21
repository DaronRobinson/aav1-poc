import { RaRecord, useCreate, useUpdate } from "react-admin";
import { FieldNote } from "../../../types/assuranceFieldTypes";

export type FieldNoteActionsProps = {
  engagementId: RaRecord["id"] | null;
  userId: string | null;
  field: string | null;
  fieldNotes: FieldNote[] | undefined;
  refresh: () => void;
};

export default function useFieldNoteActions({
  engagementId,
  userId,
  field,
  fieldNotes,
  refresh,
}: FieldNoteActionsProps) {
  console.log("fieldNotes", fieldNotes);
  const userFieldNotes = fieldNotes?.filter(
    (field_note: FieldNote) => field_note.user_id === userId && field_note.type === "note" && field_note.field === field
  );

  if (userFieldNotes) {
    userFieldNotes.sort((a: FieldNote, b: FieldNote) => {
      return Date.parse(b.date_created) - Date.parse(a.date_created);
    });
  }

  const userFieldNote = userFieldNotes?.[0] ? userFieldNotes[0] : null;

  const userFieldFindings = fieldNotes?.filter(
    (field_note: FieldNote) =>
      field_note.user_id === userId && field_note.type === "finding" && field_note.field === field
  );

  if (userFieldFindings) {
    userFieldFindings.sort((a: FieldNote, b: FieldNote) => {
      return Date.parse(b.date_created) - Date.parse(a.date_created);
    });
  }

  const userFieldFinding = userFieldFindings?.[0] ? userFieldFindings[0] : null;

  console.log("Notes", userFieldFinding, userFieldNote);

  const [associateNote] = useCreate();
  const [updateNoteAction] = useUpdate(
    "notes",
    {},
    {
      onSuccess: (data) => {
        console.log("updated a note", data);
        refresh();
      },
      onError: (error) => {
        console.log("error", error);
      },
    }
  );
  const [createNoteAction] = useCreate(
    "notes",
    {},
    {
      onSuccess: (note) => {
        console.log("saved a note", note);
        associateNote(
          "engagements_notes",
          {
            data: {
              engagements_id: engagementId,
              notes_id: note.id,
            },
          },
          {
            onSuccess: (assoc) => {
              console.log("saved a engagements_notes", assoc);
              refresh();
            },
            onError: (error) => {
              console.log("error", error);
            },
          }
        );
      },
      onError: (error) => {
        console.log("error on a note");
      },
    }
  );

  const createFieldNote = (noteData: any) => {
    createNoteAction("notes", {
      data: {
        user_id: userId,
        engagement_id: engagementId,
        field: field,
        message: noteData.message,
        type: "note",
      },
    });
  };

  const updateFieldNote = (noteData: any) => {
    updateNoteAction("notes", {
      id: userFieldNote?.id,
      data: {
        message: noteData.message,
      },
    });
  };

  const createFieldFinding = (noteData: any) => {
    createNoteAction("notes", {
      data: {
        user_id: userId,
        engagement_id: engagementId,
        field: field,
        message: noteData.message,
        type: "finding",
        comments: noteData.comments,
        finding_type: noteData.finding_type,
      },
    });
  };

  const updateFieldFinding = (noteData: any) => {
    updateNoteAction("notes", {
      id: userFieldFinding?.id,
      data: {
        message: noteData.message,
        comments: noteData.comments,
        finding_type: noteData.finding_type,
      },
    });
  };

  return { userFieldNote, userFieldFinding, updateFieldNote, createFieldNote, updateFieldFinding, createFieldFinding };
}
