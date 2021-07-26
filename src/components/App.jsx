import React from "react";
import Form from "./Form";

var isLoggedIn = false;
var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      { isLoggedIn ? <h1>Hello</h1> : <Form isRegistered={userIsRegistered}/>
      /*  if you want to show nothing -- use null (or) can use && -- CONDITION && EXPRESSION*/}
    </div>
  );
}

export default App;
