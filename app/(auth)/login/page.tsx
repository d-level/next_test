import {satisfy} from "@/app/_fonts";
import LoginForm from "@/app/(auth)/login/_components/LoginForm";

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