import React from 'react';
import Todo from './Todo.js';
const TodoList = ({ todos }) => {
    return ( 
    <div> {
        todos.map(elm => < Todo todo = { elm }/>)}
    </div >
 )
 }
export default TodoList;