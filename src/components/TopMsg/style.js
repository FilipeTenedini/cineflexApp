import styled from "styled-components";
import { c } from "../../constants/colors";

export const MsgSpace = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MsgText = styled.h2`
    font-weight: 400;
    font-size: 24px;
    color: ${c.textColor}
`