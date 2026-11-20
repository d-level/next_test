"use client";

import Link from "next/link";
import {useRouter} from "next/navigation";
import {useState} from "react";

import DatePicker from "@/app/_components/DatePicker";
import Form from "@/app/_components/Form";
import FormFooter from "@/app/_components/FormFooter";
import FormGroup from "@/app/_components/FormGroup";
import Select from "@/app/_components/Select";
import TextInput from "@/app/_components/TextInput";
import {AbsenceType, absenceTypeStrings} from "@/entities/AbsenceType";

export default function CreateAbsenceRequestForm() {
  const router = useRouter();
  const [startedAt, setStartedAt] = useState<Date|null>(null);
  const [endedAt, setEndedAt] = useState<Date|null>(null);
  const [absenceType, setAbsenceType] = useState<AbsenceType|null>(null);
  const [reason, setReason] = useState("");

  function handlePostSubmit() {
    router.push("/absence-requests");
  }

	return (
    <Form method="POST" action="/absence-requests" onPostSubmit={handlePostSubmit}>
      {/* permissions="['CAN_POST_ABSENCE_REQUEST']" */}

      <FormGroup>
        <DatePicker
          name="startedAt"
          label="Date de début"
          value={startedAt}
          placeholder="Sélectionnez une date de début"
          required={true}
          errors={{}}
          onChange={setStartedAt}
        />

        <DatePicker
          name="endedAt"
          label="Date de fin"
          value={endedAt}
          placeholder="Sélectionnez une date de fin"
          required={true}
          errors={{}}
          onChange={setEndedAt}
        />
      </FormGroup>

      <Select
        name="type"
        label="Type d'absence"
        value={absenceType}
        placeholder="Sélectionnez un type d'absence"
        required={true}
        errors={{}}
        options={absenceTypeStrings}
        onChange={setAbsenceType}
      />

      <TextInput
        type="text"
        name="reason"
        value={reason}
        label="Motif"
        placeholder="Saisissez un motif"
        required={true}
        onChange={event => setReason(event.target.value)}
      />

      <FormFooter>
        <Link href="/absence-requests" className="button button__cancel">
          Annuler
        </Link>

        <button type="submit" className="button button__submit">
          Créer
        </button>
      </FormFooter>
    </Form>
  );
}