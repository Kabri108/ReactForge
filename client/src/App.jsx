import { useState } from 'react'
import HomeScreen from './Screens/HomeScreen'
import { Route, Router, Routes } from 'react-router-dom'
import AboutScreen from './Screens/AboutScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/about' element={<AboutScreen/>}/>
    </Routes>
  )
}

export default App
