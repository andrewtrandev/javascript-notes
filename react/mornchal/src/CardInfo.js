import React from 'react'
import CardHeader from './CardHeader'
import CardDesription from './CardDescription'
import CardButtons from './CardButtons'

const CardInfo = () => {
    return (
        <div style={{width: "50%", display: "flex", flexDirection: "column"}}>
        <CardHeader />
        <CardDesription />
        <CardButtons />
        </div>
        
    )
}

export default CardInfo