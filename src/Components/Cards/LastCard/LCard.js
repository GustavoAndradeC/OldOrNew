import React from "react";
import styled from "styled-components";
import Card from "../LastCard/LCardModel";
import { Container62, Space } from '../../../Models';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const LCard = () => {
  return (
    <Space >
        <Container62>
            <CardContainer>

         <Card 
         title="Políticas Transparentes" 
         text="Nossas políticas são transparentes e diretas. Oferecemos garantias de devolução e troca para garantir sua satisfação total." 
         />

         <Card 
         title="Garantias de Qualidade" 
         text="Oferecemos garantias sólidas de qualidade em todos os nossos produtos. Acreditamos na durabilidade e desempenho excepcionais." 
         />
         
            </CardContainer>
        </Container62>
    </Space>
  );
}

export default LCard;