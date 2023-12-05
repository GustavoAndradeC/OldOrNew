import { styled, keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Animation = styled.div`
  animation: ${fadeIn} 2s ease-in-out;

  * {
    animation: ${fadeIn} 2s ease-in-out;
  }
`;
