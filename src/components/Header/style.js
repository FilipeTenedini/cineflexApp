import styled from "styled-components";
import { c } from "../../constants/colors";

export const HeaderArea = styled.header`
    width: 100%;
    height: 67px;
    background-color: ${c.fullLightColor};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Logo = styled.h1`
    color: ${c.importantColor};
    line-height: 40px;
    font-weight: 400;
    font-size: 34px
`