import React from "react";
import AppLayout from "../layout/AppLayout";
import LoginForm from "../features/login/LoginForm";
export default function Login() {
  return (
    <AppLayout>
      <main>
        <div className=" mx-auto p-5 flex justify-center items-center">
          <LoginForm />
        </div>
      </main>
    </AppLayout>
  );
}
