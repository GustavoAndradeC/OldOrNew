import styled from "styled-components";
import { Space } from "../../Models"

const CustomPhrase = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 500px;
    margin: auto;
    font-family: 'Inter', sans-serif;
    font-size: 5vh;
    line-height: 56px;
    font-weight: 600;
    text-align: center;
    color: #000;

    @media (max-width: 540px) {
        font-size: 5vh;
    }
`;

const Frases = () => {
    return (
        <CustomPhrase>
            <Space>  
             Qualidade que você pode sentir.    Estilo que você pode ver.
             </Space>
        </CustomPhrase>

    );
}

export default Frases