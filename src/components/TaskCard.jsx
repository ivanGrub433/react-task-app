import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskCard({ task }) {

  const { deleteTask } = useContext(TaskContext);

  return (
      <div key={task.id} className='bg-gray-800 text-white p-4 rounded-md'>
        <h1 className='text-xl font-bold capitalize'>{task.tittle}</h1>
        <p className='text-gray-500 text-sm'>{task.description}</p>
        <button className='bg-red-500 rounded-md mt-4 py-1 px-2 hover:bg-red-300' onClick={() => { deleteTask(task.id) }}>
          eliminar tarea
        </button>
      </div>
  )
}

export default TaskCard