import React, { useState } from 'react'

function TaskForm(props) {
  const [tittle, settittle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.createTask(tittle, description);
    settittle(" ");
    setDescription(" ");
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Escribe tu tarea" type="text"
          onChange={(e) => settittle(e.target.value)}
          value={tittle}
          autoFocus />
        <textarea placeholder="Escribe tu descripcion" type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description} />
        <button>
          Guardar
        </button>
      </form>
    </div>
  )
}

export default TaskForm