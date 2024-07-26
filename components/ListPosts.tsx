"use client";
import { useEffect, useState } from "react";
import { Post } from "./Post";

export const ListPosts = async () => {
  const res = await fetch("http://localhost:3000/api/post");
  const posts = await res.json();

  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
};
