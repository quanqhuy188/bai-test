import React,{useState} from 'react';
import './Todolist.css';
import Newtask from './Newtask'
import Bulkaction from './Bulkaction'
import Todo from './Todo'


const Todolist = () => {
    const [todoList,setTodolist] =useState([
        // {title:"hihi 1",description:"description 1",piority:"",date:""},
        // {title:"hihi 2",description:"description 2",piority:"",date:""},
        // {title:"hihi 3",description:"description 3",piority:"",date:""},
        // {title:"hihi 4",description:"description 4",piority:"",date:""},
])    
const addTodo = (title,description,date,piority,check) =>{
    setTodolist([...todoList,{title:title,description:description,piority:piority,date:date,check:check}])
}
const changeCheck = () =>{

}
    return (
        <div className="Todolist">
            <h1>Todo List</h1>
            <Newtask addTodo={addTodo}></Newtask>
            <div className="todo-box">
            {
                        todoList.map((item,index)=>(
                            <Todo changeCheck={changeCheck} index={index} item={item} key={index}></Todo>

                        )).sort()
                    }
            </div>
            <Bulkaction ></Bulkaction>
        </div>
    )
}

export default Todolist
