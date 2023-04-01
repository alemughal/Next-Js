import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { DisplayTodo } from "../../Components";

const fetcher = (url: any): any => fetch(url).then((r) => r.json());

const Todos = () => {
  const [todos, setTodos] = useState<any[]>([]);
  const [todo, setTodo] = useState<string>("");
  const { data, isLoading } = useSWR('https://jsonplaceholder.typicode.com/todos', fetcher);


  useEffect(() => {
    if(!isLoading){
        setTodos([...data])
      }
  }, [data, isLoading]);

//   const callApi = () => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((response) => response.json())
//       .then((json) => setTodos([...json]));
//   };

  const addTodo = () => {
    let obj: object = {
      completed: false,
      title: todo,
      userId: 1,
      id: todos?.length + 1,
    };

    todos.push(obj);

    // setTodos([...todos]);

    // console.log("Todos", todos);
    setTodo("");
  };

  return (
    <>
      <h1>Todo</h1>
      <input
        placeholder="Input Task"
        onChange={(e) => setTodo(e?.target?.value)}
        value={todo}
      />
      &nbsp;
      <button onClick={addTodo}>Add Task</button>
      <br />
      <br />
      <ol>
        {todos?.map((v, i) => {
          return <DisplayTodo key={i} todo={v} />;
        })}
      </ol>
    </>
  );
};

export default Todos;
