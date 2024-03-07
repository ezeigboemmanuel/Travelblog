import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/assets/z.png"

const Header = () => {
  return (
    <nav className="flex justify-between py-3 md:py-5 px-5 lg:px-20 md:px-10 relative z-10 bg-[#1C252A] text-[12px] lg:text-base md:text-[14px] items-center">
      <Link href="/" className="text-gray-50 font-semibold flex items-center">
        <span className=""><Image src={logo} alt="Logo" className="h-8 w-8" /></span><span className="hidden lg:inline-block md:inline-block">travblog</span>
      </Link>
      <div className="flex space-x-3 lg:space-x-10 md:space-x-6">
        <Link
          href="/blog"
          className="text-gray-50 font-semibold hover:underline"
        >
          TRAVEL BLOG
        </Link>
        <Link
          href="/"
          className="text-gray-50 font-semibold hover:underline"
        >
          TRAVEL REVIEWS
        </Link>
        <Link
          href="/"
          className="text-gray-50 font-semibold hover:underline"
        >
          ABOUT
        </Link>
      </div>
    </nav>
  );
};

export default Header;
