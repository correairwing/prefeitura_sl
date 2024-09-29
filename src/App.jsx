import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import ListUser from './components/ListUser';
import ListProperty from './components/ListProperty';
import CreateProperty from './components/CreateProperty';
import EditProperty from './components/EditProperty';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h1 className='text-xl font-bold my-5'>Sistema de gestão de Pessoas e Imóveis - Prefeitura Municipal de São Leopoldo</h1>

        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to="/">Lista de pessoas</Link>
              </li>
              <li>
                <Link to="user/create">Cadastrar pessoa</Link>
              </li>
              <li>
                <Link to="property/list">Lista de imóveis</Link>
              </li>
              <li>
                <Link to="property/create">Cadastrar imóvel</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route index element={<ListUser />} />
            <Route path="user/create" element={<CreateUser />} />
            <Route path="user/:id/edit" element={<EditUser />} />
            <Route path="property/list" element={<ListProperty />} />
            <Route path="property/create" element={<CreateProperty />} />
            <Route path="property/:id/edit" element={<EditProperty />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
