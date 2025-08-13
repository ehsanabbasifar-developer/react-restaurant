import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
export default function FooterBar() {
  return (
    <div className="flex flex-col">
      <h3
        className="text-center font-bold 
      text-lg"
      >
        رستوران ری اکت اصفهان
      </h3>
      <ul>
        <li>
            <a href="#"><FaInstagram/></a>
            
            <a href="#"><FaTelegram/></a>
            <a href="#"><FaTelegram/></a>
        </li>
      </ul>
      <p className="text-center">
        © {new Date().getFullYear()} react isfahan. All rights reserved.
      </p>
    </div>
  );
}
