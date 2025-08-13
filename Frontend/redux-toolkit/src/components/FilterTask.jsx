import React, { useState } from 'react'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import{ changeColor,setFilter } from '../features/tasks/taskSlice'

const FilterTask = () => {

const {filters,chColor}=useSelector((state)=>state.tasks)
console.log(filters);

const dispatch=useDispatch()

  return (
    <div>
      <Button variant='contained' color={chColor?'success':'warning'} onClick={()=>{dispatch(changeColor()),dispatch(setFilter('completed'))}}>All</Button>
      <Button variant='contained' color={chColor?'warning':'success'} onClick={()=>dispatch(changeColor())}>Completed</Button>
    </div>
  )
}

export default FilterTask
