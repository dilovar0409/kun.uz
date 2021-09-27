import styled from "styled-components";

export const SecondCardWrapper=styled.div`
    display: flex;
    justify-content: space-between;
`;

export const SecondWrapper=styled.div`
    margin-right: 15px;
`;  

export const SecondImag=styled.img`
    width: 300px;
    height: 180px;
    object-fit: cover;
`;

export const SecondText=styled.p`
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 20px;
  
`;

export const SecondText1=styled.p`
    width: 300px;
    font-size: 16px;
    font-weight: 800;  
    &:hover{
        color: red;
        transition-duration: .2s;
        cursor: pointer;
    }
`;