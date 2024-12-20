import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './Pages/MainPage'
import NotFound from './Pages/NotFound'
import Biography from './Pages/Biography'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/biography' element={<Biography/>}/>
        <Route path='/*' element={<NotFound/>}/>
        <Route path='/NotFound' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
