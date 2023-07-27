import { HashRouter, Route, Routes } from 'react-router-dom';
import { NavBarCustom } from '../../components/NavBarCustom/NavBatrCustom';
import { AuthProvider } from '../../Context/auth';
import { Login } from '../Login-page/Login';
import { RutasPrivadas } from '../routes/RutasPrivadas';
import './App.css';

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <NavBarCustom />

          <Routes>

          <Route path='/login' element={<Login />} />

          <Route path='*' element={<RutasPrivadas />} />   

          </Routes>


      </AuthProvider>
    </HashRouter >

  );
}

export default App;
