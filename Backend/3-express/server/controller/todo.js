import { Todo } from "../model/todo.js";

export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res
        .status(404)
        .json({ sucess: false, message: "All the field should be filled" });
    }

    await Todo.create({ title, description });

    return res.status(200).json({ sucess: true, message: "Added to database" });
  } catch (error) {
    console.error(error);
  }
};

export const fetchTodo = async (req, res) => {
  try {
    const todos = await Todo.find();
    return res.status(200).json({ sucess: true, todos });
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo=async (req,res) => {
    try {
        
const todoId=await req.params.id

const {title}=req.body


if(!todoId){
       return res
        .status(404)
        .json({ sucess: false, message: "Enter correct id" });
}

await Todo.findByIdAndUpdate(todoId,{title},{new:true})

 return res.status(200).json({ sucess: true, message: "hey i got updated" });
    } catch (error) {
        console.log(error)
    }
}

export const deleteTodo=async(req,res)=>{

try {
  const todoId=req.params.id

if(!todoId){
       return res
        .status(404)
        .json({ sucess: false, message: "Enter correct id" });
}

await Todo.findByIdAndDelete(todoId)

 return res.status(200).json({ sucess: true, message: "hey i got deleted" });
} catch (error) {
  console.log(error)
}

}
