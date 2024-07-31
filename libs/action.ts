"use server";

import { revalidatePath } from "next/cache";

export const addPost = async (formData: FormData) => {
  "use server";
  const content = formData.get("post");

  const res = await fetch("http://localhost:3000/api/post", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ body: content, userId: 5 }),
  });
  revalidatePath("/");
};
