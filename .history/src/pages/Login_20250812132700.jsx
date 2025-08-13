import React from "react";
import AppLayout from "../layout/AppLayout";
import SignUpForm from "../features/signUp/SignUpForm";

export default function Login() {
  return (
    <AppLayout>
      <div className="w-2/3 sm:w-1/2 mx-auto p-5">
        <SignUpForm/>
      </div>
    </AppLayout>
  );
}
