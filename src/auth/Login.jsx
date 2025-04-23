import { useState } from "react";
import usersData from "./../userData";

function Login(){
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

    return <div id={"login-box"}>

        <input 
            onChange={handleUsernameChange} 
            value={username} 
            name="username"
            className={"login-username"} 
            type="text" 
            placeholder="Username"/> 
        <br />
        
        <input 
            value={password}
            onChange={handlePasswordChange}
            className={"login-password"} 
            type="password" 
            placeholder="Password"/>
        <br />

        <p style={{color: "red"}}>{errorMessage}</p>
        
        <button onClick={handleSubmit}>Login</button>
    </div>
}

export default Login;