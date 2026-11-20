import NextAuth, {CredentialsSignin} from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const {handlers, signIn, signOut, auth} = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: {
          type: "email",
          label: "Email",
        },
        password: {
          type: "password",
          label: "Password",
        },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        const formData = new FormData();
        formData.append("email", String(credentials.email));
        formData.append("password", String(credentials.password));

        const loginResponse = await fetch(`${process.env.API_URL}/login`, {
          method: "POST",
          body: formData,
        });
        const loginBody = await loginResponse.json();

        if (!loginResponse.ok) {
          throw new CredentialsSignin();
        }

        const userResponse = await fetch(`${process.env.API_URL}/users/current`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${loginBody.token}`,
          },
        });

        if (!userResponse.ok) {
          return null;
        }

        const user = await userResponse.json();

        return {
          id: user.id,
          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
          role: user.role,
          service: user.service,
          token: loginBody.token,
        };
      },
    }),
  ],
  session: {
    maxAge: 60 * 60 * 24 * 7,
    strategy: "jwt",
  },
  callbacks: {
    async jwt({token, user}) {
      if (user) {
        token.sub = (user as Record<string, any>).id;
        token.role = (user as Record<string, any>).role;
        token.token = (user as Record<string, any>).token;
      }

      return token;
    },
    async session({session, token}) {
      (session.user as Record<string, any>).id = token.sub;
      (session.user as Record<string, any>).role = token.role;
      (session.user as Record<string, any>).token = token.token;

      return session;
    }
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.AUTH_SECRET,
  debug: true,
});