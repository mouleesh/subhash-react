import React, { useRef } from 'react';

function Signup(){
    const city = useRef("Mumbai");
    const mobileRef = useRef("bfdghc");

    const cities = ["Hyderabad", "Chennai", "Delhi", "Vizag", "Tripathi", "Coimbatore", "Mumbai", "Jaipur"];

    return <React.Fragment>
        <select ref={city} style={{width: "100px"}} value={city.current}>
            {cities.map((city, index) => {
                return <option key={index} value={city}>{city}</option>
            })}
        </select>

        Mobile: <input ref={mobileRef} value={mobileRef.current} type='text'/>

        <button onClick={() => {city.current.value = "Chennai"}}>Sign Up</button>
    </React.Fragment> 
}

export default Signup;