import React from 'react'

const ThemeContext = React.createContext()



export const ThemeContextProvider = (props) => {
    // const themes = {
    //     light: {
    //         color: 'black',
    //         background: 'white'
    //     },
    //     dark: {
    //         color: 'white',
    //         background: 'black'
    //     },
    //     ocean: {
    //         color: 'blue',
    //         background: 'grey'
    //     }
    // }
    const themes = "test"

    return (
        <ThemeContextProvider.Provider value={themes}>
            {props.children}
        </ThemeContextProvider.Provider> 

    )
}

export default ThemeContext;

