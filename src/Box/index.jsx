import React from 'react'
import { UserPageTime } from '../UserPage/style';
import BoxImg from '../assets/images/pos.jpg'
import BoxImg1 from '../assets/images/user.jpg'
import BoxImg2 from '../assets/images/Prezident1.jpg'
import BoxImg3 from '../assets/images/Prezident2.jpg'
import Text from '../First/Language/language';
import { BoxCard, BoxImag, BoxText, BoxWrapper, BoxWrapper1 } from './style';

function Box() {

    const card = [
        {
            img: BoxImg,
            time: "💻 15:16 / 22.09.2021",
            text: <Text id="kassa" />
        },
        {
            img: BoxImg1,
            time: "💻 18:24 / 21.09.2021",
            text: <Text id="yozuvchi" />
        },
        {
            img: BoxImg2,
            time: "💻 15:43 / 21.09.2021",
            text: <Text id="bosh" />
        },
        {
            img: BoxImg3,
            time: "💻 12:39 / 21.09.2021",
            text: <Text id="soh" />
        },
    ]

    return (
        <BoxCard>
            {card?.map(({ img, time, text }) => (
                <BoxWrapper>
                    <BoxImag src={img} alt="Img" />
                    <BoxWrapper1>
                        <UserPageTime>{time}</UserPageTime>
                        <BoxText>{text}</BoxText>
                    </BoxWrapper1>
                </BoxWrapper>
            ))}

        </BoxCard>
    )
}

export default Box;
