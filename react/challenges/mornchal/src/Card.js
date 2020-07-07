import React from 'react'
import CardInfo from './CardInfo'
import Image from './Image'

const Card = () => {
    return (
        <div style={{display: "flex"}}>
        <CardInfo />
        <Image />
        </div>
    )
}

export default Card