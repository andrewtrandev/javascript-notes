import React, {useState, useEffect} from 'react'

class Counter extends React.Component {

    state = {
        count: 0,
        inputValue: ""
    }

    componentDidMount(){
        console.log("Mounted")
    }

    componentDidUpdate(){
        console.log("State Updated")
    }

    render(){
        return (
            <div>
            <button 
                onClick={() => this.setState({count: this.state.count + 1})}
            >+1</button>
            {this.state.count}

            <input
            type="text"
            value={this.state.inputValue}
            onChange={e => this.setState({inputValue: e.target.value})}
            />
            {this.state.inputValue}

        </div>
        )
    }
}

export const FuncCounter = () => {

        const [count, setCount] = useState(0)
        const [inputValue, setInputValue] = useState("")

        // useEffect(() => {
                
        // }, [])

        // useEffect(() => {
        //     console.log("funcmounted");
        //     })

        useEffect(() => {
            console.log("count value changed")
        }, [count])
    
        useEffect(() => {
            setCount(count + 1)
        }, [inputValue])

        // useEffect(() => {
        //     console.log("Input value changed")
        // }, [inputValue])    

        
    return (
        <div>
        <button 
            onClick={() => setCount(count+1)}
        >+1</button>
        {count}
        <input
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            />
            {inputValue}
    </div>
    )
}

export default Counter

/*
remember to import useState
import React, {useState} from 'react'
look up destructuring for hooks
hooks allow us to write less code

import useEffect
can be used to replace componentDidMount and componentDidUpdate

boiler plate for componentDidMount
  useEffect(() => {

        }, [])

Without the array at the end it becomes componentDidUpdate

if you change the state within useEffect, without a second argument it'll loop forever.

If you passed in an array with the state, it'll only update when you change the state
*/