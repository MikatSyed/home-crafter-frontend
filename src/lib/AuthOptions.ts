
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getNewAccessToken } from "../../services/getNewAccessToken";
import { jwtHelpers } from "../../services/jwtHelpers";

const apiUrl = process.env.NODE_ENV === 'production' ? 'http://localhost:6060/api/v1/auth/login' : 'http://localhost:6060/api/v1/auth/login';


export const authOptions: AuthOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            id: "home-crafter",
            name: "Credentials",
            type: "credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Your email....." },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                try {
                  const res = await fetch(apiUrl, {
                    method: "POST",
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" },
                  });
              
                  // Check if response is not ok (e.g., status 400, 401)
                  if (!res.ok) {
                    const errorData = await res.json();
                    throw new Error(errorData?.message || "Login failed. Please check your credentials.");
                  }
              
                  const data = await res.json();
                  const verifiedToken: any = jwtHelpers.verifyToken(
                    data?.token,
                    process.env.JWT_SECRET!
                  );
              
                  if (data && verifiedToken) {
                    return {
                      ...data,
                      ...verifiedToken,
                    };
                  }
                } catch (error: any) {
                  throw new Error(error.message);
                }
              }
              
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            console.log(token, "token auth option")
            console.log(user, "user auth option")
            return {
                ...token,
                ...user
            }
        },
        async session({ session, token }: {
            session: any,
            token: any
        }) {
            console.log(session, "session auth option")
            console.log(token, "token auth option inside session")
            const verifiedToken = jwtHelpers.verifyToken(token?.token, process.env.JWT_SECRET!)
            if (!verifiedToken) {
                // console.log("token expired so new token generated")
                const { data } = await getNewAccessToken(token?.token)
                token.token = data?.token
            }
            return {
                ...session,
                ...token
            }
        }
    },
    session: {
        strategy: "jwt",
        maxAge: 24 * 60 * 60
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
        error: "/"
    }
}
