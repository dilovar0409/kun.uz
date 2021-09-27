import React from 'react'
import SecondImg from '../assets/images/pul.jpg'
import SecondImg1 from '../assets/images/pul1.jpg'
import SecondImg2 from '../assets/images/pul2.jpg'
import { UserPageTime } from '../UserPage/style';
import Text from '../First/Language/language';
import { SecondCardWrapper, SecondImag, SecondText, SecondText1, SecondWrapper } from './style';

function SecondCard() {

    const card = [
        {
            img: SecondImg,
            time: "💻 20:40 / 17.08.2021",
            text: <Text id="money" />
        },
        {
            img: SecondImg1,
            time: "💻 16:24 / 31.07.2021",
            text: <Text id="dif" />
        },
        {
            img: SecondImg2,
            time: "💻 16:56 / 16.07.2021",
            text: <Text id="kros" />
        },
    ]

    return (
        <div>
            <SecondText>🧿 <Text id="muharir" /></SecondText>
            <SecondCardWrapper>
                {card?.map(({ img, time, text }) => (
                    <SecondWrapper>
                        <div>
                            <SecondImag src={img} alt="#" />
                            <UserPageTime>{time}</UserPageTime>
                            <SecondText1>{text}</SecondText1>
                        </div>
                    </SecondWrapper>
                ))}

            </SecondCardWrapper>
        </div>
    )
}

export default SecondCard;
