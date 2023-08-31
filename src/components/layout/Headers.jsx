import './Headers.css';
import { NavLink } from 'react-router-dom';

const Headers = () => {
  return (
    <header>
        <h1>Liverpool</h1>
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/quem-somos" className='hover'>Sobre</NavLink></li>
                <li><NavLink to="/contato">Contato</NavLink></li>
                <li><NavLink to="/cadastro">Cadastro</NavLink></li>
            </ul>
        </nav>
    </header>
  );
};

export default Headers;