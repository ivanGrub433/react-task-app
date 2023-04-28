import React from 'react'

function TaskCard({ task, deleteTask }) {

  return (
    <div key={task.id} >
            <h1>{task.tittle}</h1>
            <p>{task.description}</p>
            <button onClick={() => {deleteTask(task.id)}}> 
              eliminar
            </button>
    </div>
  )
}

export default TaskCard