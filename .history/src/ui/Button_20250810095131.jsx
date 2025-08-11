import React from "react";

export default function Button({ message, click ,style }) {
  return (
    <button
      className= {}
      type="button"
      onClick={click}
    >
      {message}
    </button>
  );
}
