import { useLocation, Link } from 'react-router-dom';
import { Container, Infos, Title, Text, HomeButton } from './style';
import { c } from '../../constants/colors';
import TopMsg from "../../components/TopMsg";
export default function SuccessPage(){
    const { state } = useLocation();
    return (
        <Container>
            <TopMsg text="Pedido feito com sucesso!" color={c.success}/>
            <Infos>
                <div>
                    <Title>
                        Filme e sessão
                    </Title>
                    <Text>
                        {state.film} <br />
                        {state.date}
                    </Text>
                </div>
                <div>
                    <Title>
                        Ingressos
                    </Title>
                    <Text>
                        {state.seats.map(seat => (
                            <div key={seat}>Assento {seat}</div>
                        ))}
                    </Text>
                </div>
                <div>
                    <Title>
                            
                        Comprador
                    </Title>
                    <Text>
                        Nome: {state.name} <br />
                        Cpf: {state.cpf}
                    </Text>
                </div>
            </Infos>
            <HomeButton>
                <Link to={"/"}>
                    Voltar pra Home
                </Link>
            </HomeButton>
        </Container>
    );
}