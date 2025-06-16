import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook, FaWhatsapp, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => (
  <footer className="py-6 text-center text-sm bg-blue-200 border-t mt-12 text-green-800 hover:text-orange-600">
    <div className="flex justify-center space-x-4 mb-2">

      <a href="https://wa.me/251938736354" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="text-2xl hover:text-green-900 transition" />
      </a>
      <a href="https://www.facebook.com/jacksontom28" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-2xl hover:text-green-900 transition" />
      </a>
       <a href="https://www.instagram.com/j21_official28?igsh=MWx3NmtrbzNqeHV3cg==" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-2xl hover:text-green-900 transition" />
      </a>

            <a href="http://tiktok.com/@son_official211" target="_blank" rel="noopener noreferrer">
        <FaTiktok className="text-2xl hover:text-green-900 transition" />
      </a>
      <a href="https://www.linkedin.com/in/jackson-277a51250?utm_source=share&utm_campaign=share_via&utm_
      content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-2xl hover:text-green-900 transition" />
      </a>

            <a href="http://www.youtube.com/@Ja-ro5dp" target="_blank" rel="noopener noreferrer">
        <FaYoutube className="text-2xl hover:text-green-900 transition" />
      </a>
      <a href="https://x.com/Jackson90616159?t=5YmcElO4Lo4PLhwzJUEGQw&s=09" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-2xl hover:text-green-900 transition" />
      </a>
    </div>
    <p>© {new Date().getFullYear()} Jackson. All rights reserved.</p>
  </footer>
);

export default Footer;
