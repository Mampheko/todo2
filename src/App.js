import { async } from "@firebase/util";
import { useRef, useState } from "react";

import { signup, LogIn, LogOut, useAuth } from "./firebase";

export default function App() {
  const [ loading, setloading ] = useState(false);
  const currentUser =  useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

async function handleSignup() {
  setloading(true);
  try {
    await signup(emailRef.current.value, passwordRef.current.value); 
  } catch {
    alert("Error!");
  }
  setloading(false);
  }

  async function handleLogIn() {
    setloading(true);
    try {
      await LogIn(emailRef.current.value, passwordRef.current.value); 
    } catch {
      alert("Error!");
    }
    setloading(false);
    }

  async function handleLogOut() {
    setloading(true);
    try {
      await LogOut();
    } catch {
      alert("Error!");
    }
    setloading(false);
  }
  
  return (
    <div id="main">

<div>currently logged in as: { currentUser?.email } </div>
   
    <div id="fields">
    <input ref={emailRef} placeholder="Email" />
    <input ref={passwordRef} type = "Password" placeholder="password"/>
    </div>

    <button disabled={ loading || currentUser } onClick={ handleSignup }>Sign Up</button>
    <button disabled={ loading || currentUser } onClick={ handleLogIn }>Log In</button>
    <button disabled={ loading || !currentUser } onClick={ handleLogOut }>Log Out</button>
    </div>
  );
}


