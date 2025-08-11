import React from "react";
import { FaInstagram } from "react-icons/fa";
export default function FooterBar() {
  return (
    <div className="bg-yellow-400 mt-36 p-3">
      <h3
        className="text-center font-bold 
      text-lg"
      >
        رستوران ری اکت اصفهان
      </h3>
      <div></div>
      <p className="text-center">
        © {new Date().getFullYear()} react isfahan. All rights reserved.
      </p>
    </div>
  );
}
