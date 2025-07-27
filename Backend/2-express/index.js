import e from 'express'
import students from './student.js'
const app=e()


// app.use('/',students)


// app.get('',(req,res)=>{ 
// res.send('Hello from index')
// })

// app.get('/app/:id',(req,res)=>{

//     const {id}=req.params
// res.send(id)
// })


app.listen(8080,()=>{
    console.log("Server Started....")
})



