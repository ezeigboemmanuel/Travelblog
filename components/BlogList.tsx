import React from "react";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Route from "./Route";

type Props = {
  posts: Post[];
};

const BlogList = ({ posts }: Props) => {
  return (
    <div className="md:mx-14 my-10">
      {posts.map((post) => (
        <Route route={`/blog/${post.slug.current}`}>
          <div key={post._id} className="border border-gray-200 rounded mb-3 hover:shadow-md">
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
              <p className="line-clamp-6">{post.description}</p>
            </div>
          </div>
        </Route>
      ))}
    </div>
  );
};

export default BlogList;
