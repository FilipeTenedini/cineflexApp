import { useParams } from "react-router-dom";

export default function SeatsPage(){
    const { idSessao } = useParams();
    console.log(idSessao);
    
    return (
        <>
            ...
        </>
    );
}