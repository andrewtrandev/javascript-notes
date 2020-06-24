import React from 'react'
import PokeStat from './Pokestat'

const PokeStats = ({attack, defense, strength}) => {
    return (
        <div className="poke-stats">
        <PokeStat name="Attack" value={attack} />
        <PokeStat name="Defense" value={defense} />
        <PokeStat name="Strength" value={strength} />
    </div>
    )
}

export default PokeStats