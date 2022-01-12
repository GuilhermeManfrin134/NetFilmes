import {Link} from 'react-router-dom';

import './Header.css';

export default function Header(){
    return(
        <header>
            <Link className='logo' exact to="/">NetFilmes</Link>
            <Link className='favoritos' to="/favoritos">Salvos</Link>
        </header>
    )
} 