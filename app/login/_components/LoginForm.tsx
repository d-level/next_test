"use client";

import {useRouter} from "next/navigation";
import {useState} from "react";

import Form from "@/app/_components/Form";
import FormFooter from "@/app/_components/FormFooter";
import TextInput from "@/app/_components/TextInput";

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handlePostSubmit(formData: FormData) {
    router.push("/");
  }

	return (
    <Form action="login" onPostSubmit={handlePostSubmit}>
      <h1>
        Connexion
      </h1>

      <TextInput
        type="text"
        name="email"
        label="Email"
        value={email}
        required={true}
        placeholder="Email"
        onChange={event => setEmail(event.target.value)}
      />

      <TextInput
        type="password"
        name="password"
        label="Mot de passe"
        value={password}
        required={true}
        placeholder="Mot de passe"
        autoComplete="current-password"
        onChange={event => setPassword(event.target.value)}
      />

      <FormFooter>
        <button type="submit" className="button button__submit">
          Se connecter
        </button>
      </FormFooter>
    </Form>
  );
}