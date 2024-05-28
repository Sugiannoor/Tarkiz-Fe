import { Input } from "@material-tailwind/react";
import type { InputProps } from "@material-tailwind/react";

type InputPropsCustom = InputProps & {
  label?: string;
  type?: string | "text" | "number" | "email" | "date";
  classnameLabel?: string;
  className: string;
};

const InputComponent = ({
  id,
  label,
  classnameLabel,
  className,
}: InputPropsCustom) => {
  return (
    <div className={className}>
      <label htmlFor={`${id}`} className={classnameLabel}>
        {label}
      </label>
      <Input crossOrigin={""} />
    </div>
  );
};

export default InputComponent;
