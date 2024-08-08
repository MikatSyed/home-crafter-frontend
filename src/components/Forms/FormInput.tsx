import React from "react";
import { useFormContext, Controller, FieldValues } from "react-hook-form";
import { getErrorMessageByPropertyName } from "@/utils/schema-validator";

interface FormInputProps {
  name: string;
  type?: string;
  size?: any;
  value?: string;
  id?: string;
  placeholder?: string;
  validation?: any;
  label?: string;
  className?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  type = "text",
  size,
  value,
  id,
  placeholder,
  validation,
  label,
  className
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<FieldValues>();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <div className="relative z-0 w-full mb-5 group">
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <>
            <input
              type={type}
              size={size}
              id={id}
              placeholder=" "
              {...field}
              value={value !== undefined ? value : field.value ?? ""}
              className={`block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b ${errorMessage ? 'border-red-500' : 'border-gray-200'} appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 ${errorMessage ? 'focus:border-red-500' : 'focus:border-blue-600'} peer ${className}`}
            />
            <label
              htmlFor={id}
              className={`peer-focus:font-medium absolute text-sm ${errorMessage ? 'text-red-500' : 'text-black'} dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto ${errorMessage ? 'peer-focus:text-red-500' : 'peer-focus:text-blue-600'} peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
            >
              {label }
            </label>
          </>
        )}
      />
      {errorMessage && (
        <p className="text-red-500 mt-1 text-sm">{errorMessage}</p>
      )}
    </div>
  );
};

export default FormInput;
