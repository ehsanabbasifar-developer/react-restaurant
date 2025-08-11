import React from "react";

export default function Button({ message, click, style }) {
  return (
    <button
      className={`rounded-full bg-yellow-500 p-2 mt-2 text-gray ${style ? style : ""}`}
      type="button"
      onClick={click}
    >
      {message}
    </button>
  );
}
