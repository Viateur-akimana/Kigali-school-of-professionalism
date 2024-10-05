// pages/api/auth/[...nextauth].ts
import NextAuth, { NextAuthOptions } from "next-auth";
import Google from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "next-auth";

if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
    throw new Error("ADMIN_EMAIL and ADMIN_PASSWORD must be set in environment variables");
}

interface CustomUser extends User {
    isAdmin?: boolean;
}

export const authOptions: NextAuthOptions = {
    providers: [
        // Credentials provider for admin access
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                if (
                    credentials.email === process.env.ADMIN_EMAIL &&
                    credentials.password === process.env.ADMIN_PASSWORD
                ) {
                    return {
                        id: "1",
                        email: process.env.ADMIN_EMAIL,
                        name: "Admin User",
                        isAdmin: true,
                    } as CustomUser;
                }

                return null;
            },
        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID!,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                (token as any).isAdmin = user.isAdmin;
            }
            return token;
        },
        async session({ session, token }) {
            if (session?.user) {
                (session.user as CustomUser).isAdmin = (token as any).isAdmin;
            }
            return session;
        },
    },
    pages:{
        newUser: '/payment',
    },
    session: {
        strategy: "jwt",
    },
    debug: true, 
};

export default NextAuth(authOptions);
