import {ReactNode} from "react";

import "@/styles/_components/FormField.css";

type FormFieldProps = {
  label: string;
  required: boolean;
  errors: Record<string, string>;
  children: ReactNode;
}

export default function FormField({label, required, errors, children}: FormFieldProps) {
	return (
    <label className="form-field">
      <span className="form-field__label">
        {label}

        {required && (
          <span className="form-field__label__required">
            *
          </span>
        )}
      </span>

      {children}

      {"required" in errors && (
        <span className="field__error">
          Ce champ est requis.
        </span>
      )}

      {"api" in errors && (
        <span className="field__error">
          {errors.api}
        </span>
      )}
    </label>
  );
}