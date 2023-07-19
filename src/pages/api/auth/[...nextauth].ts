import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { ILoginCredentials } from '@/interfaces/ILoginCredentials-Interface';
import { getApiUrl } from '@/utils/ApiFunctions-Util';

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'login',
      credentials: {
        username: { label: 'Your username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const payload: ILoginCredentials = {
          username: credentials?.username,
          password: credentials?.password,
        };

        const res = await fetch(getApiUrl('auth/login'), {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const user = await res.json();

        // if response is not ok, throw an error with the message
        if (!res.ok) {
          throw new Error(user.message);
        }

        // If no error and we have user data, return it
        if (res.ok && user) {
          return user;
        }

        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/',
  },
  callbacks: {
    async signIn({ user }) {
      if (user) return true;

      return false;
    },
    async jwt({ token, user }) {
      if (user) {
        return { ...token, ...user };
      }
      return token;
    },
    async session({ session, token }) {
      if (session && session.user) {
        session.user = token;
      }

      return session;
    },
  },
};

export default NextAuth(authOptions);
