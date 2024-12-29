import { HashRouter, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import NotFound from './Pages/NotFound';
import Biography from './Pages/Biography';
import Institutions from './Pages/Institutions';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/biography' element={<Biography />} />
        <Route path='/' element={<MainPage />} />
        <Route path='/education/*' element={<Institutions />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
