import TaskCard from './TaskCard'
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskList({ }) {
    const { tasks } = useContext(TaskContext);
    if (tasks.length === 0) {
        return <div><h1>No hay tareas aun</h1></div>
    } else {
        return (<div className='grid grid-cols-4 gap-2'>
            {(tasks.map((e) => {
                return <TaskCard key={e.id} task={e} />
            }))}
        </div>)
    }

}

export default TaskList