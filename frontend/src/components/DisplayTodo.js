import { Paper ,Card, Button} from '@mui/material'
import axios from 'axios'
import React,{createContext, useContext} from 'react'
import { todoContext } from '../Context/todoContextProvider'

const DisplayTodo = () => {

  const {todoList,editTodo}=useContext(todoContext)

  const handleDelete=(id)=>{
    axios.delete(`todos/delete/${id}`)
    .then((res)=>{
      editTodo(todoList.filter((todo)=> todo.id!==id))
    }).catch(err=>{
      console.log(err)
    })
  }



  return (
    <div style={{
      marginTop:"10%"
    }}>
      {todoList.map((todo)=>{
        return (
          <Card variant="outlined" style={{
            marginTop:"2%",padding:"4%", display:"flex", justifyContent:"space-between",alignItems:"center"
          }} key={todo.id}><span>{todo.name}</span><span><Button onClick={()=>handleDelete(todo.id)}>Delete</Button></span></Card>
        )
      })}
    </div>
  )
}

export default DisplayTodo