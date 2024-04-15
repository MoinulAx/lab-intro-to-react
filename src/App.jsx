import React from "react";
import "./index.css";
import NavBar from "./Components/nav/NavBar"
import Contacts from "./Components/contacts/Contacts";
import UserProfile from "./Components/user/UserProfile";
import Post from "./Components/post/Post";

function App() {
  return (
  <>
  <main>
  <NavBar/>
  <Contacts />
  <UserProfile/>
  <Post />
  
  </main>
  </>
  )
}

export default App;
