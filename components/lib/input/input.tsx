import { ErrorMessage } from "@hookform/error-message";
import {
  RegisterOptions,
  UseFormReturn,
  useFormContext,
} from "react-hook-form";

type BaseInputProps = {
  name: string;
  label: React.ReactNode;
  type?: "text" | "password" | "date" | "time" | "number" | "datetime-local";
  srLabel?: boolean;
  placeholder?: string;
  autoComplete?: string;
  viewPassword?: boolean;
  leadingIcon?: React.VFC<{ className: string }>;
};

type InputProps = {
  defaultValue?: string;
  rules?: RegisterOptions | ((formContext: UseFormReturn) => RegisterOptions);
  value?: never;
  disabled?: boolean;
  onChange?: never;
} & BaseInputProps;

const Input = ({
  defaultValue,
  autoComplete,
  name,
  label,
  placeholder,
  disabled,
  rules,
  leadingIcon: LeadingIcon,
  type = "text",
  srLabel = false,
}: InputProps): React.ReactElement => {
  const context = useFormContext();
  const {
    register,
    formState: { errors },
  } = context;
  const isError = errors[name] ? true : false;

  return (
    <div>
      <label
        htmlFor={name}
        className={
          srLabel ? "sr-only" : "flex items-center font-bold text-sm mb-3"
        }
      >
        {label}
      </label>
      <div className="relative">
        {LeadingIcon ? (
          <div className="absolute inset-y-0 left-0 ml-3 flex items-center pointer-events-none">
            <LeadingIcon className="h-5 w-5 text-gray-400" />
          </div>
        ) : null}
        <input
          type={type}
          disabled={disabled}
          className={`${LeadingIcon ? "pl-10" : ""} ${
            isError
              ? "border-red placeholder-red placeholder-opacity-70 text-red focus:ring-red"
              : "border-gray-200 placeholder-gray-200 focus:border-green-300 focus:ring-green-300"
          } transition block w-full text-sm rounded-xl font-bold`}
          id={name}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={isError}
          defaultValue={defaultValue}
          {...register(
            name,
            typeof rules === "function" ? rules(context) : rules
          )}
        />
      </div>
      <ErrorMessage
        name={name}
        errors={errors}
        as={
          <p
            role="alert"
            className="mt-2 ml-1 text-xs text-red text-opacity-70 text-left whitespace-pre-line"
          />
        }
      />
    </div>
  );
};
export { Input };
export type { InputProps };
