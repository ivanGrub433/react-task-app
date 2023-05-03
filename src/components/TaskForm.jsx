import React, { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskForm() {

  const { createTask } = useContext(TaskContext);
  const [tittle, settittle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(tittle, description);
    settittle(" ");
    setDescription(" ");
  }

  return (
    <div className='max-w-md mx-auto'>
      <form onSubmit={handleSubmit} className='bg-slate-500 p-4 mb-4'>
        <input placeholder="Escribe tu tarea" type="text"
          onChange={(e) => settittle(e.target.value)}
          value={tittle}
          autoFocus className='rounded-md bg-slate-300 p-3 w-full mb-3' />
        <textarea placeholder="Escribe tu descripcion" type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className='rounded-md bg-slate-300 p-3 w-full mb-3' />
        <div className='max-w-md mx-auto'>
          <button className='bg-green-800 rounded-md py-1 px-2 hover:bg-green-300'>
            Guardar
          </button>
        </div>
      </form>
    </div>
  )
}

export default TaskForm