import React, { useContext } from 'react'
import AppContext from './context'


const ThemeToggler = (props) => {

    const appContext = useContext(AppContext)

    return (
        <button onClick={appContext.toggleTheme}> theme Toggler</button>
    )
}

export default ThemeToggler