import { useState } from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import Header from './Components/Header'
import Footer from "./Components/Footer"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div className='App'>
    <Header/>
   <Home/>

   <Footer/>
 
  </div>
    </>
  )
}

export default App
