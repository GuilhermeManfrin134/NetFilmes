import { Link } from "react-router-dom";

import './erro.css'

export default function Erro(){
    return(
        <div className="container">
            <h1>OPS! A página procurada não existe :(</h1>
            <h2>Gostaria de voltar a <Link to="/">página inicial</Link>?</h2>
        </div>
    )
}