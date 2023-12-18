import React from "react";
import styled from "styled-components";
import Card from "./CardModel";
import Bone from "../../../Assents/Bone.svg"
import Camisa from "../../../Assents/Camisa.png"
import Moletom from "../../../Assents/Moletom1.svg"
import { Container62 } from '../../../Models';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Purchase = () => {
  return (
    <Container62>
        <CardContainer>

         <Card 

         imageUrl={Bone} 
         title="Boné" 
         text="Este boné é uma peça de vestuário casual que combina estilo e conforto. Com uma aba reta e firme, ele adiciona um toque moderno ao visual. " 
         buttonText="Comprar"
         buttonLink="https://www.instagram.com/"

         />

         <Card 
         
         imageUrl={Camisa} 
         title="Camisa" 
         text="Esta camisa é uma peça elegante que incorpora um design contemporâneo com um toque clássico. O tecido parece ser de algodão de alta qualidade, conferindo um toque suave e confortável à peça." 
         buttonText="Comprar"
         buttonLink="https://www.instagram.com/"

         />

         <Card 
         
         imageUrl={Moletom} 
         title="Moletom" 
         text="Este moletom é uma peça aconchegante e estilosa, perfeita para dias mais frios. Fabricado com um tecido macio, provavelmente uma mistura de algodão e poliéster, ele proporciona conforto e calor.  " 
         buttonText="Comprar"
         buttonLink="https://www.instagram.com/"

         />

        </CardContainer>
    </Container62>
  );
}

export default Purchase;