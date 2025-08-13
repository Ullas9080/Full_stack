import {Button,Box} from '@mui/material'
const TaskItems = ({task}) => {
        return (  
     
    <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
        <li>{task.text}</li>
         <div>
           <Button variant='contained' color='secondary'>Done</Button> 
           <Button variant='contained' color='error'>Delete</Button> 
            </div>
     </Box>
 
        )
}

export default TaskItems
