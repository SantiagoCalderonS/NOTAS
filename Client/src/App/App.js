import './App.css';
import { Barraguia } from '../componentes/barra/barraguia';
import { Postal } from '../componentes/postal/postal';
import { Papelera } from '../componentes/papelera/papelera';
import { useLocation } from 'react-router-dom'
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  //const ruta= useLocation().pathname



  return (
    <div className="App">
       <Barraguia/>
      <Routes>
        <Route path='/postal' element={<Postal/>}/>
        <Route path='/papelera' element={<Papelera/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
