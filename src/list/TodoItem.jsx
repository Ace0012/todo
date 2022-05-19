import React from 'react'
import styles from './todo.module.css'
import {useState} from 'react'

const TodoItem = ({todo,onDelete}) => {
    const [ isCompleted, setCompleted ] = useState(todo.isCompleted)



  return (
  <div className={styles.todoList}>
          <div className={styles.todo} key = {todo.id}>
        <input className= {styles.input} type="checkbox" 
        checked = {isCompleted} 
        onChange = {(e)=>{
            // console.log(e.target.checked)
            setCompleted(e.target.checked)

        }
        }
            />
            <div className={isCompleted?styles.striked:''}>{todo.val}</div>
            <button className = {styles.Button} onClick={()=>{onDelete(todo.id)}}>-</button>
             

          </div>
          </div>
  )
}

export default TodoItem