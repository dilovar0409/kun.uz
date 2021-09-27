import styled from "styled-components";

export const BoxCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: 10px;
    padding: 30px 0 0 0;
`;

export const BoxWrapper = styled.div`
    width: fit-content;
    display: flex;
    margin-bottom: 30px;
`;

export const BoxImag = styled.img`
    width: 170px;
    height: auto;
`;

export const BoxWrapper1 = styled.div`
    padding: 0 0 0 15px;
    border-bottom: 1px solid grey;
    margin-right: 12px;
    margin-left: 10px;
`;

export const BoxText = styled.div`
    width: 260px;
    font-size: 14px;
    font-weight: bold;
    &:hover{
        color: greenyellow;
        transition-duration: .2s;
        cursor: pointer;
    }
`;