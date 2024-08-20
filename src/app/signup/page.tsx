import SignupPage from "@/components/pages/SignupPage";
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "HC | Signup",
};

const Signup = () => {

  return (
    <>
     <SignupPage/>
    </>
  );
};

export default Signup;
