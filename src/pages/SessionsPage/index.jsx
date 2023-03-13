import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { SessionArea, SessionDay, SessionHours, SessionHour } from "./style";
import TopMsg from "../../components/TopMsg";
import Footer from "../../components/Footer";
import { BASE_URL } from "../../constants/url";

export default function SessionsPage(){
    const { idFilme } = useParams();
    const [sessions, setSessions] = useState(null)
    const [movie, setMovie] = useState();

    useEffect(() => {
        axios
            .get(`${BASE_URL}/movies/${idFilme}/showtimes`)
            .then( ({data}) => {
                setSessions(data.days);
                setMovie({
                    picture: data.posterURL,
                    name: data.title,
                })
            })
            .catch(err => console.log(err));
    }, [idFilme])
    
    if (!sessions){
        return (
            "loading..."
        )
    }

    return(
        <>
            <TopMsg text="Selecione o horário" />
            {sessions.map( item => (
                <SessionArea key={item.id} data-test="movie-day">
                    <SessionDay>{item.weekday} - {item.date}</SessionDay>
                    <SessionHours>
                        { item.showtimes.map( showtime => (
                                <SessionHour key={showtime.id} data-test="showtime">
                                    <Link to={`/assentos/${showtime.id}`}> 
                                        {showtime.name}
                                    </Link>    
                                </SessionHour> 
                            ) ) 
                        }
                    </SessionHours>
                </SessionArea>
            ))

            }
            <Footer
            picture={movie.picture}
            name={movie.name}
            />
        </>
    );
}