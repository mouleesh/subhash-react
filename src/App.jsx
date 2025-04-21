import App1 from "./App1";
import "./App.css";
import Header from "./Header";
import Login from "./auth/Login";

function App() {
  
  return (
    <>
      <Header />
      <Login />
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