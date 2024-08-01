

import LoginPage from '@/components/pages/LoginPage';
import { Metadata } from 'next';
import React from 'react';
import { IoLogInSharp } from 'react-icons/io5';

export const metadata: Metadata = {
    title: "Tab Startup| Login",
  };

  
const Login = () => {

    return (
        <div>
            <LoginPage />
           
        </div>
    );
};

export default Login;