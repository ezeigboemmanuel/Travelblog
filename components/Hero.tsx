import React from 'react'
import BannerImg from "../public/assets/bannerimg2.jpg";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <div className="relative w-full h-[75vh] bg-cover bg-center bg-no-repeat  bg-black/50">
        <div className="absolute inset-0 -z-10">
          <Image
            src={BannerImg}
            fill
            alt="banner-img"
            className="object-cover object-center"
          />
        </div>
        <nav className="flex justify-between py-5 px-20 relative z-10">
          <Link href="/" className="text-[#E7493F] font-semibold text-base">
            Ztravblog
          </Link>
          <div className="flex space-x-10">
            <Link
              href="/"
              className="text-[#E7493F] font-semibold text-base hover:underline"
            >
              TRAVEL BLOG
            </Link>
            <Link
              href="/"
              className="text-[#E7493F] font-semibold text-base hover:underline"
            >
              TRAVEL REVIEWS
            </Link>
            <Link
              href="/"
              className="text-[#E7493F] font-semibold text-base hover:underline"
            >
              ABOUT
            </Link>
          </div>
        </nav>

        <div className="flex justify-end h-4/6 items-center">
          <div className="flex flex-col w-[50vw]">
            <h1 className="text-[#fff] font-semibold text-[50px]">
              We Take Care
            </h1>
            <h1 className="text-[#fff] font-semibold text-[50px] text-center">
              {" "}
              Of Your Trip
            </h1>
            <div className="flex justify-center pt-10">
              <button className="bg-gradient-to-r from-transparent to-[#E7493F] w-48 hover:bg-[#E7493F] text-white font-semibold hover:text-white py-2 px-4 border border-[#fff] hover:border-transparent p">
                EXPLORE NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero