import React from 'react'

class Adder extends React.Component  {
    constructor(props){
        super(props)
        this.state = {
            currentNumber: 0
        }
    }

    render(){

        return (
            <>
                <h1>{this.state.currentNumber}</h1>
                <button onClick={() => { this.setState({currentNumber: this.state.currentNumber+5}) }}
                >5</button>
                <button onClick={() => { this.setState({currentNumber: this.state.currentNumber+10}) }}
                >10</button>
                  <button onClick={() => { this.setState({currentNumber: this.state.currentNumber+50}) }}
                >50</button>
                  <button onClick={() => { this.setState({currentNumber: this.state.currentNumber+100}) }}
                >100</button>
            </>

            )
    
    }

}




export default Adder