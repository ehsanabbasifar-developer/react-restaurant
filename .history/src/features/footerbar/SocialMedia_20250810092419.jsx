import React from 'react'

export default function SocialMedia() {
  return (
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
  )
}
