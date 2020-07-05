import React , {useState, useEffect} from 'react'

class Counter extends React.Component {

    state = {
        count: 0,
        color: 'blue'
    }

    render(){
        const currentCount = this.state.count

        return (
            <div style={{color: this.state.color}}>
                 <button onClick={() => this.setState({color: 'green'})}>change color</button>
                <button onClick={() => this.setState({count: currentCount + 1})}
                >
                    +1
            </button>
                {currentCount}
            </div>
        )
    }
}


export function FuncCounter(){
    
    // const [count, setCount] = useState(0)
    // const [color, setColor] = useState('blue')
    // const [index0, index1] = [array]

    //any state in the useEffect array affects when useEffect will activate
    // not having a second argument or array means it'll update, any time something gets changed
    // useEffect(() => {
    //     console.log("test");
    //     setCount(count+1)
    // }, [color])

    
    // console.log(useState);
    

    // return (
    //     <div style={{color: color}}>
    //     <button onClick={()=> setColor('green')}>Change color</button>
    //         <button onClick= {() => (setCount(count+1))}>+1</button>
    //         {count}
    //     </div>
    // )


    const [inputValue, setInputValue] = useState("")

    return (
        <div>
            <input 
            type="text"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
            />
            <br />
            {inputValue}
        </div>
    )












}





export default Counter