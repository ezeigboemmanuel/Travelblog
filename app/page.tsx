import React from "react";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Hero from "@/components/Hero";
import Main from "@/components/Main";

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
      <Main />
    </div>
  );
};

export default page;
