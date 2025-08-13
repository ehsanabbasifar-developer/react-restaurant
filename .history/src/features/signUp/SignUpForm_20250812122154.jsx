import React from "react";

export default function SignUpForm() {
  return (
    <form className="font-Vazirmatn">
      <div className="flex gap-x-4 items-center justify-center">
        <label className="font-regular">نام و نام خانوادگی</label>
        <input type="text" className="bg-yellow-300 rounded-full" />
      </div>
      <div className=" gap-x-4">
        <label className="font-regular">شماره همراه</label>
        <input type="number" className="bg-yellow-300 rounded-full" />
      </div>
    </form>
  );
}
