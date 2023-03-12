import styled from "styled-components";
import { c } from "../../constants/colors";

export const Container = styled.article`
    width: 145;
    height: 209px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${c.bgColor};
    border-radius: 3px;
    box-shadow: 0px, 2px rgba(0, 0, 0, 0.1);
    margin: 19px;
`

export const FilmPic = styled.img`
    width: 129px;
    height: 193px;
`