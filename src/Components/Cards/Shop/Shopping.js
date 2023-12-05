import styled from "styled-components";
import { Space } from "../../../Models";

const CustomPhrase = styled.div`
    display: flex;
    justify-content: center;
    width: 280px;
    margin: auto;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-size: 35px;
    line-height: 56px;
    font-weight: 600;
    text-align: center;
    color: #000;
`;

const Shop = () => {
    return (
        <CustomPhrase>
            <Space>
                Compre Já
            </Space>
        </CustomPhrase>

    );
}

export default Shop;