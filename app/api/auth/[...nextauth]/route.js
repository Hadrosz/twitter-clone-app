import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/libs/prisma";
import { getPassword } from "@/libs/password";
import { NextResponse } from "next/server";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const { email, password } = credentials;
        console.log(credentials);
        const userFound = await prisma.user.findUnique({
          where: { email },
        });
        if (!userFound) throw new Error("No user found");
        const passwordCompare = await getPassword(userFound.password, password);
        if (!passwordCompare) throw new Error("Incorrect Password");
        return {
          id: userFound.id,
          name: userFound.name,
          email: userFound.email,
          image: `https://unavatar.io/${userFound.username}`,
        };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
