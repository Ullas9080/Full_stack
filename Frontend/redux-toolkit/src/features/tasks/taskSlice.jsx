import { createSlice, nanoid } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    filters: "all",
    chColor:true
  },
  reducers: {
    addTask: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: (text) => {
        return {
          payload: {
            id: nanoid(),
            text,
            completed:false
          },
        };
      },
    },
    toggleTask:(state,action)=>{
        const task=state.items.find((t)=>t.id=== action.payload);
        if(task) task.completed =!task.completed;
    },
    deleteTask:(state,action)=>{
    state.items = state.items.filter((t)=>t.id !== action.payload)
    },
    setFilter:(state,action)=>{
        state.filters=action.payload;
    },
    changeColor:(state,action)=>{
     state.chColor=!state.chColor;
    }
  },
});

export const {addTask,toggleTask,deleteTask,setFilter,changeColor}=taskSlice.actions;
export default taskSlice.reducer;
