"use client";

import {useRouter} from "next/navigation";
import {SubmitEvent, useState} from "react";

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();

    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!response.ok) {
      window.alert("Identifiants invalides.");

      return;
    }

    router.push("/");
  }

	return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        required
        onChange={event => setEmail(event.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        required
        onChange={event => setPassword(event.target.value)}
      />

      <input type="submit" value="Login" />
    </form>
  );
}