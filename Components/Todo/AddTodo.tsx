import React, { useState } from "react";

const AddTodo = (): any => {
    const [todos, setTodos] = useState<string[]>([]);
    const [todo, setTodo] = useState<string>("");

    const addTodo = () => {
        todos.push(todo);
        setTodos([...todos]);

        setTodo("");

    return(
            <>
                <input 
                placeholder="Input Task"
                onChange={(e) => setTodo(e?.target?.value)}
                value={todo} 
                />&nbsp;
                <button onClick={addTodo}>Add Task</button>
            </>
    )
}}

export default AddTodo;