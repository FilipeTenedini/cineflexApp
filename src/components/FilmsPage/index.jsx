import { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "./style";
import PageMsg from "../PageMsg";

export default function FilmsPage(){
    const [films, setFilms] = useState(null);

    useEffect(() => {
        axios
            .get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
            .then(response => console.log(response.data))
            .catch(err => console.log(err));
    }, [])
    
    if (!films){
        return (
            "loading..."
        )
    }

    return(
        <>
            <PageMsg />
            <Container>

            </Container>
        </>
    );
}