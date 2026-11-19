import {ReactNode} from "react";

type FormFooterProps = {
  children: ReactNode;
}

export default function FormFooter({children}: FormFooterProps) {
	return (
    <div className="form-footer">
      {children}
    </div>
  );
}