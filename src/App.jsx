import { useState, useEffect } from "react"
import TodoInput from "./Components/TodoInput"
import TodoList from "./Components/TodoList"


function App() {
 



const [todos , setTodos]= useState([])
const [todoValue,setTodoValue]=useState('')
function persistData(newList) {
  localStorage.setItem('todos',JSON.stringify({todos: newList}))
}
function handleAddTodos(newTodo) {
  const newTodoList=[...todos,newTodo]
  persistData(newTodoList)
  setTodos(newTodoList)
}

function handleDeleteTodo(index) {
  const newTodolist = todos.filter((todo,todoIndex)=>{
    return todoIndex !== index
  })
  setTodos(newTodolist)
}

function handleEditTodo(index) {
  const valueToBeEdited = todos[index]
  setTodoValue(valueToBeEdited)
  handleDeleteTodo(index)
}

useEffect(()=>{
  if(!localStorage){
    return 
  }
  let localTodos = localStorage.getItem('todos')
  if(!localTodos){
    return 
  }
  localTodos=JSON.parse(localTodos).todos
  setTodos(localTodos)
},[])

  return (
    <>
     
        <TodoInput handleAddTodos={handleAddTodos} todoValue={todoValue} setTodoValue={setTodoValue}/>
        <TodoList handleEditTodo={handleEditTodo} todos={todos} handleDeleteTodo={handleDeleteTodo}/>
 
    </>
  )
}

export default App
