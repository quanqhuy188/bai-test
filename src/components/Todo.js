import React,{useState} from 'react';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import './Todolist.css';

const Todo = (item) => {

    const [todo,setTodo] =  useState(item.item)
// const [todoList,setTodolist] =useState([
//         // {title:"hihi 1",description:"description 1",piority:"",date:""},
//         // {title:"hihi 2",description:"description 2",piority:"",date:""},
//         // {title:"hihi 3",description:"description 3",piority:"",date:""},
//         // {title:"hihi 4",description:"description 4",piority:"",date:""},
// ])      

//     const handleCheck = (index) =>{
//         console.log(todoList)
//         setTodolist(
            
//             todoList.map((item,indexTodo)=>{
//                 if(indexTodo === index){      
//                     let newItem = {};
//                     newItem = {...item,check : !item.check}
//                     return newItem;
//                 }
//                 return item;
//             })
            
//         )



// }   
const handleCheck = () =>{
    console.log(todo)
    setTodo({
        todo: todo.check = !item.item.check
    })
    return item;

} 
    return (
        <div className="Todo">
                                <div className="check-title">
                                    <div className="checkbox" onClick={()=>handleCheck()}>
                                        {item.item.check !== null && item.item.check === false ? <CheckBoxOutlineBlankIcon className="non-check"/> : <CheckBoxIcon  className="checked"/>}

                                    </div>
                                    <div className="title">
                                        {item.item.title}
                                    </div> 
                                </div>    
                                <div className="button-box"  >
                                    <div className="detail">
                                        <button>Detail</button>
                                    </div>
                                    <div className="remove">
                                        <button>Remove</button>
                                    </div>
                                </div>   
        </div>
    )
}

export default Todo
