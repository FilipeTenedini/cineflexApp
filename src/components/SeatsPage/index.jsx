import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { SeatsArea, ColorsDict, FormArea, InputArea } from "./style";
import { c } from "../../constants/colors";
import TopMsg from "../TopMsg";
import Seat from "../Seat"
import Circle from "../Circle";
import Footer from "../Footer";

export default function SeatsPage(){
    const { idSessao } = useParams();
    const [seats, setSeats] = useState([]);
    const [seatNumber, setSeatNumber] = useState([]);
    const [movie, setMovie] = useState({});
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');

    useEffect(() => {
        axios
            .get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
            .then( ({data}) => {
                setSeats(data.seats)
                setMovie({
                    name: data.movie.title,
                    picture: data.movie.posterURL,
                    day: data.day.weekday,
                    numberDay: data.day.date,
                    hour: data.name
                })
            })
            .catch(err => console.log(err));

            restart();
    }, [idSessao])

    function restart(){
        setSeats([]);
        setSeatNumber([]);
        setMovie([]);
        setSelectedSeats([]);
        setMovie({});
        setName('');
        setCpf('');
    }
    
    const addSeat = (number) => setSelectedSeats([number, ...selectedSeats]);

    const removeSeat = (number) => {
        const newList = selectedSeats.filter(item => item !== number);
        setSelectedSeats([...newList]);
    }
    
    const addSeatNumber = (n) => setSeatNumber([n, ...seatNumber]);

    const removeSeatNumber = (n) => {
        const newList = seatNumber.filter(item => item !== n);
        setSeatNumber([...newList]);
    }

    const reserveSeats = () => {
        axios
        .post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many",{
                ids: selectedSeats,
                name: name,
                cpf: cpf
            })
        .catch(err => console.log('azedo'));
    }

    const validateInfos = () => {
        const regex = /^[0-9]{11}$/;
        
        if(name.length >= 3 && regex.test(cpf)){
            reserveSeats();
        } else { 
            alert ('Digite os seus dados corretamente.'); 
        }
    }

    if (!seats){
        return (
            "loading..."
        )
    }

    return (
        <>
        <TopMsg text="Selecione o(s) assento(s)" />
        <SeatsArea>
            {seats.map( eachSeat => (
                <Seat 
                key={eachSeat.name}
                available={eachSeat.isAvailable}
                number={eachSeat.name}
                id={eachSeat.id}
                addSeat={(n) => addSeat(n)}
                removeSeat={(n) => removeSeat(n)}
                addSeatNumber={(n) => addSeatNumber(n)}
                removeSeatNumber={(n) => removeSeatNumber(n)}
                />
            ))}
        </SeatsArea>
        <ColorsDict>
                <Circle 
                bgColor={c.selectedBtn}
                borderColor={c.selectedBtnContour}
                text={'Selecionado'}
                />
                <Circle 
                bgColor={c.fullLightColor}
                borderColor={c.midLightColor}
                text={'Disponível'}
                />
                <Circle 
                bgColor={c.unavailableBtn}
                borderColor={c.unavailableBtnCountour}
                text={'Indisponível'}
                />
        </ColorsDict>
        <FormArea>
            <InputArea>
                Nome do Comprador:
                <input
                data-test="client-name"
                placeholder="Digite seu nome (Mínimo 3 letras)..." 
                value={name}
                onChange={e => setName(e.target.value)}
                />
            </InputArea>
            <InputArea>
                CPF do Comprador (apenas números):
                <input
                data-test="client-cpf"
                placeholder="Digite seu CPF (apenas números)..."
                value={cpf}
                onChange={e => setCpf(e.target.value)}
                />
            </InputArea>

            <button onClick={validateInfos} data-test="book-seat-btn">
                <Link 
                to="/sucesso" 
                state={
                        {
                            film: movie.name,
                            date: `${movie.numberDay} ${movie.hour}`,
                            seats: seatNumber.sort((a, b) => a - b),
                            name: name, 
                            cpf: cpf,
                        }
                    }>
                    Reservar Assento(s)
                </Link>
            </button>
        </FormArea>
        <Footer 
        picture={movie.picture}
        name={movie.name}
        hours={`${movie.day} - ${movie.hour}`}
        />
        </>
    );
}