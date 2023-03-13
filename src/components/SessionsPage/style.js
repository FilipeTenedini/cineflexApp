import styled from "styled-components";
import { c } from "../../constants/colors";

export const SessionArea = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 24px;
    margin-bottom: 23px;
`
export const SessionDay = styled.div`
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    margin: 5px;
    color: ${c.textColor};
`
export const SessionHours = styled.div`
    display: flex;    

    a {
        text-decoration: none;
    }
`
export const SessionHour = styled.button`
    width: 83px;
    height: 43px;
    background-color: ${c.importantColor};
    border-radius: 3px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    margin: 5px;
    outline: none;
    border: none;
    cursor: pointer;

    a {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: ${c.bgColor};
    }
`