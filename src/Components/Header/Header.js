import React from "react";
import MinhaImagem from '../../Assents/OldOrNew.svg';
import { Container90, SvgImage } from '../../Models';


const Header = () => {
  return (
    <Container90>
      <SvgImage src={MinhaImagem} alt="OldOrNew" />
    </Container90>
  );
}

export default Header;



