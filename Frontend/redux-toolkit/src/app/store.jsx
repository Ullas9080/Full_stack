import { configureStore } from "@reduxjs/toolkit";
import taskSliceReducer from "../features/tasks/taskSlice.jsx"


export const store=configureStore({
reducer:{
tasks:taskSliceReducer 
}
})