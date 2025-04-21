import { useState } from "react";

function Login(){
    const [username, setUsername] = useState("Russia");

    function func(e){
        setUsername(e.target.value);
    }

    return <div id={"login-box"}>
        <p>{username}</p>

        <input 
            onChange={func} 
            value={username} 
            className={"login-username"} 
            type="text" 
            placeholder="Username"/> 
        <br />
        
        <input 
            className={"login-password"} 
            type="password" 
            placeholder="Password"/>
        <br />
        
        <button>Login</button>
    </div>
}

export default Login;