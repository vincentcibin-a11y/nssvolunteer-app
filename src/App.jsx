import { useState } from 'react'
import './App.css'
import addvolunteer from '../Components/addvolunteer'
import viewvolunteer from '../Components/viewvolunteer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<addvolunteer/>}/>
          <Route path="View Volunteer" element={<viewvolunteer/>}/>
          <Route path="Add volunteer" element={<addvolunteer/>}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
