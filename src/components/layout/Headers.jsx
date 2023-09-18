import './Headers.css';
import { NavLink } from 'react-router-dom';
import Button from '../utils/button';

const Headers = () => {
  return (
    <header>
      <h1>Liverpool</h1>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/quem-somos" className='hover'>Quem Somos</NavLink></li>
          <li><NavLink to="/contato">Contato</NavLink></li>
          <li><Button variant="primary">Login</Button></li>
          <li><Button variant="secondary">Cadastro</Button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Headers;