import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      name?: string | null;
      email?: string;
      image?: string | null;
      provider?: string;
      accessToken?: string;
    };
  }

  interface JWT {
    name?: string | null;
    email?: string | null;
    picture?: string | null;
    sub?: string;
    provider?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    name?: string | null;
    email?: string | null;
    picture?: string | null;
    sub?: string;
    provider?: string;
    accessToken?: string;
  }
}
