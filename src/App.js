import React from 'react'
import Navbar from './Layout/Navbar'
import Home from './Pages/Home'
import AddUser from './Users/AddUser'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import EditUser from './Users/EditUser'
import ViewUser from './Users/ViewUser'

function App() {
  return (
    <Router>
      
      <div className='App'>
        <Navbar/>
        
        <Routes>    
            <Route path='/' element={<Home/>}></Route>
            <Route path='/adduser' element={<AddUser/>}></Route>
            <Route path='/edituser/:id' element={<EditUser/>}></Route>
            <Route path='/viewuser/:id' element={<ViewUser/>}></Route>
        </Routes>

    </div>
    </Router>
  )
}

export default App