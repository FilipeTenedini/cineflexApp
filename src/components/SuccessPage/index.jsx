import { useLocation, Link } from 'react-router-dom';
import { Container, Infos, Title, Text, HomeButton } from './style';

export default function SuccessPage(){
    const { state } = useLocation();
    return (
        <Container>
            <h2>
            Pedido feito <br />
            com sucesso!
            </h2>
            <Infos>
                <div ata-test="movie-info">
                    <Title>
                        Filme e sessão
                    </Title>
                    <Text>
                        {state.film} <br />
                        {state.date}
                    </Text>
                </div>
                <div data-test="seats-info">
                    <Title>
                        Ingressos
                    </Title>
                    <Text>
                        {state.seats.map(seat => (
                            <div key={seat}>Assento {seat}</div>
                        ))}
                    </Text>
                </div>
                <div data-test="client-info">
                    <Title>
                            
                        Comprador
                    </Title>
                    <Text>
                        Nome: {state.name} <br />
                        Cpf: {state.cpf}
                    </Text>
                </div>
            </Infos>
            <HomeButton data-test="go-home-btn">
                <Link to={"/"}>
                    Voltar pra Home
                </Link>
            </HomeButton>
        </Container>
    );
}