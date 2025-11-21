import { fetchAllowedEmails } from "@/utils/allowedEmails/fetchAllowedEmails";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const allowedEmails = await fetchAllowedEmails();
      console.log(allowedEmails);
      if (user.email) {
        return allowedEmails.includes(user.email);
      }
      return false;
    },
  },
  session: {
    maxAge: 5 * 24 * 60 * 60,
  },
  pages: {
    signIn: "/",
  },
  secret: process.env.NEXTAUTH_SECRET!,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
