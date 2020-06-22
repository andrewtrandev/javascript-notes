import React from 'react'

const cardHeaderStyle = {
    display: "flex",
    flexDirection: "column",
    margin: "10px"
}

const metaDataStyle = {
    display: "flex",
    justifyContent: "space-between"
}

const CardHeader = () => {
    return (
        <div style={cardHeaderStyle}>
        <h1 className="title">Space Force</h1>
        <div style={metaDataStyle}>
            <div>99% Match</div>
            <div>2020</div>
            <div className="rating">M</div>
            <div>1 Season</div>
        </div>
        </div>
    )
}

export default CardHeader