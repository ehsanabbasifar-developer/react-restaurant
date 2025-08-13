import React from "react";

export default function SignUpForm() {
  return (
    <form className="font-Vazirmatn flex gap-x-2 ">
     <div className="flex flex-col gap-y-2">
      <label>نام و نام خانوادگی</label>
      <label>شماره تلفن</label>
      <label>استان خود را استان کنید</label>
      <label>ادرس خود را وارد کنید</label>
     </div>
     <div className="flex flex-col gap-y-2">
      <input type="text" className="bg-yellow-300 rounded-full"/>
      <input type="number" className="bg-yellow-300 rounded-full"/>
      <input type="text" className="bg-yellow-300 rounded-full"/>
     </div>
    </form>
  );
}
