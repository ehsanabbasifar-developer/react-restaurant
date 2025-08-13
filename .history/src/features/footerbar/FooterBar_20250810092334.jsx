import React from "react";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import CopyRight from "./CopyRight";
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
        <li className="mx-2">
          <a href="#">
            <FaInstagram />
          </a>
        </li>
        <li className="mx-2">
          <a href="#">
            <FaTelegram />
          </a>
        </li>
        <li className="mx-2">
          <a href="#">
            <FaWhatsapp />
          </a>
        </li>
        <li className="mx-2">
          <a href="#">
            <FaDiscord />
          </a>
        </li>
        <li className="mx-2">
          <a href="#">
            <FaTwitter />
          </a>
        </li>
      </ul>
<CopyRight/>
    </div>
  );
}
