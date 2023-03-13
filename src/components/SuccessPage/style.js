import styled from "styled-components";
import { c } from "../../constants/colors";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2{
        text-align: center;
        padding-top: 40px;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: ${c.success}
    }
`
export const Infos = styled.div`
    margin: auto;
    margin-bottom: 60px;
`
export const Title = styled.div`
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: ${c.textColor};
    margin: 77px 0 15px 28px;
`
export const Text = styled.div`
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    color: ${c.textColor};
    margin-left: 28px;
`
export const HomeButton = styled.button`
    width: 225px;
    height: 42px;
    background-color: ${c.importantColor};
    margin: 0 auto;
    border: none;
    outline: none;
    cursor: pointer;

    a{
        text-decoration: none;
        font-weight: 400;
        font-size: 18px;
        color: ${c.bgColor};
        line-height: 21px;
    }
`