import React, { useState } from 'react';
import styled from 'styled-components';
import { Container52 } from "../../Models"


const FAQContainer = styled.div`
  width: 100%;
  border-radius: 40px;
`;

const Title = styled.h1`
  color: #000;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 56px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center; 
  border-radius: 40px;
  margin: 20px auto; 
  padding: 24px 24px 27.19px 40px;
  background-color: #ffffffff; 
  cursor: pointer;
`;

const CardTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;

const CardIcon = styled.div`
  font-size: 30px;
  margin-left: auto;
  cursor: pointer;

  @media (max-width: 850px) {
    padding-left: 15px;
  }
`;

const Answer = styled.div`
  display: ${props => (props.open ? 'block' : 'none')};
  background-color: #ffffffff;
  border-radius: 40px;
  width: 100%;
  padding: 30px;
  margin-top: 10px; 
`;

const FAQ = ({ faqData }) => {
    const [openIndex, setOpenIndex] = useState(null);
  
    const handleToggle = index => {
      setOpenIndex(index === openIndex ? null : index);
    };
  
    return (
    <Container52>
      <FAQContainer>
          <Title>FAQ</Title>
          {faqData.map((item, index) => (
            <div key={index}>
              <CardContainer onClick={() => handleToggle(index)}>
                <CardTitle>{item.question}</CardTitle>
                <CardIcon>{openIndex === index ? '-' : '+'}</CardIcon>
              </CardContainer>
              <Answer open={index === openIndex}>{item.answer}</Answer>
            </div>
          ))}
      </FAQContainer>
    </Container52>
    );
  };
  
  export default FAQ;