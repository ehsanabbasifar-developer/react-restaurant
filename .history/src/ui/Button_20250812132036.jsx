import React from "react";
import { useNavigate } from "react-router-dom";

export default function Button({ message, path, style }) {
  const navigate = useNavigate()
  return (
    <button
      className={`rounded-full bg-yellow-400 p-2 mt-2 text-gray-700 hover:bg-yellow-500 ${style ? style : ""}`}
      type="button"
      onClick={() => navigate(oa)}
    >
      {message}
    </button>
  );
}
