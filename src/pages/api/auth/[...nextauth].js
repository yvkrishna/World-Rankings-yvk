import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import { connectToDatabase } from "../../../../utils/mongodb_setup";
import bcrypt from 'bcrypt'


const rounds = 10

const options = {
    providers:[
        Providers.Credentials({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
              username: { label: "Username", type: "text", placeholder: "Enter Username" },
              password: {  label: "Password", type: "password", placeholder: "Enter Password" }
            },
            authorize: async (credentials) => {
              // Add logic here to look up the user from the credentials supplied
              const user_details = { username: credentials.username, password: credentials.password }
                
              const verifyLogin = async (unp_details) => {
                const { db } = await connectToDatabase();
                var {username, password} = unp_details;
                const member = await db
                    .collection("members")
                    .findOne({username:username})
                var isAuth = await bcrypt.compare(password, member.password);

                  if(isAuth){
                      return member;
                  }else{
                      return null;
                  }
              }

              var user = await verifyLogin(user_details) 

              if (Object.values(user).length>0){
                // Any object returned will be saved in `user` property of the JWT
                // console.log("============= Credentials in database ===========")
                // console.log(user)
                // console.log("============= Credentials in database ===========")
                return Promise.resolve(user)
              }else{
                // If you return null or false then the credentials will be rejected
                return Promise.resolve(null); 
                // You can also Reject this callback with an Error or with a URL:
                // return Promise.reject(new Error('error message')) // Redirect to error page
                // return Promise.reject('/path/to/redirect')        // Redirect to a URL
              }
            }
          })
    ],
    session: {
      jwt: true, 
    },
    pages: {
        signIn: '/authenticate/LogIn',
        signOut: '/authenticate/LogIn',
    },
}

export default (req,res) => NextAuth(req,res,options);