import mongoose from "mongoose";

const conntectDB=async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/todo_app")
        console.log(`Database Connected`)
    } catch (error) {
        console.error(error)
    }
}

export default conntectDB