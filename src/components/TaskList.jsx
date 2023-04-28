import TaskCard from './TaskCard'

function TaskList({tasks, deleteTask}) {
    if(tasks.length === 0){
        return <div><h1>No hay tareas aun</h1></div>
      }else{
    return (tasks.map((e) => {
        return <TaskCard key = {e.id} task = {e} deleteTask = {deleteTask}/>
    }));
    }
    
}

export default TaskList