import React from 'react'
import Poke from './Poke'

const App = () => {
    return (
    <div className="poke-cards">
        <Poke   
            image = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
            types = "grass, poison"
            height = "30cm"
            weight = "15kg"
            attack = "49"
            defense = "33"
            strength = "67"
            name = "bulbasaur"
        />

        <Poke 
            image = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
            types = "electric"
            height = "13cm"
            weight = "20kg"
            attack = "32"
            defense = "15"
            strength = "88"
            name = "pikachu"
        />

        <Poke 
            image = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
            types = "fire, normal"
            height = "44cm"
            weight = "79kg"
            attack = "29"
            defense = "47"
            strength = "68"
            name = "charmander"
        /> 
    </div>
    )
}

export default App