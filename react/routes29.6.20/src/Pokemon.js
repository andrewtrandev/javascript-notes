import React from 'react'
import axios from 'axios'
class Pokemon extends React.Component {

    state = {
        pokemonData: null
    }


    async componentDidMount(){
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.pokemonName}`)
        this.setState({pokemonData: res.data})
    }

    render(){
        return (
            <div>
                <h1>Pokemon id: {this.props.match.params.pokemonName}</h1>
                {this.state.pokemonData ? "There is data" : "Loading..."}
                {this.state.pokemonData ? <li>height: {this.state.pokemonData.height}</li> : "Loading..."}
            </div>
        )
    }
}

export default Pokemon
