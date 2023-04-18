import {Route, Routes } from 'react-router-dom';
import { Admin } from './Components/Administrador/Admin';
import ErrorFail from './Components/error/error';
import LogCliente from './Components/log-cliente/logCliente';
import LogRestaurante from './Components/log-restaurante/logRestaurante'
import MenuDetalles from './Components/menu/menu-detalles/menuDetalles';
import Menu from './Components/menu/menuC';
import PagPrincipal from './Components/pag-principal/pagPrincipal';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PagPrincipal />}/>
        <Route path='/login' element={<LogCliente />}/>
        <Route path='/login/logAdmin' element={<LogRestaurante />}/>
        <Route path='/Menu' element={<Menu />}/>
        <Route path='/MenuDetalles/:foodId' element={<MenuDetalles />} />
        <Route path='/Admon' element={<Admin />}/>
        <Route path='/Error' element={<ErrorFail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
