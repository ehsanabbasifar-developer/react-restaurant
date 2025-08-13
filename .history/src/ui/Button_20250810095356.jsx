import React from "react";

export default function Button({ message, click, style }) {
  return (
    <button
      className={`rounded-full bg-yellow-400 p-2 mt-2 text-gray-700 hover:bg-yellow-600 ${style ? style : ""}`}
      type="button"
      onClick={click}
    >
      {message}
    </button>
  );
}
