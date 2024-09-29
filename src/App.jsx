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
    <div className='w-full'>
      <div className='flex items-center justify-center gap-10 '>
        <img src={`${process.env.PUBLIC_URL}/images/pmsl.png`} alt="Logo" />
        <h1 className='text-3xl text-blue-500 uppercase font-bold my-5'>Sistema de gestão de Pessoas e Imóveis</h1>
      </div>
        <BrowserRouter>
          <div>
            <nav className='bg-sky-800 text-white text-2xl font-bold py-5'>
              <ul className='flex justify-center gap-10'>
                <li className='hover:text-gray-300'>
                  <Link to="/">Lista de pessoas</Link>
                </li>
                <li className='hover:text-gray-300'>
                  <Link to="user/create">Cadastrar pessoa</Link>
                </li>
                <li className='hover:text-gray-300'>
                  <Link to="property/list">Lista de imóveis</Link>
                </li>
                <li className='hover:text-gray-300'>
                  <Link to="property/create">Cadastrar imóvel</Link>
                </li>
              </ul>
            </nav>
            <div className='container'>
              <Routes>
                <Route index element={<ListUser />} />
                <Route path="user/create" element={<CreateUser />} />
                <Route path="user/:id/edit" element={<EditUser />} />
                <Route path="property/list" element={<ListProperty />} />
                <Route path="property/create" element={<CreateProperty />} />
                <Route path="property/:id/edit" element={<EditProperty />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
