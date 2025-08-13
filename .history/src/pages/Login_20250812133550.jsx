import React from "react";
import AppLayout from "../layout/AppLayout";
import LoginForm from "../features/login/"
export default function Login() {
  return (
    <AppLayout>
      <div className="w-2/3 sm:w-1/2 mx-auto p-5"></div>
      <LoginForm/>
    </AppLayout>
  );
}
