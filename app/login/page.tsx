import {Satisfy} from "next/font/google";

import LoginForm from "@/app/login/_components/LoginForm";

const satisfy = Satisfy({
  weight: "400",
});

export default function Page() {
	return (
    <div className="login">
      <h1 className={`login__logo ${satisfy.className}`}>
        Absencia
      </h1>

      <div className="login__formContainer">
        <LoginForm />
      </div>
    </div>
  );
}