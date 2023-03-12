import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container } from "./style";
import TopMsg from "../TopMsg";
import Film from "../Film";

export default function FilmsPage(){
    const [films, setFilms] = useState(null);

    useEffect(() => {
        axios
            .get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
            .then( ({data}) => setFilms(data))
            .catch(err => console.log(err));
    }, [])
    
    if (!films){
        return (
            "loading..."
        )
    }

    return(
        <>
            <TopMsg text="Selecione o filme"/>
            <Container>
                {films.map( item => (
                    <Link to={`/sessoes/${item.id}`} key={item.id} > 
                        <Film picture={item.posterURL}/>
                    </Link>
                ))}
            </Container>
        </>
    );
}