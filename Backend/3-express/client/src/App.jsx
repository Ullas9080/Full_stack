import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'

const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route path='/SignUp' element={<SignUp/>}></Route>
      
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </Router>
    </div>
  )
}

export default App