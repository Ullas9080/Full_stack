import './App.css'
import AddTask from './components/AddTask'
import FilterTask from './components/FilterTask'
import Task from './features/tasks/Task'
const App = () => {
  return (
    <div>
<h1>Task Manager</h1>
<AddTask/>
<FilterTask/>
<Task/>
    </div>
  )
}

export default App
