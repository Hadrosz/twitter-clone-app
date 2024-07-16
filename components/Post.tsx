import Image from "next/image";

export const Post = ({ user }: any) => {
  console.log(user.image);
  console.log(typeof user.birthday);
  return (
    <article className="flex flex-row items-start border-b-[1px] p-4 ">
      <Image
        alt={`image from user @${user.username}`}
        src={user.image}
        width={100}
        height={100}
        className="rounded-full w-12 h-12 img object-cover mr-2"
      />
      <div>
        <div className="flex items-center gap-3">
          <h2 className="font-bold">{user.name}</h2>
          <span className="text-sm text-gray-500">@{user.username}</span>
          <span className="text-sm text-gray-500">{user.birthday}</span>
        </div>
        <p>{user.description}</p>
      </div>
    </article>
  );
};
