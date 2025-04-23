import { Outlet } from "react-router";
import "./App.css";
import Header from "./Header";

function PublicLayout() {
  
  return (
    <>
      	<Header />
		    <Outlet />
		    <p>Here goes the footer</p>
    </>
  )
}

export default PublicLayout

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