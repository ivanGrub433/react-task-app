import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { Tasks } from './components/data/Task'
import {useState, useEffect} from 'react'

function App() {
  const [tasks, setTask] = useState([]);
  useEffect(()=>{
      setTask(Tasks)
  },[]);

  function createTask(tittle, descripcion){
    const newTask={
      tittle : tittle,
      id : tasks.length,
      description : descripcion
      }
      setTask([...tasks,newTask]);
  }

  function deleteTask(taskId){
    setTask(tasks.filter(tasks => tasks.id !== taskId));
  }
  return (
    <div>
      <TaskForm createTask = { createTask }/>
      <TaskList tasks = {tasks} deleteTask = {deleteTask}/>
    </div>
  )
}

export default App