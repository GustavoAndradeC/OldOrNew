import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 250px;
  background-color: #FFFFFF;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  box-sizing: border-box;
`;

const CardImage = styled.img`
  width: 50%;
  max-height: 200px;
  margin: 25px;
  object-fit: contain;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
`;

const CardTitle = styled.h2`
  text-align: center;
  margin-bottom: 15px;
`;

const CardText = styled.p`
  text-align: start;
  margin-bottom: 20px;
  color: #555;
  overflow: hidden;
  max-width: 100%;
`;

const BuyButton = styled.button`
  display: inline-block;
  width: 8em;
  background-color: #ffd7ca;
  color: #000;
  padding: 15px;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s;
  align-self: center;
  font-size: 16px;

  &:hover {
    background-color: #f7b8a3;
  }
`;

const Card = ({ imageUrl, title, text, buttonText, buttonLink }) => {

  const handleButtonClick = () => {
    window.open(buttonLink, "_blank")
  };

  return (
    <CardWrapper>
      <CardImage src={imageUrl} alt={title} />
      <CardContent>
        <div>
          <CardTitle>{title}</CardTitle>
          <CardText>{text}</CardText>
        </div>
        <BuyButton onClick={handleButtonClick}>
          {buttonText}
        </BuyButton>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
