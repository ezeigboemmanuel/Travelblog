import React from "react";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Hero from "@/components/Hero";
import Countries from "@/components/Countries";

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
      <Hero />
      <Countries />
    </div>
  );
};

export default page;
