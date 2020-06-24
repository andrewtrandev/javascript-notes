import React from 'react'
import axios from 'axios'
//npm i axios

class Pokemon extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            pokemon: null
        }
    }
        // typically chuck http requests in here
        // auto gets called by React whenever the component gets mounted
    async componentDidMount(){
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
        const pokemonData = response.data
        this.setState({pokemon: pokemonData})
    }

    render(){
        return (
            <div>
            {this.state.pokemon ? this.state.pokemon.name : "Loading.."}
            </div>
            )
    }
}

export default Pokemon