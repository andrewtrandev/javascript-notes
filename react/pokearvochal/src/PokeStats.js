import React from 'react'

const PokeStats = ({attack, defense, strength}) => {
    return (
    <div className="poke-stats">
        <div className="stat">
            <strong>attack</strong>: {attack}
        </div>
        <div className="stat">
            <strong>defense</strong>: {defense}
        </div>
        <div className="stat">
            <strong>strength</strong>: {strength}
        </div>
    </div>
    )
}

export default PokeStats