import React from "react";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import BannerImg from "../public/assets/bannerimg2.jpg";
import Image from "next/image";
import Link from "next/link";

const query = groq`
*[_type == "post"] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

const page = async () => {
  const posts = await client.fetch(query);
  // console.log(posts);
  return (
    <div>
      <div className="relative w-full h-[75vh] bg-cover bg-center bg-no-repeat  bg-black/70">
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
            <Link href="/" className="text-[#E7493F] font-semibold text-base">
              TRAVEL BLOG
            </Link>
            <Link href="/" className="text-[#E7493F] font-semibold text-base">
              TRAVEL REVIEWS
            </Link>
            <Link href="/" className="text-[#E7493F] font-semibold text-base">
              ABOUT
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default page;
