import {ChangeEventHandler} from "react";

import FormField from "@/app/_components/FormField";

class TextInputProps {
  type!: string;
  name!: string;
  label!: string;
  value!: string;
  placeholder?: string;
  required!: boolean;
  autoComplete?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export default function TextInput({type, name, label, value, placeholder, required, autoComplete, onChange}: TextInputProps) {
	return (
    <FormField
      label={label}
      required={required}
      errors={{}}
    >
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        className="text-input"
        onChange={onChange}
      />
    </FormField>
  );
}