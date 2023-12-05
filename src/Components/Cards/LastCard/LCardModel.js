import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 400px;
  background-color: #FFFFFF;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  box-sizing: border-box;
`;

const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px;
`;

const CardTitle = styled.h2`
  text-align: start;
  margin-bottom: 15px;
`;

const CardText = styled.p`
  text-align: start;
  color: #555;
  overflow: hidden;
`;

const Card = ({ title, text}) => {

  return (
    <CardWrapper>
      <CardContent>
        <div>
          <CardTitle>{title}</CardTitle>
          <CardText>{text}</CardText>
        </div>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
