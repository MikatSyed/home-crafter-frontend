import * as yup from "yup";

const serviceSchema = yup.object().shape({
  serviceName: yup
    .string()
    .required("Service Name is required"),
  
  regularPrice: yup
    .number()
    .typeError("Price must be a number")
    .required("Price is required")
    .positive("Price must be a positive number"),
  
  location: yup
    .string()
    .required("Location is required"),
  
  duration: yup
    .string()
    .required("Duration is required"),
  
  categoryId: yup
    .string()
    .required("Category is required"),
  
  description: yup
    .string()
    .required("Description is required"),
  
  videoUrl: yup
    .string()
    .url("Video URL must be a valid URL")
    .nullable(),  // Optional field
  keyFeature1: yup
    .string()
    .nullable(),  // Optional field
  keyFeature2: yup
    .string()
    .nullable(),  // Optional field
  keyFeature3: yup
    .string()
    .nullable(),  // Optional field
  keyFeature4: yup
    .string()
    .nullable(),  // Optional field
  
    
});

export default serviceSchema;
