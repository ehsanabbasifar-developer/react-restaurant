import React from "react";
import AppLayout from "../layout/AppLayout";
import LoginForm from "../features/login/LoginForm";
import SignUpForm from "../features/signUp/SignUpForm";

export default function Login() {
  return (
    <AppLayout>
      <div className="flex  mx-auto p-5">
        <SignUpForm/>
      </div>
    </AppLayout>
  );
}
