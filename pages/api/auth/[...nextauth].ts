import NextAuth from "next-auth";
import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions ={

    providers: [
  
      GoogleProvider({
        // @ts-ignore to ignore the type checking errors on the next line in a TypeScript
        clientId: process.env.GOOGLE_CLIENT_ID,
        // @ts-ignore to ignore the type checking errors on the next line in a TypeScript
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  
        //authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
  
      })
  
    ],
  
  
    theme: {
      colorScheme: "light",
    },
    
  
    //Callback here

    callbacks: {
// @ts-ignore to ignore the type checking errors on the next line in a TypeScript
        async jwt({token}) {

          token.userRole = "admin"
          return token;
    
        },
  
    
    },
  
  };

  export default NextAuth(authOptions)