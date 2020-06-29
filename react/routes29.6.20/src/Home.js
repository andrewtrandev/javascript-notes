import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component {

    state = {
        pokemonNames: ["charmander", "pikachu", "squirtle"]
    }

    render(){
        return (
            <>
                <h1>Choose a pokemon</h1>
                {this.state.pokemonNames.map(pokemonName => (
                    <Link to= {`/pokemon/${pokemonName}`}>
                        <li>{pokemonName}</li>
                    </Link>
                ))}
            </>
        )
    }
}

export default Home
