import {AbsenceRequest} from "@/entities/AbsenceRequest";

export default async function AbsenceRequestListItem({absenceRequest}: {absenceRequest: AbsenceRequest}) {
	return (
    <li>
      {absenceRequest.type}<br />
      {absenceRequest.reason}
    </li>
  );
}