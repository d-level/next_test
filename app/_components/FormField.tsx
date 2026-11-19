import {ReactNode} from "react";

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
          <span>
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