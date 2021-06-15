import AddTodo from "./AddTodo";
import "./App.css";
import TodoList from "./TodoList";
import { useDispatch, useSelector } from "react-redux";
import { filterTodo } from "./redux/actions/todoActions";

function App() {
    const todos = useSelector((state) => state.todos)
    const filter= useSelector(state=>state.filter)
    const dispatch = useDispatch()
    return ( 
        <div className = "App" >
            <div className="App_Container">
                <div className="hi">
                    <button className="buttonAll"onClick={()=>dispatch(filterTodo('All'))}>All</button>
                    <button className="buttonDone" onClick={()=>dispatch(filterTodo(true))}>Done</button>
                    <button className="buttonUnDone" onClick={()=>dispatch(filterTodo(false))}>unDone</button>
                </div>
                <TodoList todos = {filter=== 'All'? todos:todos.filter(elm=>elm.isDone===filter)}/> 
                <hr></hr> 
                <br></br>
                <AddTodo/>
            </div>
        </div>
    );
}

export default App;