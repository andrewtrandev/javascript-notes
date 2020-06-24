import React from 'react'


// React.component gives us everything we need

class Counter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    //anytime you're calling set state, needs to be an arrow function
    //setState tells React to re-render
    //can have anything as state

    componentDidMount(){
        console.log("Mounted")
    }

    componentDidUpdate(){
        console.log("updated")
    }

    incrementCount = () => {
        this.setState(
            {count: this.state.count + 1}
        )
    }

    decrementCount = () => {
        this.setState(
            {count: this.state.count - 1}
        )
    }

    render(){
        console.log("Rendered", this.state)
        return (
            <div>
                <button onClick={this.decrementCount} >
                    -1
                </button>   
                {this.state.count}
                <button onClick={this.incrementCount} >
                    +1
                </button>
            </div>
        )
    }
}


export default Counter