import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';

function Home() {

    const [counter, setCounter] = useState(0);

    // 1st Arguemnt is a function.
    // 2nd Argument is a dependency array
    useEffect(() => {
        console.log("Hello - I am component did mount")
    }, [])

    useEffect(() => {
        console.log("Component Did updated");
    }, [counter]);

    useEffect(() => {
        return () => {
            console.log("Component will unmount");
        }
    }, []);
    
    const handleIncrement = () => {
        const temp = counter + 1; 
        setCounter(temp);
    }

    return (
        <>
            <p>{counter}</p>
            <button onClick={handleIncrement}> + Increment</button>
            <Link to="/login">Back to Login</Link>
            <Link to="/todo">Go to Todo</Link>
        </>
    )
}

export default Home


//Hooks - useState, useNavigate, useEffect, useRef, useCallback, useMemo, useDispatch, useSelector, useContext. (Custom Hook)