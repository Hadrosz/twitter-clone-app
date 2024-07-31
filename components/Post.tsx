import Image from "next/image";
import { PremiumSVG, VerifiedSVG } from "@/components/Icons";

export const Post = ({ post }: any) => {
  const dateCreated = new Date(post.createdAt);
  return (
    <article className="flex flex-row items-start border-b-[1px] p-4 ">
      <Image
        alt={`image from user @${post.user.username}`}
        src={`https://unavatar.io/${post.user.username}`}
        width={100}
        height={100}
        className="rounded-full w-12 h-12 img object-cover mr-2"
      />
      <div>
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <h2 className="font-bold">{post.user.name}</h2>
            {post.user.verified ? (
              <VerifiedSVG width="16" color="black" />
            ) : (
              <></>
            )}
          </div>
          <span className="text-sm text-gray-500">@{post.user.username}</span>

          <span className="text-sm text-gray-500">
            {dateCreated.toLocaleDateString()}
          </span>
        </div>
        <p>{post.body}</p>
      </div>
    </article>
  );
};
