import Link from "next/link";
import {Suspense} from "react";

import AbsenceRequestTable from "@/app/absence-requests/_components/AbsenceRequestTable";

import "@/styles/absence-requests/page.css";

export default function Page() {
	return (
    <>
      <div className="title-container">
        <h1>
          Mes demandes d'absence
        </h1>

        <div /* permissions="'CAN_POST_ABSENCE_REQUEST'" */>
          <Link href="/absence-requests/create" className="button button__create">
            {/* <i className="pi pi-plus"></i> */}

            <span className="label">
              Créer une demande d'absence
            </span>
          </Link>
        </div>
      </div>

      <Suspense>
        <AbsenceRequestTable />
      </Suspense>
    </>
  );
}