import React from "react";

export default function SignUpForm() {
  return (
    <form className="font-Vazirmatn flex ">
     <div className="flex flex-col gap-y-2">
      <label>نام و نام خانوادگی</label>
      <label>شماره تلفن</label>
      <label>استان خود را استان کنید</label>
      <label>ادرس خود را وارد کنید</label>
     </div>
     <div className="flex flex-col">
      <input type="text" className="bg-yellow-300 rounded-full"/>
      <input type="text" className="bg-yellow-300 rounded-full"/>
     </div>
    </form>
  );
}
