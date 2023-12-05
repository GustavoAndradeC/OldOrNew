import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyled = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;500;600;800;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter, sans-serif;
  }
  body {
    background-color: #F8F6F5;
    scrollbar-width: thin;
    scrollbar-color: #1a191a #ffffff;
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #ffffff;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #1a191a;
    border-radius: 5px;
    border: 0px none #ffffff;
  }

`;

export const GlobalConfig= () => {
    return <GlobalStyled />;
};

export const Container100 = styled.div`
    width: 100%;
`;

export const Container90 = styled.div`
    max-width: 90%;
    margin: 0 auto;
    box-sizing: border-box;
`;

export const Container90S = styled.div`
    max-width: 88%;
    margin: 0 auto;
    box-sizing: border-box;
`;

export const Container62 = styled.div`
    max-width: 65%;
    margin: 0 auto;
    box-sizing: border-box;
`;

export const Container52 = styled.div`
    max-width: 52%;
    margin: 0 auto;
    box-sizing: border-box;
`;

export const SvgImage = styled.img`
    height: auto;
    display: block;
    margin: auto;
    padding: 25px;
`;

export const Space = styled.div`
    margin-top: 5rem;
    margin-bottom: 5rem;

    @media (max-width: 400px) {
      margin-top: 3rem;
      margin-bottom: 3rem;
    }
`;