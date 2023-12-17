import React, { useState, useEffect } from "react";
import Moletom1 from '../../../Assents/Moletom1.svg';
import Moletom2 from '../../../Assents/Moletom2.svg';
import { Container90S } from '../../../Models';
import { styled } from "styled-components";


const Card = styled.div`
  height: 35rem;
  flex-shrink: 0;
  border-radius: 72px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: background-color 0.5s ease;
  
`;

const Image = styled.img`
  max-width: 80%;
  max-height: 80%;
  object-fit: cover;
`;

const Title = styled.h1`
  position: absolute;
  color: #fff;
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 80px;
  line-height: 80px;
  letter-spacing: 0.05rem;

  @media (max-width: 540px) {
    font-size: 12vw;
    }

  @media (max-width: 450px) {
    font-size: 9vh;
  }

  @media (max-width: 380px) {
    font-size: 7vh;
  }


`;

const SubTitle = styled.p`
  margin-top: 150px;
  position: absolute;
  color: #fff;
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;

  @media (max-width: 540px) {
    font-size: 5vh;
    }

  @media (max-width: 450px) {
    font-size: 3vh;
  }

  @media (max-width: 390px) {
    font-size: 0vh;
  }
`;

const FCard = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("#681806"); 

  const images = [Moletom1, Moletom2];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setBackgroundColor(generateRandomColor());
    }, 2000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const generateRandomColor = () => {
      const hue = Math.floor(Math.random() * 360); 
    const pastel = `hsl(${hue}, 50%, 50%)`; 
    return pastel;
  };

  return (
    <Container90S>
      <Card style={{ backgroundColor }}>
        <Image src={images[imageIndex]} alt="Está alternando entre o Boné e o Moletom" />
        <Title>Novidades</Title>
        <SubTitle>Roupas que movem, Estilo que permanece.</SubTitle>
      </Card>
    </Container90S>
  );
}

export default FCard;
