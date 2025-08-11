import React from "react";

export default function Button({ message, onclick }) {
  return (
    <button className="rounded-full b" type="button" onclick={onclick ? onclick : undefined}>
      {message}
    </button>
  );
}
