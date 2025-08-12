import React from "react";

export default function SignUpForm() {
  return (
    <form className="font-Vazirmatn">
      <div className="flex gap-x-4">
        <label className="font-regular text-">نام و نام خانوادگی</label>
        <input type="text" className="bg-yellow-300 rounded-full" />
      </div>
    </form>
  );
}
