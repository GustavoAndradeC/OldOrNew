import React from "react";
import BB from '../../../Assents/FEG.svg';
import AA from "../../../Assents/Check.svg"
import styled from "styled-components";
import { Container62, Space } from '../../../Models';

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: auto;
  width: 100%;
  flex-shrink: 0;
  border-radius: 72px;
  background-color: #FFFFFF;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  padding: 2rem;

  @media (max-width: 900px) {
    flex-direction: column;
  }

  `;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 35px;

  @media (max-width: 450px) {
    padding: 5px;
  }
`;

const Title = styled.h2`
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
  color: #555;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 1rem;

`;

const Image = styled.img`
  width: 25%;
  max-width: 25%;
  height: auto;

  @media (max-width: 450px) {
    width: 0;
  }
`;


const FFree = () => {
  return (
    <Space >
    <Container62>
      <Card>

        <Image src={AA} alt="Um Check" />

        <ContentWrapper>
          <Title>Frete Rápido</Title>
          <Description>Receba seus produtos rapidamente com nossa opção de entrega expressa. Garantimos um envio ágil para que você aproveite suas compras no menor tempo possível.</Description>
        </ContentWrapper>

        <Image src={BB} alt="Um raio com uma agenda atrás" />

      </Card>
    </Container62>
    </Space>
  );
}

export default FFree;