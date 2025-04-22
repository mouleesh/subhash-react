import React from 'react';

function Signup(){
    const cities = ["Hyderabad", "Chennai", "Delhi", "Vizag", "Tripathi", "Coimbatore", "Mumbai", "Jaipur"];

    return <React.Fragment>
        <select style={{width: "100px"}} >
            {cities.map((city, index) => {
                return <option key={index}>{city}</option>
            })}
        </select>
    </React.Fragment> 
}

export default Signup;