import { Link } from "react-router";

function Header(){
    return <div id={"header"}>
    <img src="https://placehold.co/100x100/png" />
    <h1 >Welcome to React Project</h1>
    <span class="button-header">
      <Link style={{marginRight: "5px"}} to={"/login"}>Login</Link>
      <Link to={"/sign-up"}>Sign Up</Link>
    </span>
  </div>
}

export default Header;