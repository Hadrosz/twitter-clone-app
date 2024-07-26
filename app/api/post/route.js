import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const post = await prisma.post.findMany({
    include: {
      user: { select: { name: true, username: true, verified: true } },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(post);
}

export async function POST(req) {
  const data = await req.json();
  const newPost = await prisma.post.create({
    data: {
      body: data.body,
      userId: data.userId,
    },
  });
  return NextResponse.json(newPost);
}
