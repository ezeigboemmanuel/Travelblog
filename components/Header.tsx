import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="flex justify-between py-5 px-20 relative z-10 bg-[#1C252A]">
      <Link href="/" className="text-gray-50 font-semibold text-base">
        Ztravblog
      </Link>
      <div className="flex space-x-10">
        <Link
          href="/"
          className="text-gray-50 font-semibold text-base hover:underline"
        >
          TRAVEL BLOG
        </Link>
        <Link
          href="/"
          className="text-gray-50 font-semibold text-base hover:underline"
        >
          TRAVEL REVIEWS
        </Link>
        <Link
          href="/"
          className="text-gray-50 font-semibold text-base hover:underline"
        >
          ABOUT
        </Link>
      </div>
    </nav>
  );
};

export default Header;
