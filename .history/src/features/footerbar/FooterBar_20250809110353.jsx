import React from "react";
import { FaInstagram } from "react-icons/fa";
export default function FooterBar() {
  return (
    <div className=>
      <h3
        className="text-center font-bold 
      text-lg"
      >
        رستوران ری اکت اصفهان
      </h3>
      
      <p className="text-center">
        © {new Date().getFullYear()} react isfahan. All rights reserved.
      </p>
    </div>
  );
}
