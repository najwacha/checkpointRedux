import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './redux/actions/todoActions'
import "./App.css";


const AddTodo = () => {
    const [newTodo, setnewTodo] = useState({})
    const dispatch = useDispatch()
    return ( 
        <div>
          <input className="inputPlaceholder"  placeholder = 'new todo' type = "text"onChange = 
          {(e) => setnewTodo({ description: e.target.value })}/>   

          <button className="buttonAdd" onClick = {() => dispatch(addTodo(newTodo))} > ADD </button>
        </div>
    )
}
export default AddTodo