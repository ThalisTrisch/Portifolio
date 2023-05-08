import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Projetos from './pages/Projetos'
import Principal from './pages/Principal'
import './App.css'

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Principal/>}/>
        <Route path='/Projetos' element={<Projetos/>}/>
      </Routes>
    </Router>
  )
}

export default Rotas;
