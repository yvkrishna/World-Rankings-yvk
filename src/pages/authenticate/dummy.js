import { signIn, signOut, useSession } from "next-auth/client"
import Link from "next/link"
import React, {useEffect,useState} from "react"

const Authsuccess = () => {

  // Authentication 
  const [session,loading] = useSession(); 
  
  return (
    <div>
        {!session && (
        <>
          Not Signed In <br />
          <button onClick={signIn}>SignIn</button>
        </>
      )}
      {session && (
        <>
          Signed In as {session.user.email} <br />
          <div>You can now access secret pages.</div>
          <button><Link href="/secret">To the secret.</Link></button><br />
          <button onClick={signOut}>Signout</button>
        </>
      )}
      {console.log(session)}
    </div>
  )
}

export default Authsuccess;