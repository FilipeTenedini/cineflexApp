import { Container, FilmPic } from "./style";
import { Link } from "react-router-dom";

export default function Film({picture, id, name}){
    return (
        <Container>
            <Link to={`/sessoes/${id}`}>
                <FilmPic src={picture} alt={name} />
            </Link>
        </Container>
    );
}