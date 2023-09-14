import Home from './components/pages/Home';
import QuemSomos from './components/pages/QuemSomos';
import {Routes, Route} from 'react-router-dom';

import "./App.css";
import Contato from './components/pages/Contato';

const App = () => {
    return (
        <Routes>
            <Route path = '/' element = {<Home />} />
            <Route path = '/quem-somos' element = {<QuemSomos />} />
            <Route path = '/contato' element = {<Contato />} />
        </Routes>
    );
};

export default App;