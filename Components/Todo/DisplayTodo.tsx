import { useEffect } from "react";

const DisplayTodo = (props : any)=> {
    const { todo }: any = props;

    // useEffect (() => {
    //     console.log("DisplayTodo Render");
    // },[])
    return (
        <div>
            <li style={{color: todo?.completed ? "green" : "red"}}>{todo?.title}</li>
        </div>
    )
}

export  default  DisplayTodo;