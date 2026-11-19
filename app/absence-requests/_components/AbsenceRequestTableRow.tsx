import Badge from "@/app/_components/Badge";
import {AbsenceRequest} from "@/entities/AbsenceRequest";
import {absenceRequestStatusStrings} from "@/entities/AbsenceRequestStatus";
import {absenceTypeStrings} from "@/entities/AbsenceType";

function isStatusEditable(absenceRequest: AbsenceRequest) {
  return true;
}

export default async function AbsenceRequestTableRow({absenceRequest}: {absenceRequest: AbsenceRequest}) {
  function handleClickUpdateButton(absenceRequest: AbsenceRequest) {
    // TODO
  }

  function handleClickDeleteButton(absenceRequest: AbsenceRequest) {
    // TODO
  }

	return (
    <tr>
      <td>
        {new Date(absenceRequest.startedAt).toLocaleDateString("fr-FR")}
      </td>

      <td>
        {new Date(absenceRequest.endedAt).toLocaleDateString("fr-FR")}
      </td>

      <td>
        <Badge>
          {absenceTypeStrings[absenceRequest.type]}
        </Badge>
      </td>

      <td>
        <Badge>
          {absenceRequestStatusStrings[absenceRequest.status]}
        </Badge>
      </td>

      <td>
        {absenceRequest.reason}
      </td>

      <td>
        <div className="actions">
          {isStatusEditable(absenceRequest) && (
            <button className="button button__update" /* onClick={() => handleClickUpdateButton(absenceRequest)} */>
              {/* permissions="['CAN_PATCH_ABSENCE_REQUEST']" */}
              {/* <i className="pi pi-file-edit"></i> */}

              <span className="label">
                Modifier
              </span>
            </button>
          )}

          <button className="button button__delete" /* onClick={() => handleClickDeleteButton(absenceRequest)} */>
            {/* permissions="['CAN_DELETE_ABSENCE_REQUEST']" */}
            {/* <i className="pi pi-trash"></i> */}

            <span className="label">
              Supprimer
            </span>
          </button>
        </div>
      </td>
    </tr>
  );
}