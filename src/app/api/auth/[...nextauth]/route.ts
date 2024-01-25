import { User } from "@/models/User";
import mongoose from "mongoose";
import NextAuth from "next-auth"
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log({credentials});
        const { email, password } = credentials;
        
        mongoose.connect(process.env.MONGO_URL);
        const user = await User.findOne({email});
        const passwordOk = user && bcrypt.compareSync(password, user.password);

        if(passwordOk){
          return user;
        }
        
        
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST }