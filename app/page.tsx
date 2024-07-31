import { ComposePost } from "@/components/ComposePost";
import { ListPosts } from "@/components/ListPosts";
import { Post } from "@/components/Post";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";

export const revalidate = 100;

export const metadata = {
  title: "Inicio / Twitter ",
};

export default function Home() {
  return (
    <main className=" border-x-[1px]  border-x-slate-200">
      <ComposePost />
      <ListPosts />
    </main>
  );
}
