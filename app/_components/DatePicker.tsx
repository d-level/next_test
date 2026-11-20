import FormField from "@/app/_components/FormField";

type SelectProps = {
  name: string;
  label: string;
  placeholder?: string;
  required: boolean;
  errors: Record<string, string>;
}

export default function DatePicker({name, label, placeholder, required, errors}: SelectProps) {
	return (
    <FormField label={label} required={required} errors={errors}>
      DatePicker: {name}, {placeholder}
    </FormField>
  );
}