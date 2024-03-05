"use client";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {
  post: Post;
};
type Input = {
  _id: string;
  name: string;
  email: string;
  comment: string;
};

function Comments({ post }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();
  return (
    <form className="flex flex-col p-5 my-10 max-w-2xl mx-auto mb-10">
      <h1 className="text-3xl mb-3">Comment on blog</h1>
      <input
        className="shadow border border-gray-400 bg-transparent rounded py-2 px-3 form-input mt-1 block w-full"
        placeholder="Your name"
        type="text"
      />
      <input
        className="shadow border border-gray-400 bg-transparent rounded py-2 px-3 form-input mt-1 block w-full"
        placeholder="Your email"
        type="email"
      />
      <textarea
        className="shadow border border-gray-400 bg-transparent rounded py-2 px-3 form-input mt-1 block w-full"
        placeholder="Your comment"
        rows={8}
      />
    </form>
  );
}

export default Comments;
