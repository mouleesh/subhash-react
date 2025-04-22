import { useState } from "react";
import App1 from "./App1";
import "./App.css";
import Header from "./Header";
import Login from "./auth/Login";
import usersData from "./userData";
import Signup from "./auth/Signup";


function App() {
  	const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
	const [usersArr, setUserArr] = useState(usersData);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = () => {
        if(username === ""){
            setErrorMessage("Please enter the username");
            return;
        }
        if(password === ""){
            setErrorMessage("Please enter the password");
            return;
        }

        if(usersArr.some(a => (a.username === username && a.password === password))){
            alert("Login successful")
        } else {
            setErrorMessage("Wrong credentials!")
        }
    }
  
  return (
    <>
      <Header />
      <Login 
	  	a={"Login"}
	  	username={username} 
		password={password} 
		errorMessage={errorMessage}
		handlePasswordChange={handlePasswordChange} 
		handleUsernameChange={handleUsernameChange} 
		handleSubmit={handleSubmit}/>
		
		<Signup />
    </>
  )
}

export default App

//Types of components
//1. Functional Component or Presentational Component or Dumb Component

//2. Class based Component or Smart Component
//Life Cycle Methods
// - ComponentDidMount
// - ComponentDidUpdate
// - ShouldComponentUpdate
// - render
// - ComponentWillReceiveProps
// - getDerivedStatesFromProps
// - ComponentWillUnMount