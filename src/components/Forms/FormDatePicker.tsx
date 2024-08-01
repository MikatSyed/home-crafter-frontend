import React, { ChangeEvent } from "react";
import {
  Controller,
  useFormContext,
  UseFormSetValue,
} from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";
import { getErrorMessageByPropertyName } from "@/utils/schema-validator";



interface FormDatePickerProps {
  name: string;
  label?: string;
  onChange?: (date: Dayjs, formattedDate: string) => void;
  size?: string;
  className?: string;
}

const FormDatePicker: React.FC<FormDatePickerProps> = ({
  name,
  label,
  onChange,
  size = "large",
  className,
}) => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedDate = dayjs(e.target.value);
    onChange?.(selectedDate, selectedDate.format("YYYY-MM-DD"));
    setValue(name, selectedDate.format("YYYY-MM-DD"));
  };

  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-gray-600 block mb-2 "
        >
          {label}
        </label>
      )}

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            type="date"
            value={field.value ? dayjs(field.value).format("YYYY-MM-DD") : ""}
            onChange={handleOnChange}
            className={`${className}`}
          />
        )}
      />
      {errorMessage && <p className="text-red-500 mt-1">{errorMessage}</p>}
    </div>
  );
};

export default FormDatePicker;
