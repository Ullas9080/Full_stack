import { Button } from "@/components/ui/button";
import Navbar from "./Navbar";
import { useEffect, useRef, useState } from "react";
import { Textarea } from "../components/ui/textarea";
import axios from "axios";
import { Input } from "../components/ui/input";
import toast from "react-hot-toast";

function Home() {
  const title = useRef();
  const description = useRef();
  const [todo, setTodos] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [updateId, setUpdateId] = useState(null);
  const updateTitle = useRef();
  const updateDescription = useRef();

  const addTodo = async () => {
    try {
      const addTodo = {
        title: title.current.value,
        description: description.current.value,
      };

      const res = await axios.post(
        "http://localhost:8000/api/v2/todo/create",
        addTodo,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      toast(res.data?.message);
    } catch (error) {
      console.error(error.response?.data?.message || "Something went wrong");
    }
  };

  const deleteData = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:8000/api/v2/todo/delete/${id}`,
        { withCredentials: true }
      );

      toast(res.data?.message);
      setDeleteId(id);
    } catch (error) {
      console.error(error.response?.data?.message);
    }
  };

  useEffect(() => {
    const fetchTodoa = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/v2/todo/fetch", {
          withCredentials: true,
        });
        setTodos(res.data.todos);
      } catch (error) {
        console.error(error.response?.data?.message || "Something went wrong");
      }
    };

    fetchTodoa();
  }, [deleteId]);

  const updateTodo = async (previd) => {
    try {
     setUpdateId(previd)
      const res = await axios.put(
        `http://localhost:8000/api/v2/todo/update/${updateId}`,
        { title: updateTitle, description: updateDescription },
        { withCredentials: true }
      );
   

      if(updateId === previd){
    return <div>
      <input type="text" placeholder="title" ref={updateTitle}/><br />
      <input type="text" placeholder="description" ref={updateDescription}/>
    </div>

    
      }

   toast(res.data?.message)
    } catch (error) {
      toast(error.response?.data?.message);
    }
  };

  return (
    <div className="bg-gray-600 min-h-screen p-4">
      <div className="flex justify-between items-center mb-10">
        <Navbar />
      </div>
      <div className="flex items-center gap-5">
        <Input type="text" placeholder="Add a new todo..." ref={title} />
        <Textarea ref={description} />
        <Button onClick={addTodo}>Add Todo 🚀</Button>
      </div>
      <div>
        <h1 className="text-center text-2xl text-white underline">
          Fetching Todo
        </h1>
        <div>
          <div className="w-2xs">
            {todo.map((prev) => (
              <div key={prev._id} className="text-balance border-4">
                <h1 className="text-2xl text-red-500">{prev.title}</h1>
                <br />
                <p className="text-blue-400">{prev.description}</p>
                <br />
                <Button
                  onClick={() => {
                    deleteData(prev._id);
                  }}
                >
                  Delete
                </Button>
                <br />
                <Button onClick={()=>updateTodo(prev._id)}>Upadte</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
