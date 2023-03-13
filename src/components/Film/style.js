import styled from "styled-components";
import { c } from "../../constants/colors";

export const Container = styled.article`
    width: 145px;
    height: 209px;
    border-radius: 3px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    margin: 19px;

    a {
        width: 100%;
        height: 100%;    
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const FilmPic = styled.img`
    width: 129px;
    height: 193px;
`