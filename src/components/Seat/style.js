import styled from "styled-components";
import { c } from "../../constants/colors";

export const SeatNumber = styled.button`
    width: 26px;
    height: 26px;
    background-color: ${({available, selected}) => available ? selected ? c.selectedBtn : c.fullLightColor : c.unavailableBtn};
    color: ${c.black};
    border: ${({available, selected}) => available ? selected ? c.selectedBtnContour : c.midLightColor : c.unavailableBtnCountour} 1px solid;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 11px;
    outline: none;
    cursor: pointer;
`