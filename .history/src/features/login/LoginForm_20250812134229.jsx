import React from 'react'

export default function LoginForm() {
  return (
    <form className="font-Vazirmatn flex flex-col gap-y-2">
      <div className="flex flex-col">
        <label className="mb-1 text-center"> نام و نام خانوادگی</label>
        <input
          type="text"
          className="bg-yellow-300 rounded-full outline-yellow-500 text-gray-500 text-center"
        />
      </div>
    </form>
  )
}
