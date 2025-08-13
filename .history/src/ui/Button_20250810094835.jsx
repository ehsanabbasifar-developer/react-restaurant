import React from "react";

export default function Button({ message, click }) {
  return (
    <button
      className="rounded-full bg-yellow-500"
      type="button"
      onclick={click}
    >
      {message}
    </button>
  );
}
