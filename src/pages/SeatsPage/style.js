import styled from "styled-components";
import { c } from "../../constants/colors";

export const SeatsArea = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 26px);
    justify-content: center;
    align-items: center;
    gap: 18px 7px;
`
export const CaptionArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
`
export const FormArea = styled.div`
    width: 100%; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    font-size: 18px;    
    color: ${c.textColor};

    button {
        width: 225px;
        height: 42px;
        background-color: ${c.importantColor};
        border-radius: 3px;
        outline: none;
        border: none;
        margin-top: 57px;
        cursor: pointer;

        a {
            width: 100%;
            height: 100%;
            text-decoration: none;
            color: ${c.bgColor};
            font-weight: 400;
            font-size: 18px;
            line-height: 21px;
        }
    }
`
export const InputArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    max-width: 327px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    
    input {
        width: 100%;
        max-width: 327px;
        height: 51px;
        outline: none;
        padding: 5px;
        margin: 7px 0;
    }
`