import { useState } from "react";
import usersData from "./../userData";
import { useNavigate } from "react-router";

function Login(){

    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })

    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState("");
	const [usersArr, setUserArr] = useState(usersData);

    //Generic Event handler.
    const handleChange = (e) => {
        let payload = {
            ...credentials,
            [e.target.name]: e.target.value
        }
        setCredentials(payload)
    }

    const handleSubmit = () => {
        if(credentials.username === ""){
            setErrorMessage("Please enter the username");
            return;
        }
        if(credentials.password === ""){
            setErrorMessage("Please enter the password");
            return;
        }

        if(usersArr.some(a => (a.username === credentials.username && a.password === credentials.password))){
            alert("Login successful");
            navigate("/home");
        } else {
            setErrorMessage("Wrong credentials!")
        }
    }

    return <div id={"login-box"}>

        <input 
            onChange={handleChange} 
            value={credentials.username} 
            name="username"
            className={"login-username"} 
            type="text" 
            placeholder="Username"/> 

        <br />
        
        <input 
            value={credentials.password}
            onChange={handleChange}
            className={"login-password"} 
            type="password" 
            name="password"
            placeholder="Password"/>
        <br />

        <p style={{color: "red"}}>{errorMessage}</p>
        
        <button onClick={handleSubmit}>Login</button>
    </div>
}

export default Login;