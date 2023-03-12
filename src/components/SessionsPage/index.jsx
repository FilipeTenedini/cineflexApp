import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import TopMsg from "../TopMsg";

export default function SessionsPage(){
    const { idFilme } = useParams();


    return(
        <>
            <TopMsg text="Selecione o horário" />
            PAGINA DE SESSÃO do filme. {idFilme}
        </>
    );
}