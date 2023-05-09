import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Principal from './pages/Principal'
import './App.css'

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Principal/>}/>
      </Routes>
    </Router>
  )
}

export default Rotas;
