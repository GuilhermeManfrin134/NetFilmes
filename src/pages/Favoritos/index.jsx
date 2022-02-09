import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { MdDelete } from 'react-icons/md';

import './favoritos.css';

export default function Favoritos(){

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {

        const minhaLista = localStorage.getItem('filmes');

        setFilmes(JSON.parse(minhaLista) || []);

    }, []);

    function handleDelete(id){
        let filtroFilmes = filmes.filter((item) => {
            return(item.id !== id)
        })

        setFilmes(filtroFilmes);
        localStorage.setItem('filmes', JSON.stringify(filtroFilmes));

        toast.success('Filme excluído com sucesso!');
    }

    return(
        <div className="meus-filmes">
            <h1>Página de Filmes Favoritos</h1>
            {
                filmes.length === 0 && <span>Você não possui nenhum filme salvo :(</span>
            }
            <ul>
                {
                    filmes.map((item) => {
                        return(
                            <li key={item.id}>
                                <span>{item.nome}</span>

                                <div className="details">
                                    <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                    <button onClick={() => handleDelete(item.id)}><MdDelete size={25} color={'rgb(92, 36, 145)'}/></button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}