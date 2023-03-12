import { Container, FilmPic } from "./style";

export default function Film({picture}){
    return (
        <Container>
            <FilmPic src={picture} alt="A film picture" />
        </Container>
    );
}