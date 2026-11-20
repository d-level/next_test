"use client";

import {useRouter} from "next/navigation";
import {signIn} from "next-auth/react";
import {SubmitEvent, useState} from "react";

import FormFooter from "@/app/_components/FormFooter";
import TextInput from "@/app/_components/TextInput";

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("matteo@absencia.wip");
  const [password, setPassword] = useState("admin");
  const [error, setError] = useState(false);

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();

    setError(false);

    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (response.error === "CredentialsSignin") {
      setError(true);

      return;
    }

    router.push("/absence-requests");
  }

	return (
    <form className="login-form" onSubmit={handleSubmit}>
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

      {error && (
        <span class="error">
          Identifiants invalides.
        </span>
      )}

      <FormFooter>
        <button type="submit" className="button button__submit">
          Se connecter
        </button>
      </FormFooter>
    </form>
  );
}