import React from 'react'

const PokeInfo = ({types, height, weight}) => {
    return (
    <div className="poke-info">
        <div className="types">{types}</div>
        <div className="height">{height}</div>
        <div className="weight">{weight}</div>
    </div>
    )
}

export default PokeInfo