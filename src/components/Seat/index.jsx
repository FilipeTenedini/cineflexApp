import { useState } from "react";
import { SeatNumber } from "./style";

export default function Seat({available, number, id, addSeat, removeSeat, addSeatNumber, removeSeatNumber}){
    const [selected, setSelected] = useState(false);

    const verifySeat = () => {
        if (available) {
            if (!selected){
                setSelected(true);
                addSeat(id);
                addSeatNumber(number);
            } else {
                setSelected(false);
                removeSeat(id)
                removeSeatNumber(number);
            }
        } else{
            alert("Esse assento não está disponível.");
        }
    }
    
    return (
        <SeatNumber
        data-test="seat"
        available={available}
        selected={selected}
        onClick={verifySeat}
        >
            {number}
        </SeatNumber>
    );
}