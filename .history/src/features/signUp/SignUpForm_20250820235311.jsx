import React from "react";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function SignUpForm() {
  const { register, handleSubmit, getValues, formState, reset } = useForm();
  return (
    <form className="font-Vazirmatn flex flex-col gap-y-2">
      <div className="flex flex-col">
        <label htmlFor="fullName" className="mb-1 text-center">
          نام و نام خانوادگی
        </label>
        <input
        {...register("fullName")}
          id="fullName"
          type="text"
          className="bg-yellow-300 rounded-full outline-yellow-500 text-gray-500 text-center"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="mb-1 text-center">
          ایمیل خود را وارد کنید
        </label>
        <input
        {...register("email")}
          id="email"
          type="email"
          className="bg-yellow-300 rounded-full outline-yellow-500 text-gray-500 text-center"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-1 text-center" htmlFor="password">
          رمز عبور خود را انتخاب کنید
        </label>
        <input
        {...register("password")}
          type="password"
          id="password"
          className="bg-yellow-300 rounded-full outline-yellow-500 text-gray-500 text-center"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-center" htmlFor="phone">
          شماره تلفن
        </label>
        <input
        {...register("phone")}
          id="phone"
          type="number"
          className="bg-yellow-300 rounded-full outline-yellow-500 text-gray-500 text-center"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-center" htmlFor="city">
          استان خود را استان کنید
        </label>
        <input
        {...register("city")}
          id="city"
          type="text"
          className="bg-yellow-300 rounded-full outline-yellow-500 text-gray-500 text-center"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-center" htmlFor="address">
          ادرس خود را وارد کنید
        </label>
        <textarea
        {...register("address")}
          id="address"
          className="bg-yellow-300 resize-none text-right outline-yellow-500 text-gray-500"
        />
      </div>

      <button
        type="submit"
        className="bg-yellow-400 rounded-full mt-4  px-6 py-2"
      >
        ثبت نام
      </button>
      <Link className="text-right" to={"/login"}>
        قبلا ثبت نام کرده اید ؟ ورود
      </Link>
    </form>
  );
}
