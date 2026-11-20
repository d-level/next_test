import {satisfy} from "@/app/_fonts";
import LoginForm from "@/app/(auth)/login/_components/LoginForm";

import "@/styles/login.css";

export default function Page() {
	return (
    <div className="login">
      <span className={`login__logo ${satisfy.className}`}>
        Absencia
      </span>

      <div className="login__formContainer">
        <LoginForm />
      </div>
    </div>
  );
}