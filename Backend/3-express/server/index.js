import e from "express"
import dotenv from "dotenv"
import conntectDB from "./db/database.js"
import userRoute from './routes/user.js'
import todoRoute from './routes/todo.js'
import cookieParser from "cookie-parser"
import cors from 'cors'
const app=e()
dotenv.config()
app.use( cors({
    origin: "http://localhost:5173", 
    credentials: true,               
  }))
app.use(e.json())
app.use(cookieParser())

const Port=process.env.PORT

conntectDB()


app.use('/api/v1/user',userRoute)
app.use('/api/v2/todo',todoRoute)

app.listen(Port,()=>{
console.log(`Server Started at ${Port}....`)
})