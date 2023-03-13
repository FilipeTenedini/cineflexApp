import { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "./style";
import { BASE_URL } from "../../constants/url";
import TopMsg from "../../components/TopMsg";
import Film from "../../components/Film";

export default function FilmsPage(){
    const [films, setFilms] = useState(null);

    useEffect(() => {
        axios
            .get(`${BASE_URL}/movies`)
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