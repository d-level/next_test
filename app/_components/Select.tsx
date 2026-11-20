import FormField from "@/app/_components/FormField";

type SelectProps = {
  name: string;
  label: string;
  placeholder?: string;
  required: boolean;
  errors: Record<string, string>;
  options: Record<any, string>;
}

export default function Select({name, label, placeholder, required, errors, options}: SelectProps) {
	return (
    <FormField label={label} required={required} errors={errors}>
      <select name={name}>
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