import { createContext, useContext, useEffect, useState } from "react";
import { AssuranceFormItemProps } from "../../types/assuranceFieldTypes";
import { useRecordContext, useStore } from "react-admin";
import useFieldStatusActions from "./hooks/useFieldStatusActions";
import useFieldNoteActions from "./hooks/useFieldNoteActions";

export function useAssuranceFormField({ field, fieldNotes, refresh }: AssuranceFormItemProps) {
  const [flag, setFlag] = useState<string | null>(null);
  const [hasNote, setHasNote] = useState(false);
  const [hasFinding, setHasFinding] = useState(false);

  const engagement = useRecordContext();
  const [user] = useStore("user");

  const { userFieldState, updateFieldStatus, createFieldStatus } = useFieldStatusActions({
    userId: user?.id,
    engagementId: engagement?.id,
    field: field?.field,
    fieldStates: engagement?.field_states,
    status: flag,
    refresh,
  });

  const { userFieldNote, userFieldFinding, updateFieldNote, createFieldNote, updateFieldFinding, createFieldFinding } =
    useFieldNoteActions({
      userId: user?.id,
      engagementId: engagement?.id,
      field: field?.field,
      fieldNotes: field?.notes,
      refresh,
    });

  useEffect(() => {
    if (userFieldState && flag === null) {
      setFlag(userFieldState.status);
    }
  }, [userFieldState]);

  useEffect(() => {
    if (userFieldNote && hasNote === false) {
      setHasNote(true);
    }
  }, [userFieldNote]);

  useEffect(() => {
    if (userFieldFinding && hasFinding === false) {
      setHasFinding(true);
    }
  }, [userFieldFinding]);

  console.log("has:", hasNote, hasFinding);

  const setFieldStatus = (choice: string) => {
    if (userFieldState?.id) {
      console.log("update a field_status");
      updateFieldStatus(choice);
    } else {
      createFieldStatus(choice);
    }
  };

  const setFieldNote = (noteData: any) => {
    if (userFieldNote?.id) {
      console.log("update a note");
      updateFieldNote(noteData);
    } else {
      createFieldNote(noteData);
    }
  };

  const setFieldFinding = (findingData: any) => {
    if (userFieldFinding?.id) {
      console.log("update a finding");
      updateFieldFinding(findingData);
    } else {
      createFieldFinding(findingData);
    }
  };

  return {
    user,
    engagement,
    field,
    flag,
    setFlag,
    hasNote,
    hasFinding,
    refresh,
    setFieldStatus,
    setFieldNote,
    setFieldFinding,
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
