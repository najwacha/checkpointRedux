import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo,editTodo } from "./redux/actions/todoActions";
import "./App.css";

const Todo = ({ todo }) => {
    const [input, setInput] = useState(todo)
    const dispatch = useDispatch();
    return ( 
        <div className="list">
            <h5 style = {{ textDecoration: todo.isDone ?"line-through":"none" }} onClick ={()=>dispatch(toggleTodo(todo.id))}> {todo.description }</h5>  
            <input className="input"value={input.description} onChange={(e)=>setInput({...input,description:e.target.value})} type="text"></input>
            <button className="buttonDelete" onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</button>
            <button className="buttonEdit"onClick={()=>dispatch(editTodo(input))}>Edit</button>
        </div>
    );
};
export default Todo;