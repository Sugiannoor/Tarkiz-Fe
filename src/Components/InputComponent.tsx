import { Input } from "@material-tailwind/react";

type InputProps = {
  label?: string;
  id: string;
  type?: string | "text" | "number" | "email" |"date";
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
  type,
  value,
}: InputProps) => {
  return (
    <div className={className}>
      <label htmlFor={`${id}`} className={classnameLabel}>
        {label}
      </label>
      <Input
        type= {type || "text"}
        crossOrigin={""}
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
