import {
  FormProvider,
  SubmitHandler,
  UseFormProps,
  UseFormReturn,
  useForm,
} from "react-hook-form";

type FormProps<TFormValues> = {
  className?: string;
  onSubmit?: SubmitHandler<TFormValues>;
  children: React.ReactNode;
  useFormProps?: UseFormProps<TFormValues>;
  formMethods?: undefined;
};

type FormWithFormMethodsProps<TFormValues> = {
  className?: string;
  onSubmit?: SubmitHandler<TFormValues>;
  children: React.ReactNode;
  useFormProps?: undefined;
  formMethods: UseFormReturn<TFormValues>;
};

export const Form = <TFormValues extends Record<string, unknown>>({
  onSubmit,
  children,
  className,
  formMethods,
  useFormProps,
}:
  | FormProps<TFormValues>
  | FormWithFormMethodsProps<TFormValues>): React.ReactElement => {
  const defaultMethods = useForm<TFormValues>(useFormProps);

  const methods = formMethods ? formMethods : defaultMethods;

  return (
    <FormProvider {...methods}>
      <form
        className={className}
        onSubmit={onSubmit ? methods.handleSubmit(onSubmit) : undefined}
      >
        {children}
      </form>
    </FormProvider>
  );
};
