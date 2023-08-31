import Home from './components/pages/Home';
import QuemSomos from './components/pages/QuemSomos';
import Page404 from './components/pages/Page404';
import Cadastro from './components/pages/Cadastro';
import {Routes, Route} from 'react-router-dom';

import "./App.css";
import Contato from './components/pages/Contato';

const App = () => {
    return (
        <Routes>
            <Route path = '/' element = {<Home />} />
            <Route path = '/quem-somos' element = {<QuemSomos />} />
            <Route path = '/contato' element = {<Contato />} />
            <Route path = '/cadastro' element = {<Cadastro />} />
        </Routes>
    );
};

export default App;