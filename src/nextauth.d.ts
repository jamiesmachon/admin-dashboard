// nextauth.d.ts
import { DefaultSession, DefaultUser } from 'next-auth';

interface IUser extends DefaultUser {
  ID: string;
  username: string;
  email: string;
  language: string;
  role: string;
  capabilities: string;
  validationCode: string;
  distributor: string;
  status: string;
  created: string;
  updated: string;
  deleted: string;
  accessToken: string;
}

declare module 'next-auth' {
  interface User extends IUser {}
  interface Session {
    user?: User;
  }
}
declare module 'next-auth/jwt' {
  interface JWT extends IUser {}
}
