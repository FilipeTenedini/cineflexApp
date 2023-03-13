import { useLocation, Link } from 'react-router-dom';
import { Container, Infos, Title, Text, HomeButton } from './style';
import { c } from '../../constants/colors';
import TopMsg from "../../components/TopMsg";
export default function SuccessPage(){
    const { state } = useLocation();
    return (
        <Container>
            <TopMsg text="Pedido feito <br /> com sucesso!" color={c.success}/>
            <Infos>
                <div data-test="movie-info">
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