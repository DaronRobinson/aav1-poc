import { useRecordContext } from "react-admin";
import { unslugify } from "../utils/utils";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import WarningIcon from "@mui/icons-material/Warning";
import { isAfter } from "date-fns";

export const StatusField = ({ source }: { source: string }) => {
  const record = useRecordContext();
  console.log("record", record);
  const isModified =
    record["verification_date"] && isAfter(record["date_updated"], record["verification_date"]) ? true : false;
  const message = isModified ? "modified" : record[source].substring(1);
  const status = "statusField " + message;
  return (
    <span className={status}>
      {message == "verified" && <CheckCircleIcon />}
      {message == "modified" && <ErrorIcon />}
      {message == "revised" && <WarningIcon />}
      <span>{unslugify(message)}</span>
    </span>
  );
};
