

import LoginPage from '@/components/pages/LoginPage';
import ProviderLoginPage from '@/components/pages/ProviderLoginPage';
import { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
    title: "HC | Provider Login",
  };

  
const ProviderLogin = ({searchParams:{callbackUrl}}:any) => {

    return (
        <div>
            <ProviderLoginPage callbackUrl={callbackUrl || "/profile"} />
           
        </div>
    );
};

export default ProviderLogin;