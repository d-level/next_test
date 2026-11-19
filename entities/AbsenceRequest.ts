import {AbsenceRequestStatus} from "./AbsenceRequestStatus";
import {AbsenceType} from "./AbsenceType";

export class AbsenceRequest {
  id!: number;
  type!: AbsenceType;
  startedAt!: Date;
  endedAt!: Date;
  status!: AbsenceRequestStatus;
  reason?: string | null;
}