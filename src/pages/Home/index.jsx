import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import api from "../../services/api";

import './Home.css';


export default function Home(){
    
    const movies = [];
    
    const [filmes, setFilmes] = useState(movies);
    
    useEffect(() => {
        
        async function loadFilmes(){
            const response = await api.get('r-api/?api=filmes')
            //console.log(response.data)
            setFilmes(response.data)
        };
        
        loadFilmes();
        
    }, []);
    
    const [search, setSearch] = useState('');

    const lowerSearch = search.toLowerCase();
  
    const searchFilter = filmes.filter((f) => f.nome.toLowerCase().includes(lowerSearch))
    
    return(
        <div className="container">
            <input 
                className="filtro"
                type='text' 
                placeholder="Nome do filme" 
                value={search} 
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="lista-filmes">
                {
                    searchFilter.map((filme) => {
                        return(
                            <article key={filme.id}>
                                <strong>{filme.nome}</strong>
                                <img src={filme.foto} alt={filme.nome}/>
                                <Link to={`/filme/${filme.id}`}>Acessar</Link>
                            </article>
                        )
                    })
                }
            </div>
        </div>
    )
}