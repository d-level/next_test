import FormField from "@/app/_components/FormField";

import "@/styles/_components/Select.css";

type SelectProps = {
  name: string;
  label: string;
  placeholder?: string;
  value: any;
  required: boolean;
  errors: Record<string, string>;
  options: Record<any, string>;
  onChange: (value: any) => void;
}

export default function Select({name, label, value, placeholder, required, errors, options, onChange}: SelectProps) {
	return (
    <FormField label={label} required={required} errors={errors}>
      <select name={name} defaultValue={value ?? placeholder} onChange={onChange} className={`select ${!value ? "select__placeholder" : ""}`}>
        {placeholder && (
          <option disabled={true}>
            {placeholder}
          </option>
        )}

        {Object.entries(options).map(([key, value]) => (
          <option value={key} key={key}>
            {value}
          </option>
        ))}
      </select>
    </FormField>
  );
}