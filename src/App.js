import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import UserForm from "./UserForm";
import Greeting from "./Greeting";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <UserForm name={name} setName={setName} />
      <Greeting name={name} />
    </div>
  );
}

export default App;
