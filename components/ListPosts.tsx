import { Post } from "./Post";

export const ListPosts = async () => {
  const res = await fetch("https://www.jsondataai.com/api/8iLEnoj");
  const users = await res.json();
  return (
    <ul>
      {users.map((user: any) => (
        <li key={user.id}>
          <Post user={user} />
        </li>
      ))}
    </ul>
  );
};
