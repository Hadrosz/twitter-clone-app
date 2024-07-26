"use client";
import Image from "next/image";
import { addPost } from "@/libs/action";

export const ComposePost = () => {
  return (
    <section className="flex flex-row p-4 gap-4 border-b-[1px] ">
      <Image
        src="https://motionbgs.com/i/c/960x540/media/2529/ken-kaneki.jpg"
        width={48}
        height={48}
        className="rounded-full w-12 h-12 object-cover "
        alt="image"
      />
      <form
        className=" w-full flex flex-col"
        action={async (formData) => {
          await addPost(formData);
        }}
      >
        <textarea
          placeholder="¿¡What's happening!?"
          name="post"
          className="w-full resize-none min-h-20"
        ></textarea>
        <button
          type="submit"
          className="rounded-full my-2 px-8 py-1 text-white bg-black font-bold disabled:bg-white disabled:outline disabled:outline-black disabled:outline-2 disabled:text-black self-end transition-all transition-1000"
        >
          Post
        </button>
      </form>
    </section>
  );
};
