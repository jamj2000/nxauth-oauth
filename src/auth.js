import NextAuth from "next-auth";
import Google from "@auth/core/providers/github"
import GitHub from "@auth/core/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma"


export const { handlers: {GET, POST}, auth } = NextAuth({
    providers: [Google, GitHub],
    adapter: PrismaAdapter(prisma)
})