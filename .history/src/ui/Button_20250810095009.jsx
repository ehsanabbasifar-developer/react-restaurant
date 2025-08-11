import React from "react";

export default function Button({ message, click ,class }) {
  return (
    <button
      className= `e` 
      type="button"
      onClick={click}
    >
      {message}
    </button>
  );
}
