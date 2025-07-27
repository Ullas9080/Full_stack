import e from "express";

const app=e()

// const c1=(req,res,next)=>{
// console.log("First CallBack")
// next()
// }

// const c2=(req,res,next)=>{
// console.log("Second CallBack")
// next()
// }
 
// const c3=(req,res,next)=>{
// console.log("Third CallBack")
// next()
// }

// app.get("/array-cd",[c1,c2,c3],(req,res)=>{
// res.send("All callback Done")
// })

// app.get("/student",(req,res)=>{
// res.send("fecth Student")
// })
// app.post("/student",(req,res)=>{
// res.send("Add Student")
// })
// app.put("/student",(req,res)=>{
// res.send("Update Student")
// })
// app.delete("/student",(req,res)=>{
// res.send("Delete Student")
// })

app.route("/student")
.get((req,res)=>{res.send("Fetch student")})
.post((req,res)=>{res.send("Add Student")})
.put((req,res)=>{res.send("Upadte Student")})
.delete((req,res)=>{res.send("Delete Student")})

app.listen(8080,()=>{
    console.log('Server started...')
})