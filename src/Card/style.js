import styled from "styled-components";

export const CardWrapper = styled.div`
    width: 330px;
    height: fit-content;
    cursor: pointer;
`;

export const CardBox = styled.div`
    border-bottom: 1px solid grey;
    padding: 20px 0;
`;

export const CardTitle = styled.p`
    font-size: 18px;
    font-weight: 800;
`;

export const CardText = styled.p`
    width: 310px;
    font-weight: bold;
    line-height: 22px;
    &:hover{
        cursor: pointer;
        color: lightskyblue;
        transition-duration: .3s;
    }
`;

export const CardLink = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 20px;
    background-color: #F1F1F0;
    border-radius: 0 40px 40px 0;
    border-left: 2px solid blue;
    margin-top: 30px;
    cursor: pointer;
    .text{
        font-size: 30px;
        font-weight: bold;
    }
`;