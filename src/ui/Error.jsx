import React from "react";

export default function Error({ children }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <p className="font-bold">{children} </p>
    </div>
  );
}
