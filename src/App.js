import React from "react";
import "./App.css";
import LoginButton from "./component/LoginButton";
import LogoutButton from "./component/LogoutButton";
import Profile from "./component/Profile";

function App() {
  return (
    <>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </>
  );
}

export default App;
