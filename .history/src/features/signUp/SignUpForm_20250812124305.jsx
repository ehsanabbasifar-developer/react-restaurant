import React from "react";

export default function SignUpForm() {
  return (
    <form className="font-Vazirmatn flex gap-x-4 ">
      <div className="flex flex-col gap-y-2">
        <label>نام و نام خانوادگی</label>
        <label>شماره تلفن</label>
        <label>استان خود را استان کنید</label>
        <label>ادرس خود را وارد کنید</label>
      </div>
      <div className="flex flex-col gap-y-2">
        <input
          type="text"
          className="bg-yellow-300 rounded-full outline-yellow-500 text-gray-500 text-center"
        />
        <input
          type="number"
          className="bg-yellow-300 rounded-full  outline-yellow-500  text-gray-500 text-center"
        />
        <input
          type="text"
          className="bg-yellow-300 rounded-full  outline-yellow-500  text-gray-500 text-center"
        />
        <textarea className="bg-yellow-300 resize-none  outline-yellow-500 text-gray-" />
      </div>
    </form>
  );
}
