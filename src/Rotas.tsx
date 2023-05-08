import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Conhecimentos from './pages/Conhecimentos'
import Projetos from './pages/Projetos'
import Principal from './pages/Principal'
import './App.css'

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Principal/>}/>
        <Route path='/Projetos' element={<Projetos/>}/>
        <Route path='/Conhecimentos' element={<Conhecimentos/>}/>
      </Routes>
    </Router>
  )
}

export default Rotas;
