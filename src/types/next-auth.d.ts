// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
    //   hello: string | null;
      googleId?: string | null;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    googleId?: string | null;
  }
}
