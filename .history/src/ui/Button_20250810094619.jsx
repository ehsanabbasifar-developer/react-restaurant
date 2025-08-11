import React from "react";

export default function Button({ message, onclick }) {
  return (
    <button className="" type="button" onclick={onclick ? onclick : undefined}>
      {message}
    </button>
  );
}
