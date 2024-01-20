import NextAuth from "next-auth";
import Google from "@auth/core/providers/github"
import GitHub from "@auth/core/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma"

const options = {
    // session: { strategy: "jwt" },
    providers: [Google, GitHub],
    adapter: PrismaAdapter(prisma),
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        error: '/auth/error', // Error code passed in query string as ?error=
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            // console.log(user, account,  profile, email, credentials);
            return true
        },
        async redirect({ url, baseUrl }) {
            // // Allows relative callback URLs
            // if (url.startsWith("/")) { console.log(`${baseUrl}${url}` );return `${baseUrl}${url}`}
            // // Allows callback URLs on the same origin
            // else if (new URL(url).origin === baseUrl) return url
            return baseUrl
        },
        async session({ session, token, user }) {
            // console.log(session, token);
            session.user.role = user.role
            return session
        },
        async jwt({ token, user, account, profile }) {            
            // console.log(token, user, account, profile);
            return token
        }
    }
}

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth(options)