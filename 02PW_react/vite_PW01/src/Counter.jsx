import { useState } from "react"

let y = 5;
const Counter = () => {

    const [todos, setTodos] = useState(['todo1', 'todo2']);
    return (
        <>
           {todos.map((todo) => <li>{todo}</li>)}  
           <button onClick={() => setTodos([...todos, 'todo3'])}>Click</button>
        </>
    )
}

export default Counter;