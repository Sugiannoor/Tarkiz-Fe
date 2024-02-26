import { Input } from "@material-tailwind/react";

type InputProps = {
  label?: string;
  id: string;
  classnameLabel?: string;
  placeholder?: string;
  className ?: string
  value?: string;
  disabled?: boolean;
  readOnly?: boolean;
  handleChange?: () => void;
};

const InputComponent = ({
  id,
  label,
  classnameLabel,
  placeholder,
  handleChange,
  className,
  readOnly,
  disabled,
  value,
}: InputProps) => {
  return (
    <div className={className}>
      <label htmlFor={`${id}`} className={classnameLabel}>
        {label}
      </label>
      <Input
        disabled={disabled}
        name={id}
        id={id}
        variant="static"
        placeholder={`${placeholder}`}
        onChange={handleChange}
        value={value}
        readOnly={readOnly}
      />
    </div>
  );
};

export default InputComponent;
