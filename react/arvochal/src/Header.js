import React from 'react'
import Links from './Links'


const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
}


const Header = () => {
    return (
    <div style={headerStyle}>
        <h1>React</h1>
        <Links />
    </div>
    )
}

export default Header