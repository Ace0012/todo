import React from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";
import styles from './todo.module.css'

const Todo = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);


const onDelete = (id)=>{
let newTodos = todos.filter(todo=>todo.id!==id)
setTodos(newTodos)
}

  return (
    <div className={styles.container}>
      <h2>TODO LIST</h2>
      <input className={styles.input2}
      placeholder = 'Write Something'
        value={value}
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <button className={styles.btn2}
        onClick={() => {
          console.log(value);
          setTodos([...todos, { val: value,id:Date.now() }]);
          setValue("");
        }}
      >
        +
      </button>


      {todos.map((todo) => (
       

      <TodoItem key= {todo.id}  todo= {todo} onDelete = {onDelete} />
        

      ))}
   
    </div>
  );
};

export default Todo;
