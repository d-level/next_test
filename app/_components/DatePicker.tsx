import _DatePicker from "react-datepicker";

import FormField from "@/app/_components/FormField";

import "react-datepicker/dist/react-datepicker.css";

type SelectProps = {
  name: string;
  label: string;
  value: Date|null;
  placeholder?: string;
  required: boolean;
  errors: Record<string, string>;
  onChange: (date: Date|null) => void;
}

export default function DatePicker({name, label, value, placeholder, required, errors, onChange}: SelectProps) {
	return (
    <FormField label={label} required={required} errors={errors}>
      <_DatePicker
        name={name}
        dateFormat="yyyy-MM-dd"
        selected={value}
        placeholderText={placeholder}
        required={required}
        onChange={onChange}
      />
    </FormField>
  );
}