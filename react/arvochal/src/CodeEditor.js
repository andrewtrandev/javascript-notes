import React from 'react'

// only need to convert the style tag for the iframe to the correct syntax

const CodeEditor = () => {
    return (
        <div style={{width: "50%"}}>
        <h2>Try it out!</h2> 
        <iframe height="265" style={{width: "100%"}} scrolling="no" title="Tic Tac Toe" src="https://codepen.io/gaearon/embed/oWWQNa?height=265&theme-id=light&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
            See the Pen <a href='https://codepen.io/gaearon/pen/oWWQNa'>Tic Tac Toe</a> by Dan Abramov
            (<a href='https://codepen.io/gaearon'>@gaearon</a>) on <a href='https://codepen.io'>CodePen</a>.
        </iframe>
    </div>
    )
}

export default CodeEditor
