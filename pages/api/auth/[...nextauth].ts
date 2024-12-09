// pages/api/auth/[...nextauth].ts
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async session({ session, token }) {
            if (session?.user) {
                session.user.email = token.email;
            }
            return session;
        },
        async jwt({ token, account, profile }) {
            if (account && profile) {
                token.email = profile.email;  // Додаємо email до токену
            }
            return token;
        },
    }

});


