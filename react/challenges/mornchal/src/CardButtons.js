import React from 'react'

const cardButtonStyle = {
    display:"flex",
    justifyContent: "space-around",
    margin: "5px"
}

const iconStyle = {
    border: "1px solid black",
    width: "25px", 
    height: "25px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer"
}

const CardButtons = () => {
    return (
    <div style={cardButtonStyle}>
        <button>Play</button>
        <button>+ My List</button>
        <div style={iconStyle}>+1</div>
        <div style={iconStyle}>-1</div>
    </div>
    )
}

export default CardButtons