import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { createPassword } from "../../../libs/password";

export async function POST(req) {
  const { username, name, email, password } = await req.json();
  const passwordEncrypted = createPassword(password);
  const newUser = await prisma.user.create({
    data: {
      username: username,
      name: name,
      email: email.toLowerCase(),
      password: passwordEncrypted,
    },
  });
  return NextResponse.json(newUser);
}

export async function GET(req) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}
