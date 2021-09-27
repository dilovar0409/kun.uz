import React from 'react'
import { UserPageTime } from '../UserPage/style';
import { CardBox, CardLink, CardText, CardTitle, CardWrapper } from './style';
import Text from '../First/Language/language';

function Card() {

    const card = [
        {
            time: "💻 12:08",
            text: <Text id="people" />
        },
        {
            time: "💻 12:00",
            text: <Text id="chet" />
        },
        {
            time: "💻 11:14",
            text: <Text id="bmt" />
        },
        {
            time: "💻 11:09",
            text: <Text id="fikr" />
        },
        {
            time: "💻 10:37",
            text: <Text id="plane" />
        },
        {
            time: "💻 10:22",
            text: <Text id="weather" />
        },
        {
            time: "💻 10:04",
            text: <Text id="prezident" />
        },
        {
            time: "💻 09:50",
            text: <Text id="close" />
        },
    ]

    return (
        <CardWrapper>
            <CardTitle>🧿 <Text id="news" /></CardTitle>
            {card?.map(({ time, text }) => (
                <CardBox>
                    <UserPageTime>{time}</UserPageTime>
                    <CardText>{text}</CardText>
                </CardBox>
            ))}
            <CardLink>
                <CardText><Text id="link" /></CardText>
                <p className="text">→</p>
            </CardLink>
        </CardWrapper>
    )
}

export default Card;
