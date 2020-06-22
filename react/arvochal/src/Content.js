import React from 'react'
import CodeEditor from './CodeEditor'

const Content = () => {
    return (
        <>
       
        <div style={{display: "flex"}}>
            <div style={{width: "50%"}}>
            <h2>What is React?</h2>
            <p>React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.</p>
            <p>JSX is optional and not required to use React. Try the Babel REPL to see the raw JavaScript code produced by the JSX compilation step.</p>
            </div>
            <CodeEditor />
        </div>

        </>
    )
}

export default Content