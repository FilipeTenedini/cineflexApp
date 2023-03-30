import { useState } from "react";
import { SeatNumber } from "./style";

export default function Seat({available, number, id, toggleSeat, toggleSeatNumber}){
    const [selected, setSelected] = useState(false);

    const verifySeat = () => {
        if (available) {
            if (!selected){
                setSelected(true);
                toggleSeat(id);
                toggleSeatNumber(number);
            } else {
                setSelected(false);
                toggleSeat(id)
                toggleSeatNumber(number);
            }
        } else{
            alert("Esse assento não está disponível.");
        }
    }
    
    return (
        <SeatNumber
        available={available}
        selected={selected}
        onClick={verifySeat}
        >
            {number}
        </SeatNumber>
    );
}