import React from "react";

export default function Button({ message, onclick }) {
  return (
    <button className="rounded-full bg-yellow-" type="button" onclick={onclick ? onclick : undefined}>
      {message}
    </button>
  );
}
