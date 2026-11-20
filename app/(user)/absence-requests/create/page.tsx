import CreateAbsenceRequestForm from "@/app/(user)/absence-requests/create/_components/CreateAbsenceRequestForm";
import BackLink from "@/app/_components/BackLink";

export default function Page() {
	return (
    <>
      <div>
        <BackLink href="/absence-requests" />

        <h1>
          Nouvelle demande d'absence
        </h1>
      </div>

      <CreateAbsenceRequestForm />
    </>
  );
}