import React from 'react'
import { TownP, TownP1, TownPageWrapper } from './style'
import Text from '../First/Language/language'

function TownPage() {

    const town=[
        {
            volley: "Toshken sh."
        },
        {
            volley: "Qoraqalpog'iston"
        },
        {
            volley: "Andijon"
        },
        {
            volley: "Farg'ona"
        },
        {
            volley: "Namangan"
        },
        {
            volley: "Samarqand"
        },
        {
            volley: "Buxoro"
        },
        {
            volley: "Xorazm"
        },
        {
            volley: "Surxondaryo"
        },
        {
            volley: "Qashqadaryo"
        },
        {
            volley: "Jizzax"
        },
        {
            volley: "Sirdaryo"
        },
        {
            volley: "Toshkent vil"
        },
        {
            volley: "Navoiy"
        },
    ]

    return (
        <TownPageWrapper>
            <TownP1 ><Text id="hudud" /></TownP1>
            {town.map(({volley})=>(
                <TownP>{volley}</TownP>
            ))}
        </TownPageWrapper>
    )
}

export default TownPage
