import './App.css'
import Register from './Pages/Register/Register'
import Category from './Pages/Category/Category'
import Display from './Pages/Display/Display'
import Browse from './Pages/Browse/Browse'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>} />
        <Route path='/category' element={<Category/>} />
        <Route path='/display' element={<Display/>} />
        <Route path='/browse' element={<Browse/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
