import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { SessionArea, SessionDay, SessionHours, SessionHour } from "./style"
import TopMsg from "../TopMsg";

export default function SessionsPage(){
    const { idFilme } = useParams();

    const [sessions, setSessions] = useState(null)

    useEffect(() => {
        axios
            .get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
            .then( ({data}) => setSessions(data.days))
            .catch(err => console.log(err));
    }, [])

    if (!sessions){
        return (
            "loading..."
        )
    }

    return(
        <>
            <TopMsg text="Selecione o horário" />
            {sessions.map( item => (
                <SessionArea key={item.id}>
                    <SessionDay>{item.weekday} - {item.date}</SessionDay>
                    <SessionHours>
                        { item.showtimes.map( showtime => (
                                <SessionHour>
                                    <Link to={`/assentos/${showtime.id}`} key={showtime.id}> 
                                        {showtime.name}
                                    </Link>    
                                </SessionHour> 
                            ) ) 
                        }
                    </SessionHours>

                    
                </SessionArea>
            ))

            }
        </>
    );
}