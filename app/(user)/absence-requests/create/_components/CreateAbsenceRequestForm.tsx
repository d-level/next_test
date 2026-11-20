"use client";

import Link from "next/link";
import {useRouter} from "next/navigation";
import {useState} from "react";

import DatePicker from "@/app/_components/DatePicker";
import Form from "@/app/_components/Form";
import FormFooter from "@/app/_components/FormFooter";
import FormGroup from "@/app/_components/FormGroup";
import TextInput from "@/app/_components/TextInput";
import Select from "@/app/_components/Select";
import {absenceTypeStrings} from "@/entities/AbsenceType";

export default function CreateAbsenceRequestForm() {
  const router = useRouter();
  const [startedAt, setStartedAt] = useState(undefined);
  const [endedAt, setEndedAt] = useState(undefined);
  const [absenceType, setAbsenceType] = useState(undefined);
  const [reason, setReason] = useState("");

  function handlePostSubmit() {
    router.push("/absence-requests");
  }

	return (
    <Form action="" onPostSubmit={handlePostSubmit}>
      {/* permissions="['CAN_POST_ABSENCE_REQUEST']" */}

      <FormGroup>
        <DatePicker
          name="startedAt"
          label="Date de début"
          placeholder="Sélectionnez une date de début"
          required={true}
          errors={{}}
        />

        <DatePicker
          name="endedAt"
          label="Date de fin"
          placeholder="Sélectionnez une date de fin"
          required={true}
          errors={{}}
        />
      </FormGroup>

      <Select
        name="type"
        label="Type d'absence"
        placeholder="Sélectionnez un type d'absence"
        required={true}
        errors={{}}
        options={absenceTypeStrings}
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