import './Headers.css';
import { NavLink } from 'react-router-dom';
import Button from '../utils/button';

import useUserStore from '../../store/userStore.js';

const Headers = () => {

  const nameUser = useUserStore((state) => state.name)
  const isLogged = useUserStore((state) => state.isLogged)
  const userLogin = useUserStore((state) => state.login)
  const userLogout = useUserStore((state) => state.logout)

  return (
    <header>
      <h1>Liverpool - {nameUser}</h1>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/quem-somos" className='hover'>Quem Somos</NavLink></li>
          <li><NavLink to="/contato">Contato</NavLink></li>

          {
            isLogged ?
              <li><Button variant="primary" onClick={() => userLogout()}>Logout</Button></li>
              :
              <li><Button variant="primary" onClick={() => userLogin({
                name: "Louis",
                email: "louis@gmail.com",
                photo: "..."
              })}>Login</Button></li>
          }
          <li><Button variant="secondary">Cadastro</Button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Headers;