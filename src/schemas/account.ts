import * as yup from "yup";

const accountSchema = yup.object().shape({
  fName: yup.string().required("First Name is required"),
  mName: yup.string().required("Middle Name is required"),
  lName: yup.string().required("Last Name is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").max(32, "Password must not exceed 32 characters").required("Password is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  gender: yup.string().required("Gender is required"),
  accountType: yup.string().required("Account Type is required"),
  contactNo: yup.string().required("Phone is required"),
  emergencyContactNo: yup.string().required("Emergency Phone is required"),
  dob: yup.string().required("Date of Birth is required"),
  blood: yup.string().required("Blood is required"),
  occupation: yup.string().required("Occupation is required"),
  citizen: yup.string().required("Citizen is required"),
  presentAddress: yup.string().required("Present Address is required"),
  parmanentAddress: yup.string().required("Permanent Address is required"),
  gardianName: yup.string().required("Guardian Name is required"),
  relationship: yup.string().required("Relationship is required"),
  gardianOccupation: yup.string().required("Guardian Occupation is required"),
  gardianPhone: yup.string().required("Guardian Phone is required"),
  gardianAddress: yup.string().required("Guardian Address is required"),
});

export default accountSchema;
