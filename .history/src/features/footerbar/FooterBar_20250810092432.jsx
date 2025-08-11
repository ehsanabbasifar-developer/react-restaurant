import React from "react";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import CopyRight from "./CopyRight";
import SocialMedia from "./SocialMedia";
export default function FooterBar() {
  return (
    <div className="flex flex-col">
      <h3
        className="text-center font-bold 
      text-lg"
      >
        رستوران ری اکت اصفهان
      </h3>
      <SocialMedia />
      <CopyRight />
    </div>
  );
}
