import React from "react";
import OorN from '../../../Assents/TT.svg';
import styled from "styled-components";
import { Container62 } from '../../../Models';

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: auto;
    width: 100%;
    flex-shrink: 0;
    border-radius: 55px;
    background-color: #FFFFFF;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
    padding: 2rem; 

    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 50%;

    @media (max-width: 900px) {
        max-width: 100%;
        margin-bottom: 1.5rem;
    }
`;

const Title = styled.h1`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0.05rem;
    line-height: 1.2;
    margin-bottom: 0.5rem;
`;

const Description = styled.p`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.5vw; 
    line-height: 1.5;
    margin-top: 1rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        font-size: 3vw;
    }

    @media (max-width: 525px) {
        font-size: 4vw;
    }
`;

const Image = styled.img`
    max-width: 20%;
    height: auto;

    @media (max-width: 500px) {
        width: 0;
    }
`;

const Button = styled.button`
    width: 12em;
    height: 2.3em;
    margin: 0.5em;
    background: black;
    color: white;
    border: none;
    border-radius: 0.625em;
    font-size: 1.5vw; 
    font-weight: bold;
    cursor: pointer;
    position: relative;
    z-index: 1;
    overflow: hidden;

    &:hover {
        color: black;
    }

    &::after {
        content: "";
        background: #bd2b09;
        position: absolute;
        z-index: -1;
        left: -20%;
        right: -20%;
        top: 0;
        bottom: 0;
        transform: skewX(-45deg) scale(0, 1);
        transition: all 0.5s;
    }

    &:hover::after {
        transform: skewX(-45deg) scale(1, 1);
        transition: all 0.5s;
    }

    @media (max-width: 900px) {
        font-size: 2vw;
    }

    @media (max-width: 768px) {
        width: 65%;
        font-size: 3vw;
    }
`;


const Social = () => {
    return (
        <Container62>
            <Card>
                <ContentWrapper>
                    <Title>Siga nas redes sociais</Title>
                    <Description>A OLDORNEW ESTÁ EM TODAS AS REDES SOCIAIS</Description>
                    <Button onClick={() => window.open("https://www.instagram.com/oldo_rnew/", "_blank")}>ESPALHE O ESTILO</Button>
                </ContentWrapper>
                <Image src={OorN} alt="Logo da Old Or New" />
            </Card>
        </Container62>
    );
}

export default Social;
