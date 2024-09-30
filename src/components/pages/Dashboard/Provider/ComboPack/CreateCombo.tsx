"use client";
import React, { useRef, useState } from "react";
import { FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import Spinner from "@/components/UI/Spinner";
import { yupResolver } from "@hookform/resolvers/yup";
import comboSchema from "@/schemas/combo-pack";
import { useClickAway } from "react-use";
import { useAddComboMutation } from "@/redux/api/comboPackApi";
import { useProviderServicesQuery } from "@/redux/api/servicesApi";
import { ShowToast } from "@/components/UI/ShowToast";

interface CreateCategoryFormProps {
  show: boolean;
  onClose: () => void;
}

const CreateCombo: React.FC<CreateCategoryFormProps> = ({ show, onClose }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [mode, setMode] = useState("");
  const [selectedServices, setSelectedServices] = useState<
    { id: number; serviceName: string; offeredPrice: number; regularPrice: number }[]
  >([]);
  
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState<string>("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modeError, setModeError] = useState<boolean>(false);

  useClickAway(dropdownRef, () => setDropdownOpen(false));

  const [addCombo] = useAddComboMutation();
  const { data } = useProviderServicesQuery(undefined);
  const services = data?.data;

  const validateServiceCount = () => {
    let requiredServiceCount = 0;

    switch (mode) {
      case 'Basic':
        requiredServiceCount = 3;
        break;
      case 'Standard':
        requiredServiceCount = 5;
        break;
      case 'Premium':
        requiredServiceCount = 7;
        break;
      default:
        return true;
    }

    return selectedServices.length >= requiredServiceCount;
  };

  // Form submission handler
  const onSubmit = async (values: any) => {
    if (!mode) {
      setModeError(true);
      return;
    } else {
      setModeError(false);
    }

    if (!validateServiceCount()) {
      toast.error(`Please select at least ${mode === 'Basic' ? 3 : mode === 'Standard' ? 5 : 7} services for ${mode} mode.`);
      return;
    }

    const selectedServiceIds = selectedServices.map((service) => service.id);
    values.mode = mode;
    values.selectedServices = selectedServiceIds;
    values.amount = totalPrice;

    setLoading(true);
    const toastId = toast.loading('Posting...');

    try {
      const res =  await addCombo(values).unwrap();
      if(res?.data){
        ShowToast({
            message: res?.message
           })
           setTimeout(()=>{
            onClose();
           },2000)
           
      }

      // Reset form state
      setSelectedServices([]);
      setMode('');
      setDiscount('');
      setTotalPrice(0);
    } catch (err: any) {
      console.error(err);
      toast.error("Failed to create category", {
        style: {
          borderRadius: "10px",
          background: "#e74c3c",
          color: "#fff",
        },
        duration: 2000,
      });
    } finally {
      setLoading(false);
      toast.dismiss(toastId);
    }
  };

  // Calculate total price based on selected services and discount
  const calculateTotalPrice = (services: any[], currentDiscount: number): number => {
    const totalServicePrice = services.reduce((total, service) => {
      const price = service.offeredPrice > 0 ? service.offeredPrice : service.regularPrice;
      return total + (price || 0); // Use 0 if price is undefined or invalid
    }, 0);

    const discountAmount = totalServicePrice * (currentDiscount / 100);
    return totalServicePrice - discountAmount;
  };

  // Update total price and discount
  const handleDiscountChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;

    if (value === "") {
      setDiscount("");
      setTotalPrice(calculateTotalPrice(selectedServices, 0));
    } else {
      const discountValue = parseFloat(value);
      if (!isNaN(discountValue) && discountValue >= 0) {
        setDiscount(value);
        setTotalPrice(calculateTotalPrice(selectedServices, discountValue));
      } else {
        // Handle invalid discount value
        toast.error("Please enter a valid discount percentage.");
      }
    }
  };

  // Handle service selection
  const handleServiceChange = (service: any, isChecked: boolean): void => {
    let updatedServices;

    if (isChecked) {
      updatedServices = [...selectedServices, service];
    } else {
      updatedServices = selectedServices.filter((s) => s.id !== service.id);
    }

    setSelectedServices(updatedServices);
    // Calculate total price immediately after selection
    setTotalPrice(calculateTotalPrice(updatedServices, parseFloat(discount) || 0)); // Default to 0 if discount is NaN
  };

  const handleModeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMode(event.target.value);
    setModeError(false); // Hide error when mode changes
  };

  if (!show) return null;

  // Determine the required service count based on the mode
  const requiredServiceCount = mode === 'Basic' ? 3 : mode === 'Standard' ? 5 : mode === 'Premium' ? 7 : 0;

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Add New Combo</h3>
            <button
              onClick={onClose}
              className="text-indigo-600 border border-indigo-600 hover:bg-indigo-600 hover:text-white rounded-full p-2 hover:bg-opacity-90 transition"
            >
              <FiX size={18} />
            </button>
          </div>
          <Form submitHandler={onSubmit} resolver={yupResolver(comboSchema)}>
            <div className="mb-4">
              <FormInput name="comboName" label="Combo Name" type="text" />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Select Mode</label>
              <select
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                value={mode}
                onChange={handleModeChange} // Updated event handler
              >
                <option value="">Select Mode</option>
                <option value="Basic">Basic</option>
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
              </select>
            </div>
            {/* Show error message if mode is not selected */}
            {modeError && (
              <div className="mb-4 text-sm text-red-600">
                Mode is Required
              </div>
            )}
            {/* Custom Dropdown with Checkboxes */}
            <div className="mb-4">
              <h4 className="font-semibold">Select Services</h4>
              <div className="relative" ref={dropdownRef}>
                <div
                  className="cursor-pointer border border-gray-300 rounded-md p-2 flex justify-between items-center"
                  onClick={() => setDropdownOpen((prev) => !prev)}
                >
                  <span>
                    {selectedServices.length > 0
                      ? selectedServices.map((s) => s.serviceName).join(", ")
                      : "Select Services"}
                  </span>
                  <span className="ml-2">
                    {dropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
                  </span>
                </div>
                {dropdownOpen && (
                  <div className="absolute z-10 mt-1 w-full max-h-40 overflow-y-auto border border-gray-300 rounded-md bg-white shadow-lg p-2">
                    {services.map((service: any) => (
                      <div key={service.id} className="flex items-center mb-2">
                        <input
                          type="checkbox"
                          id={service.name}
                          checked={selectedServices.some((s) => s.id === service.id)}
                          onChange={(e) => handleServiceChange(service, e.target.checked)}
                          className="mr-2"
                        />
                        <label
                          htmlFor={service.name}
                          className="text-gray-700 flex justify-between w-full"
                        >
                          <span>{service.serviceName}</span>
                          <span className="font-semibold text-gray-900">
                            ${service.offeredPrice ? service.offeredPrice : service.regularPrice}
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Show the message only if selected services are less than required */}
            {mode && selectedServices.length < requiredServiceCount && (
              <div className="mb-4 text-sm text-gray-900">
                Please select at least {requiredServiceCount} services for the {mode} mode.
              </div>
            )}

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Total Price
              </label>
              <input
                type="text"
                value={totalPrice.toFixed(2)}
                readOnly
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Discount Percentage
              </label>
              <input
                type="number"
                value={discount}
                onChange={handleDiscountChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                placeholder="Enter discount percentage"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="mr-4 px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`text-[#4f46e5] hover:bg-[#4f46e5] hover:text-white inline-flex items-center justify-center px-4 py-2 rounded text-md border border-[#4f46e5] ${
                  loading
                    ? "w-[150px] bg-[#4f46e5] text-white opacity-50 cursor-not-allowed inline-flex justify-center items-center"
                    : ""
                }`}
                disabled={loading}
              >
                {loading ? <Spinner /> : "Create Category"}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CreateCombo;