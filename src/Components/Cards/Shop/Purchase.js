import React from "react";
import styled from "styled-components";
import Card from "./CardModel";
import Bone from "../../../Assents/Bone.svg"
import Camisa from "../../../Assents/Camisa.png"
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
         text="Descrição do Produto 1." 
         buttonText="Comprar"
         buttonLink="https://iplogger.org/pt/logger/xq2j4yHXqwJR/"

         />

         <Card 
         
         imageUrl={Camisa} 
         title="Camisa" 
         text="Bone legal bonito bla bla bla bla bla bla blaBone legal bonito bla bla bla bla bla bla blaBone legal bonito bla bla bla bla bla bla bla" 
         buttonText="Comprar"
         buttonLink="https://www.instagram.com/p/Cz64gS0uu6m/?utm_source=ig_web_copy_link&igshid=ODhhZWM5NmIwOQ=="

         />

         <Card 
         
         imageUrl={Bone} 
         title="Moletom" 
         text="Bone legal bonito bla bla bla bla bla bla blaBone legal bonito bla bla bla bla bla bla blaBone legal bonito bla bla bla bla bla bla blaBone legal bonito bla bla bla bla bla bla bla " 
         buttonText="Comprar"
         buttonLink="https://www.youtube.com/watch?v=zG5gWncAhls&ab_channel=GR6EXPLODE"

         />

        </CardContainer>
    </Container62>
  );
}

export default Purchase;