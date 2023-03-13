import { useEffect, useState } from "react";
import axios from "axios";
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
                        <Film 
                        picture={item.posterURL}
                        id={item.id}
                        name={item.title}
                        key={item.id} />
                ))}
            </Container>
        </>
    );
}