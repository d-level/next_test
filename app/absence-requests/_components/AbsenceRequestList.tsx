import AbsenceRequestListItem from "@/app/absence-requests/_components/AbsenceRequestListItem";
import {GetAbsenceRequestsResponse} from "@/models/GetAbsenceRequestsResponse";
import {getAbsenceRequests} from "@/services/getAbsenceRequests";

export default async function AbsenceRequestList() {
  const getAbsenceRequestsResponse: GetAbsenceRequestsResponse = await getAbsenceRequests();

	return (
    <ul>
      {getAbsenceRequestsResponse.absenceRequests.map(absenceRequest => (
        <AbsenceRequestListItem absenceRequest={absenceRequest} key={absenceRequest.id} />
      ))}
    </ul>
  );
}