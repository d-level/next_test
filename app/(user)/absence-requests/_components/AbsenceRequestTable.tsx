import AbsenceRequestTableRow from "@/app/(user)/absence-requests/_components/AbsenceRequestTableRow";
import {request} from "@/lib/api";
import {GetAbsenceRequestsResponse} from "@/models/GetAbsenceRequestsResponse";

import "@/styles/_components/AbsenceRequestTable.css";

export default async function AbsenceRequestTable() {
  const getAbsenceRequestsResponse: GetAbsenceRequestsResponse = await request("/absence-requests", {
    method: "GET",
  });

	return (
    <>
      {getAbsenceRequestsResponse.absenceRequests.length === 0 && (
        <div className="no-results">
          Aucun résultat.
        </div>
      )}

      <table className="absence-request-table">
        <thead>
          <tr>
            <th>
              Du
            </th>

            <th>
              Au
            </th>

            <th>
              Type
            </th>

            <th>
              Statut
            </th>

            <th>
              Motif
            </th>

            {/* Delete absence request row */}
            <th></th>
          </tr>
        </thead>

        <tbody>
          {getAbsenceRequestsResponse.absenceRequests.map(absenceRequest => (
            <AbsenceRequestTableRow absenceRequest={absenceRequest} key={absenceRequest.id} />
          ))}
        </tbody>
      </table>

      <p className="remaining">
        {getAbsenceRequestsResponse.remainingPaidLeaves} congés payés restants<br />
        {getAbsenceRequestsResponse.remainingEmployeeWtr} RTT employé restantes
      </p>

      {/* <app-absence-request-update-dialog
        [(visible)]="updateDialogVisible"
        [absenceRequest]="absenceRequest"
        [absenceTypeOptions]="absenceTypeOptions"
        (onUpdate)="onUpdate($event)"
      /> */}

      {/* <app-absence-request-delete-dialog [(visible)]="deleteDialogVisible" [absenceRequest]="absenceRequest" (onDelete)="onDelete($event)" /> */}
    </>
  );
}