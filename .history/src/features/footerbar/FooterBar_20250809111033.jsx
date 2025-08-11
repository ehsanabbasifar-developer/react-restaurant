import React from "react";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
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
      <ul className="flex flex-row mx-auto py-2">
        <li>
          <a href="#">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="#">
            <FaTelegram />
          </a>
        </li>
        <li>
          <a href="#">
            <FaWhatsapp />
          </a>
        </li>
        <li>
          <a href="#">
            <FaDiscord />
          </a>
        </li>
        <li>
          <a href="#">
            <FaTwitter />
          </a>
        </li>
      </ul>
      <p className="text-center">
        © {new Date().getFullYear()} react isfahan. All rights reserved.
      </p>
    </div>
  );
}
