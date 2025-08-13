import React from "react";

export default function Button({ message, onclick }) {
  return (
    <button
      className="rounded-full bg-yellow-500"
      type="button"
      onclick={onclick}
    >
      {message}
    </button>
  );
}
