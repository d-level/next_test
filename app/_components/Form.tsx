import _Form from "next/form";
import {ReactNode} from "react";

type FormSubmitEventHandler = (formData: FormData) => void;

type FormProps = {
  action: string;
  onPostSubmit: FormSubmitEventHandler;
  children: ReactNode;
}

export default function Form({action, onPostSubmit, children}: FormProps) {
  async function handleSubmit(formData: FormData) {
    const body: Record<string, any> = {};

    formData.forEach((value, key) => body[key] = value);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${action}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      window.alert("Identifiants invalides.");

      return;
    }

    onPostSubmit(formData);
  }

	return (
    <_Form action={handleSubmit}>
      {children}
    </_Form>
  );
}