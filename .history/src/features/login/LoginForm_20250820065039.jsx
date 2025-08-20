import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("myehsanabbasifar@gmail.com");
  const [password, setPassword] = useState();
 const {mutate} =   useMutation({
  mutationFn : log
 })
  return (
    <form className="font-Vazirmatn flex flex-col gap-y-2">
      <div className="flex flex-col">
        <label className="mb-1 text-center">ایمیل خود را وارد کنید</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="bg-yellow-300 rounded-full outline-yellow-500 text-gray-500 text-center"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-1 text-center">رمز عبور خود را وارد کنید</label>
        <input
          value={password}
          onChange={(e) => setPassword(Number(e.target.value))}
          type="password"
          className="bg-yellow-300 rounded-full outline-yellow-500 text-gray-500 text-center"
        />
      </div>
      <button
        type="submit"
        className="bg-yellow-400 rounded-full mt-4  px-6 py-2"
      >
        ورود به حساب کاربری
      </button>
      <Link className="text-right" to={"/signup"}>
        اکانت ندارید ؟‌ثبت نام
      </Link>
    </form>
  );
}
