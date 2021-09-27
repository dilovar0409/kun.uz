import styled from "styled-components";

export const UserPageWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
`;

export const UserPageWrapper1 = styled.div`
    width: fit-content;
    display: flex;
    background-color: #F0F4F8;
`;

export const UserPageImg = styled.img`
    width: 460px;
    height: auto;
    object-fit: cover;
`;

export const UserPageText = styled.p`
    width: 400px;
    font-size: 23px;
    font-weight: 800;
    line-height: 25px;
    margin-bottom: 20px;
    &:hover{
        cursor: pointer;
        color: red;
        transition-duration: .3s;
    }
`;

export const UserPageText1 = styled.p`
    width: 400px;
    font-size: 17px;
    line-height: 30px;
    font-weight: bold;
    &:hover{
        cursor: pointer;
        color: gold;
        transition-duration: .3s;
    }
`;

export const UserPageTime = styled.p`
    font-size: 12px;
    font-weight: bold;
    color: grey;
    margin-bottom: 13px;
`;

export const UserPage1 = styled.div`
    padding: 15px;
`;