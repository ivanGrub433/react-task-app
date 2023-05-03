import { createContext, useState, useEffect} from 'react'
import { Tasks } from '../components/data/Task'

export const TaskContext = createContext();

export function TaskContextProvider(props) {

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
    <TaskContext.Provider value = {{tasks, createTask, deleteTask}}> 
        {props.children}
    </TaskContext.Provider>
  )
}