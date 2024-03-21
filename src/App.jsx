import React from 'react'
import {Route,Routes} from "react-router-dom"
import Landing from './components/landing/Landing'
import About from './components/about/About'
const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Landing/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      </Routes>
    </div>
  )
}

export default App
