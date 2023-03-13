import styled from "styled-components";
import { c } from "../../constants/colors";

export const FooterArea = styled.footer`
    width: 100%;
    height: 177px;
    background-color: ${c.fullLightColor};
    display: flex;
    align-items: center;
`
export const FilmImage = styled.article`
    width: 64px;
    height: 89px;
    border-radius: 2px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${c.bgColor};
    margin: 20px;
`

export const FilmPic = styled.img`
    width: 48px;
    height: 72px;
`
export const FilmInfos = styled.div`
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    color: ${c.textColor};
    display: flex;
    flex-direction: column;
`