import React from 'react'

export default function LoginForm() {
  return (
    <form className="font-Vazirmatn flex flex-col gap-y-2">
      <div className="flex flex-col">
        <label className="mb-1 text-center">نام و نام خانوادگی</label>
        <input
          type="text"
          className="bg-yellow-300 rounded-full outline-yellow-500 text-gray-500 text-center"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-1 text-center">رمز عبور خود را وارد کنید</label>
        <input
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
      <Link className="text-right" to={"/signup"}></Link>
    </form>
  )
}
