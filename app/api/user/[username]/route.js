import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(req, { params }) {
  const user = await prisma.user.findUnique({
    where: { username: params.username },
  });
  return NextResponse.json(user);
}
