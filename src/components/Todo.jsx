import React from 'react'
import { useState } from 'react';

const Todo = () => {
  const [value, setValue] = useState("");
  const [todolist, setTodoList] = useState([]);
  const [edit, setEdit] = useState({ id: -1, edit: false });
  
  const addTodoHandler=() =>{
    console.log(value);
    if(value === "") return;
    setTodoList([value, ...todolist]);
    setValue("");
  }
  const inputHandeler=(e) =>{
    setValue(e.target.value);
  }
  const deleteItem = (id) =>{
    // console.log("id, "+id+" requested for deletion");
    const newList = todolist.filter((x,y) => y!==id);
    setTodoList(newList);
  };
  // console.log("edit state:"+edit);

  const editHandler = (id) => {
    setValue(todolist[id]);
    setEdit({ id: id, edit: true });
  };
  const updateTodoHandler = () => {
    let newTodolist = todolist;
    newTodolist[edit?.id] = value;
    setTodoList(newTodolist);
    setEdit({ id: -1, edit: false });
    setValue("");
  };
  return (
    <div >
      <h1>ToDo App</h1><br/>
      <input type="text" onChange={inputHandeler} value={value} />
      <button onClick={edit?.edit ? updateTodoHandler :addTodoHandler}>
        {edit.edit ? "update": "Add"}
      </button>

      {todolist.map((item, index) => {
        return (
          <div key ={index} 
          style={{
            display: "flex",
            alignItems: "center",
            // justifyContent:"center",
            }}>
          <h3>{index+1}. {item}</h3>
          <button 
            style={{height: "2rem", cursor: "pointer"}}
            onClick={() => { deleteItem(index);}}
            >
            Completed
            </button>
          <button 
            style={{height: "2rem", cursor: "pointer"}}
            onClick={() =>{
              editHandler(index);
            }}
            >Update</button>
            
          </div>
          )
      }
      )
    }
      
      
      
    </div>
  )
}

export default Todo