
function Login({a, username, password, errorMessage, handlePasswordChange, handleUsernameChange, handleSubmit}){

    return <div id={"login-box"}>
        <h1>{a}</h1>
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