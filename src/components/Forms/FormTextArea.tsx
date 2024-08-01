import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { getErrorMessageByPropertyName } from "@/utils/schema-validator";


interface FormTextAreaProps {
  name: string;
  label?: string;
  rows?: number;
  value?: string;
  placeholder?: string;
}

const FormTextArea: React.FC<FormTextAreaProps> = ({ 
  name, 
  label, 
  rows = 3, 
  value, 
  placeholder 
}) => {
  const { control, formState: { errors } } = useFormContext();
  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <>
     {label && (
        <label
          htmlFor={name}
          className="block text-gray-600 font-medium mb-1  "
        >
          {label}
        </label>
      )}

      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <textarea
            id={name}
           
            rows={rows}
            placeholder={placeholder}
            className="mt-1 p-2 w-full border rounded-md"
            {...field}
            defaultValue={value}
          />
        )}
      />
      {errorMessage && (
        <small className="text-red-500 mt-1">{errorMessage}</small>
      )}
    </>
  );
};

export default FormTextArea;
