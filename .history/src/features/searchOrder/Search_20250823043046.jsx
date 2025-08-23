import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCurrentUser from "../login/useCurrentUser";

export default function Search() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { isAuth } = useCurrentUser();
  function handleSubmit(e) {
    e.preventDefault();
  if (isAuth) {
    navigate(`/order/${query}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="کد تراکنش خود را وارد کنید"
        className="bg-yellow-100 p-2 rounded-2xl placeholder:text-center
       outline-yellow-400 placeholder:text-gray-400 w-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
