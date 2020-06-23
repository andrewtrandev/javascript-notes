import React from 'react'
import PokeInfo from './PokeInfo'
import PokeStats from './PokeStats'
import Image from './Image'

const Poke = ({types,height,weight,attack,defense,strength,image,name}) => {
    return (
        <div className="poke">
            <Image 
                image={image}
            />
            
            <PokeInfo 
                types = {types} 
                height = {height}  
                weight = {weight}  
            />
            <div className="poke-name">{name}</div>
            <PokeStats 
                attack = {attack}
                defense = {defense}
                strength = {strength}
            />
        </div>
    )
}

export default Poke