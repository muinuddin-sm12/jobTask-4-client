import LoginForm from "@/components/module/auth/login/LoignForm";
import React, { Suspense } from "react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
};

export default LoginPage;
