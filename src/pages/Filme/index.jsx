import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

import api from '../../services/api';

import './filme-info.css';

export default function Filme(){
    const {id} = useParams('');
    const navigate = useNavigate();

    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadFilme(){
            const response = await api.get(`r-api/?api=filmes/${id}`);

            if (response.data.length === 0) {
                //tentou acessar com um ID que nao existe, navega ele para outro local
                navigate('/');
                return
              }

            setFilme(response.data)
            setLoading(false);
        }

        loadFilme();

        return () =>{
            console.log('componente desmontado')
        }

    }, [navigate, id]);

    function salvaFilme(){
        //Conferindo se já existe algo salvo no localStorage
        const minhaLista = localStorage.getItem('filmes');
        //Puxando os filmes que já existem salvos
        let filmesSalvos = JSON.parse(minhaLista) || [];
        //Verificar se o filme já está salvo
        const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id);

        if(hasFilme){
            toast.error('Opa! Você já possui este filme salvo nos Favoritos!');
            return;
        }
        //Adicionando filme
        filmesSalvos.push(filme);
        //Salvando no localStorage
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
        toast.success("Filme salvo com sucesso! :)");
    };

    if(loading){
        return(
            <div className='filme-info'>
                <h1>Carregando seu filme...</h1>
            </div>
        )
    }
    return(
        <div className='filme-info'>
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome}/>
            <h3>Sinopse</h3>
            {filme.sinopse}

            <div className='botoes'>
                <button onClick={salvaFilme}>Salvar</button>
                <button>
                    <a target="_blank" rel='noreferrer' href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}