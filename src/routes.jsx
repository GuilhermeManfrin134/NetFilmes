import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Filme from './pages/Filme';

const Routex = () => {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/filme/:id" element={<Filme />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routex;