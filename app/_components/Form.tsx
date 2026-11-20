import _Form from "next/form";
import {ReactNode} from "react";

import {request} from "@/lib/api";

type FormSubmitEventHandler = (formData: FormData) => void;

type FormProps = {
  method: string;
  action: string;
  onPostSubmit: FormSubmitEventHandler;
  children: ReactNode;
}

export default function Form({method, action, onPostSubmit, children}: FormProps) {
  async function handleSubmit(formData: FormData) {
    // const body: Record<string, any> = {};

    // formData.forEach((value, key) => body[key] = value);

    /* const response = await request(method, {
      body: formData,
    }); */
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${action}`, {
      method,
      body: formData,
    });

    if (!response.ok) {
      window.alert("Identifiants invalides.");

      return;
    }

    console.log(await response.json());

    onPostSubmit(formData);
  }

	return (
    <_Form action={handleSubmit} className="form">
      {children}
    </_Form>
  );
}