import {AbsenceRequest} from "../entities/AbsenceRequest";

export interface GetAbsenceRequestsResponse {
  absenceRequests: AbsenceRequest[];
  remainingPaidLeaves: number;
  remainingEmployeeWtr: number;
}