import React from "react";

export default function Button({ message, click ,class }) {
  return (
    <button
      className=`rounded-full bg-yellow-500 p-2 ``
      type="button"
      onClick={click}
    >
      {message}
    </button>
  );
}
