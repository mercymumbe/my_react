
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Products from './Pages/Products'

function App() {
  return (
    <>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Products' element={<Products/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App