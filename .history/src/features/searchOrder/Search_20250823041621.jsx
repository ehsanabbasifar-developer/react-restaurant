import React from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [query]
  const navigate = useNavigate()
  return (
    <input
    onSubmit={() => navigate("order/")}
      type="search"
      placeholder="کد تراکنش خود را وارد کنید"
      className="bg-yellow-100 p-2 rounded-2xl placeholder:text-center
       outline-yellow-400 placeholder:text-gray-400 w-full"

    />
  );
}
