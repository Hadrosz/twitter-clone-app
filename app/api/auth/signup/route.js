import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { createPassword } from "@/libs/password";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const { username, name, email, password, verified } = await req.json();
    const passwordEncrypted = await createPassword(password);

    const usernameFound = await prisma.user.findUnique({
      where: { username },
    });
    if (usernameFound)
      return NextResponse.json(
        { message: "Username not available" },
        { status: 400 }
      );

    const emailFound = await prisma.user.findUnique({ where: { email } });
    if (emailFound)
      return NextResponse.json(
        { message: "Email already used" },
        { status: 400 }
      );

    const newUser = await prisma.user.create({
      data: {
        username: username,
        name: name,
        email: email.toLowerCase(),
        password: passwordEncrypted,
        verified: verified,
      },
    });

    const token = jwt.sign({ username, name, email }, "secreto", {
      expiresIn: 86400,
    });
    console.log(token);
    const response = NextResponse.json(newUser);
    response.cookies.set("auth_cookie", token, {
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 86400,
      path: "/",
    });

    return response;
  } catch (e) {
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}

export async function GET(req) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}
