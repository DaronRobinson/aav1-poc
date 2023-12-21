import { RaRecord, useCreate, useUpdate } from "react-admin";
import { FieldState } from "../../../types/assuranceFieldTypes";

export type FieldStatusActionsProps = {
  engagementId: RaRecord["id"] | null;
  userId: string | null;
  field: string | null;
  fieldStates: FieldState[] | undefined;
  status: string | null;
  refresh: () => void;
};

export default function useFieldStatusActions({
  engagementId,
  userId,
  field,
  fieldStates,
  status,
  refresh,
}: FieldStatusActionsProps) {
  const userFieldStates = fieldStates
    ?.filter((f: any) => f.field_status_id.user_id === userId && f.field_status_id.field === field)
    .map((f: any) => f.field_status_id);

  if (userFieldStates) {
    userFieldStates.sort((a: FieldState, b: FieldState) => {
      return Date.parse(b.date_created) - Date.parse(a.date_created);
    });
  }

  const userFieldState = userFieldStates?.[0] ? userFieldStates[0] : null;

  const [associateFieldStatus] = useCreate(); //TODO move to their own hooks
  const [updateFieldStatusAction] = useUpdate(
    "field_status",
    { id: userFieldState?.id, data: { status: status } },
    {
      onSuccess: (data) => {
        console.log("updated a field_status", data);
        refresh();
      },
      onError: (error) => {
        console.log("error", error);
      },
    }
  );
  const [createFieldStatusAction] = useCreate(
    "field_status",
    {
      data: {
        user_id: userId,
        engagement_id: engagementId,
        field: field,
        status: status,
      },
    },
    {
      onSuccess: (status) => {
        console.log("saved a field_status", status);
        associateFieldStatus(
          "engagements_field_status",
          {
            data: {
              engagements_id: engagementId,
              field_status_id: status.id,
            },
          },
          {
            onSuccess: (assoc) => {
              console.log("saved a engagements_field_status", assoc);
              refresh();
            },
            onError: (error) => {
              console.log("error", error);
            },
          }
        );
      },
      onError: (error) => {
        console.log("error on a field_status");
      },
    }
  );

  const createFieldStatus = (choice: string) => {
    createFieldStatusAction("field_status", {
      data: {
        user_id: userId,
        engagement_id: engagementId,
        field: field,
        status: choice,
      },
    });
  };

  const updateFieldStatus = (choice: string) => {
    updateFieldStatusAction("field_status", { id: userFieldState?.id, data: { status: choice } });
  };

  return { userFieldState, updateFieldStatus, createFieldStatus };
}
