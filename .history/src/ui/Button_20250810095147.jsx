import React from "react";

export default function Button({ message, click ,style }) {
  return (
    <button
      className= {`rounded-full bg-yellow-`}
      type="button"
      onClick={click}
    >
      {message}
    </button>
  );
}
