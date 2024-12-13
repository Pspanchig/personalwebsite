import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './Pages/MainPage'
import NotFound from './Pages/NotFound'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/*' element={<NotFound/>}/>
        <Route path='/NotFound' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
