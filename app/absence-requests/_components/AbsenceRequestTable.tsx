import AbsenceRequestTableRow from "@/app/absence-requests/_components/AbsenceRequestTableRow";
import {GetAbsenceRequestsResponse} from "@/models/GetAbsenceRequestsResponse";
import {getAbsenceRequests} from "@/services/getAbsenceRequests";

export default async function AbsenceRequestTable() {
  const getAbsenceRequestsResponse: GetAbsenceRequestsResponse = await getAbsenceRequests();

	return (
    <>
      {getAbsenceRequestsResponse.absenceRequests.length === 0 && (
        <div className="no-results">
          Aucun résultat.
        </div>
      )}

      <table class="absence-request-table">
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