import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { SeatsArea, FormArea, InputArea } from "./style";
import { BASE_URL } from "../../constants/url";
import TopMsg from "../../components/TopMsg";
import Seat from "../../components/Seat"
import Footer from "../../components/Footer";
import Captions from "./Caption";

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
            .get(`${BASE_URL}/showtimes/${idSessao}/seats`)
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
    
    const toggleSeat = (number) => {
        if (selectedSeats.includes(number)) {
            const newList = selectedSeats.filter(item => item !== number);
            setSelectedSeats([...newList]);
        } else {
            setSelectedSeats([number, ...selectedSeats])
        }
        
    };

    const toggleSeatNumber = (n) => {
        if (seatNumber.includes(n)) {
            const newList = seatNumber.filter(item => item !== n);
            setSeatNumber([...newList]);
        } else {
            setSeatNumber([n, ...seatNumber]);
        }
    } 

    const reserveSeats = () => {
        axios
        .post(`${BASE_URL}/seats/book-many`,{
                ids: selectedSeats,
                name,
                cpf
            })
        .catch(err => console.log('error.'));
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
                toggleSeat={(n) => toggleSeat(n)}
                toggleSeatNumber={(n) => toggleSeatNumber(n)}
                />
            ))}
        </SeatsArea>
        <Captions />
        <FormArea>
            <InputArea>
                Nome do Comprador:
                <input
                    placeholder="Digite seu nome (Mínimo 3 letras)..." 
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </InputArea>
            <InputArea>
                CPF do Comprador (apenas números):
                <input
                    placeholder="Digite seu CPF (apenas números)..."
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                />
            </InputArea>

            <button onClick={validateInfos}>
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