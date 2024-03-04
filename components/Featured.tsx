import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";

type Props = {
  posts: Post[];
};

const Featured = ({ posts }: Props) => {
  const filteredPost = posts.filter(
    (post) =>
      post.title === "A Deep Dive into the Vibrant Tapestry of New York City"
  ); // Use the Exact title of the post you want to feature
  return (
    <div className="flex gap-x-5">
      <div className="mx-14 mb-5">
        {filteredPost.map((post) => (
          <div key={post._id} className="border border-gray-200 rounded mb-3">
            <div className="relative w-full h-80 drop-shadow-xl">
              <Image
                fill
                src={urlForImage(post.mainImage)}
                alt="postImage"
                className="object-cover object-left lg:object-center"
              />
            </div>
            <div className="mx-5 pb-4">
              <h1 className="mt-5 mb-2 font-semibold text-baseColor">
                {post.title}
              </h1>
              <p className="line-clamp-6 ">{post.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-2">
        <h2 className="bg-[url('../public/assets/textimg5.png')] bg-clip-text text-transparent font-extrabold font-sans text-4xl text-center mb-10 mr-2">
          TRAIN <br />
          <span className="text-3xl">ADVENTURE</span> <br /> ROUTE
        </h2>
        <p>
          Imagine the thrill of boarding a train, setting off on an adventure
          where each clickety-clack of the tracks leads you to new horizons.
          With every twist and turn of the scenic route, there's a world of
          wonders waiting to be unveiled, promising excitement and discovery at
          every stop along the way.
        </p>
      </div>
    </div>
  );
};

export default Featured;
