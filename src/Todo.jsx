import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Todo() {

    const [todos, setTodos] = useState([]);

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/todos")
    //     .then((response) => {return response.json()})
    //     .then((response) => {
    //         setTodos(response)
    //     });

    // }, []);

    const getDataHandler = () => {
        // fetch("https://jsonplaceholder.typicode.com/todos")
        // .then((response) => {return response.json()})
        // .then((resp) => setTodos(resp));
        

        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(resp => {
            if(resp.status === 200){
                setTodos(resp.data);
            } else {
                alert("Unable to fetch data");
            }
        })
    }


    return (
        <>
            <button onClick={getDataHandler}>Fetch Data/Todos</button>
            <ul>
                {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
            </ul>
        </>
    )
}

export default Todo