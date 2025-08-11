import React from "react";

export default function Button({ message, click ,style }) {
  return (
    <button
      className= `rounded-full ` 
      type="button"
      onClick={click}
    >
      {message}
    </button>
  );
}
