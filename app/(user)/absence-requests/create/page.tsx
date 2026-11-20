import CreateAbsenceRequestForm from "@/app/(user)/absence-requests/create/_components/CreateAbsenceRequestForm";
import BackLink from "@/app/_components/BackLink";

import "@/styles/absence-requests/create/page.css";

export default function Page() {
	return (
    <>
      <div className="form-header">
        <BackLink href="/absence-requests" />

        <h1>
          Nouvelle demande d'absence
        </h1>
      </div>

      <CreateAbsenceRequestForm />
    </>
  );
}