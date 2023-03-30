import styled from "styled-components";
import { c } from "../../constants/colors";

export const CircleSpace = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
`
export const CircleColor = styled.div`
    width: 26px;
    height: 26px;
    background-color: ${({bgColor}) => bgColor};
    border: ${({borderColor}) => borderColor} 1px solid;
    border-radius: 50%;
`

export const CircleText = styled.p`
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: ${c.midLightColor};
`