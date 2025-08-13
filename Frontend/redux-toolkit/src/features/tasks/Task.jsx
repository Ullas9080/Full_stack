import React from 'react'
import { useSelector } from 'react-redux'
import TaskItems from '../../components/taskItems'
const Task = () => {

const{items,filters}=useSelector((state)=>state.tasks)

  return (
   <ul>
   {
      items.map((task)=>(
 <TaskItems key={task.id} task={task}/>
      ))
    }
   </ul>
  )
}

export default Task
