// import { AuthOptions } from "next-auth";
// import GithubProvider from "next-auth/providers/github";
// import NextAuth from "next-auth/next";
// import { db } from "@/lib/db";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";

// const authOptions: AuthOptions = {
//   adapter: PrismaAdapter(db),
//   session: {
//     strategy: "jwt",
//   },
//   providers: [
//     GithubProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
//   callbacks: {
//     async session({ session, token }: any) {
//       console.log(session, token);

//       session.user.name = `${session?.user?.name}_${token?.sub}`;

//       return session;
//     },
//   },
//   secret: "secret123",
// };

// const nextAuth = NextAuth(authOptions);

// export { nextAuth as GET, nextAuth as POST };

import { db } from "@/lib/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  pages: {
    signIn: "/",
  },
  callbacks: {
    session: ({ session, token }) => {
      console.log("Session Callback", { session, token });
      return {
        ...session,
        // user: {
        //   ...session.user,
        //   id: token.id,
        //   randomKey: token.randomKey,
        // },
      };
    },
    // jwt: ({ token, user }) => {
    //   console.log("JWT Callback", { token, user });
    //   if (user) {
    //     const u = user as unknown as any;
    //     return {
    //       ...token,
    //       id: u.id,
    //       randomKey: u.randomKey,
    //     };
    //   }
    //   return token;
    // },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET!,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
