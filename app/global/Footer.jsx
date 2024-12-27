import React from "react";
import { IoLogoTwitch } from "react-icons/io";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";
import { SiYoutube } from "react-icons/si";

export default function Footer() {
  return (
    <div className="py-10 mt-20">
      <div className="max-w-[1440px] mx-auto ">
        <div className="px-12 flex md:flex-row flex-col md:gap-0 gap-[30px] justify-between items-center">
          <div className="text-[#67e9cb] text-[24px] flex items-center gap-6">
            <FaLinkedin />
            <FaTwitter />
            <IoLogoTwitch />
            <SiYoutube />
          </div>
          <nav className="flex gap-6   text-white">
            <h5 className="font-[family-name:var(--font-roboto-mono)]">
              Privacy
            </h5>
            <h5 className="font-[family-name:var(--font-roboto-mono)]">
              Legacy
            </h5>
            <h5 className="font-[family-name:var(--font-roboto-mono)]">
              Contacts
            </h5>
          </nav>
          <h6 className="font-[family-name:var(--font-roboto-mono)] text-xs text-[#dddddd]">
            © 2022. All rights reserved
          </h6>
        </div>
      </div>
    </div>
  );
}
