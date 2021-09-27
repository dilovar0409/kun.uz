import React from 'react';
import UserImg from '../assets/images/Prezident.jpg';
import Box from '../Box';
import Card from '../Card';
import SecondCard from '../SecondCard';
import Text from '../First/Language/language';
import { UserPageImg, UserPageWrapper1, UserPageText, UserPageTime, UserPageText1, UserPage1, UserPageWrapper } from './style';

function UserPage() {
    return (
        <UserPageWrapper>
            <div>
                <UserPageWrapper1>
                    <UserPageImg src={UserImg} alt="Public" />
                    <UserPage1>
                        <UserPageTime>💻16:39 / 22.09.2021</UserPageTime>
                        <UserPageText><Text id="userInfo" /> <br /><Text id="userName" /></UserPageText>
                        <UserPageText1><Text id="userWork" /></UserPageText1>
                    </UserPage1>
                </UserPageWrapper1>
                <Box />
                <SecondCard />
            </div>
            <Card />
        </UserPageWrapper>

    )
}

export default UserPage;
