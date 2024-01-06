import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import User from "@models/user";
import { signIn } from "next-auth/react";
import { connectToDB } from "@utils/database";
// console.log({
//     clientId:process.env.GOOGLE_ID,
//     clientSecret:process.env.GOOGLE_CLIENT_SECRET,
// })
const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({session}){}

    ,
    async signIn({profile}){
      try{
        await connectToDB();

        //check if a user already exist 
        const userExist = await User.findOne({
            email: profile.email
        });
        //if not, create a new user
if(!userExist){
    await User.create({
        email:profile.email,
        username: profile.name.replace(" ","").toLowerCase(),
        image:profile.picture
    })
}

      }catch(error){

      }
    }
})
export { handler as GET , handler as POST};