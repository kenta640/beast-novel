import NextAuth, { NextAuthOptions } from "next-auth";

import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions ={

    providers: [
  
      GoogleProvider({
  
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  
        //authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
  
      })
  
    ],
  
    jwt: {
  
      encryption: true
  
    },
  
    theme: {
      colorScheme: "light",
    },
    secret: "secret token",
  
    //Callback here

    callbacks: {

        async jwt({token}) {

          token.userRole = "admin"
          return token;
    
        },
  
    
    }
  
  };