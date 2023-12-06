import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { AssuranceFormItemProps, FieldState } from "../../types/assuranceFieldTypes";
import { useRecordContext, useStore, useCreate, useUpdate } from "react-admin";

export function useAssuranceFormField({ field, fieldNotes, refresh }: AssuranceFormItemProps) {
  const [flag, setFlag] = useState<string | null>(null);

  const engagement = useRecordContext();
  const [user] = useStore("user");

  const userFieldStates = engagement.field_states
    ?.filter((f: any) => f.field_status_id.user_id === user.id && f.field_status_id.field === field?.field)
    .map((f: any) => f.field_status_id);

  if (userFieldStates) {
    userFieldStates.sort((a: FieldState, b: FieldState) => {
      return Date.parse(b.date_created) - Date.parse(a.date_created);
    });
  }
  useEffect(() => {
    if (userFieldStates && userFieldStates[0] && flag === null) {
      setFlag(userFieldStates[0]?.status);
    }
  }, [userFieldStates]);

  const [associateFieldStatus] = useCreate(); //TODO move to their own hooks
  const [update] = useUpdate(
    "field_status",
    { id: userFieldStates[0]?.id, data: { status: flag } },
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
  const [createFieldStatus] = useCreate(
    "field_status",
    {
      data: {
        user_id: user.id,
        engagement_id: engagement.id,
        field: field?.field,
        status: flag,
      },
    },
    {
      onSuccess: (status) => {
        console.log("saved a field_status", status);
        associateFieldStatus(
          "engagements_field_status",
          {
            data: {
              engagements_id: engagement.id,
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
  ); // Access dataProvider API call

  const setFieldStatus = (choice: string) => {
    if (userFieldStates[0]?.id) {
      console.log("update a field_status");
      update("field_status", { id: userFieldStates[0]?.id, data: { status: choice } });
    } else {
      createFieldStatus("field_status", {
        data: {
          user_id: user.id,
          engagement_id: engagement.id,
          field: field.field,
          status: choice,
        },
      });
    }
  };

  //console.log("context", field, fieldStates, fieldNotes);
  return {
    user,
    engagement,
    field,
    flag,
    setFlag,
    fieldNotes,
    refresh,
    setFieldStatus,
  };
}

export const AssuranceFormFieldContext = createContext<ReturnType<typeof useAssuranceFormField>>({} as any);
export const useAssuranceFormFieldContext = () => useContext(AssuranceFormFieldContext);

// const [programmesOpenWeeks, setProgrammesOpenWeeks] = useState<ProgrammesOpenWeeks>({});

// const weeksMap = useRecord(weeks, "id");
// const programmesMap = useRecord(programmes, "id");
// const apiRef = useGridApiRef();
// const makeRow = useMakeRow(weeksMap, programmesMap, activeVendor);

// let initialRows = useMemo(() => {
//   const openWeeks = weeks.reduce((r, a) => {
//     r[a.id] = false;
//     return r;
//   }, {} as ProgrammesOpenWeeks);

//   const rows = weeks.flatMap((w) =>
//     species.flatMap((s) => {
//       const speciesProgrammes = programmes.filter((a) => a.speciesId == s.id);

//       return speciesProgrammes.map((p) => {
//         const row = makeRow(w.id, p.id);
//         openWeeks[w.id] = openWeeks[w.id] || row.programmeOpenForBookings;

//         return row;
//       });
//     })
//   );

//   setProgrammesOpenWeeks(openWeeks);

//   return rows;
// }, []);

// const initialState = useKeepGroupedColumnsHidden({
//   apiRef,
//   initialState: {
//     rowGrouping: {
//       model: ["weekId", "speciesId"],
//     },
//     columns: {
//       columnVisibilityModel: {
//         id: false,
//         programmeId: false,
//         programmeIsPrimary: false,
//         parentBookingId: false,
//       },
//     },
//     sorting: {
//       sortModel: [{ field: "id", sort: "asc" }],
//     },
//   },
// });

// function incrementCounter() {
//   setCounter((v) => v + 1);
// }

// function incrementCommitments() {
//   setRefreshCommitments((v) => v + 1);
// }

// const { getWeekBookings, isWeeksBookingsLoaded } = useWeekBookingsLoader({
//   apiRef,
//   makeRow,
//   loadWeekBookings,
//   incrementCounter,
//   weeks,
// });

// async function submitBooking(rowId: GridRowId) {
//   const row = apiRef.current.getRow(rowId)!;

//   if (row.bookingId) {
//     await updateBooking(row.bookingId!, {
//       spaceRequested: row.spaceRequestedInput!,
//     });
//     apiRef.current.updateRows([
//       {
//         id: row.id,
//         spaceRequested: row.spaceRequestedInput,
//       },
//     ] satisfies Partial<RowData>[]);
//   } else {
//     const created = await createBooking({
//       weekId: row.weekId,
//       programmeId: row.programmeId,
//       spaceRequested: row.spaceRequestedInput!,
//       seasonId: useSeasonIdFromWeekId(weeks, row.weekId),
//     });
//     apiRef.current.updateRows([
//       {
//         id: row.id,
//         bookingId: created.id,
//         spaceRequested: row.spaceRequestedInput,
//       },
//     ] satisfies Partial<RowData>[]);
//   }
//   incrementCounter();
//   incrementCommitments();
// }

// useGridRowNodeToggleExpansion(apiRef);

// useEffect(() => {
//   const weekIds = uniq(initialRows.filter((a) => a.programmeOpenForBookings).map((a) => a.weekId));

//   for (const weekId of weekIds) {
//     getWeekBookings(weekId);
//   }
// }, [initialRows]);

// const incompleteCommitmentsWeekIds = useMemo(() => {
//   const rows =
//     "getAllRowIds" in apiRef.current
//       ? apiRef.current.getAllRowIds().map((a) => apiRef.current.getRow<RowData>(a)!)
//       : initialRows;

//   return rows.filter((a) => a.programmeOpenForBookings && !a.bookingId).map((a) => a.weekId);
// }, [counter]);

// const { columns, groupingColDef } = useColDefs(incompleteCommitmentsWeekIds, programmesOpenWeeks, readonly);
