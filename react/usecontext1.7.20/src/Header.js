import React, {useContext} from 'react'
import AppContext from './context'
//we're accessing this context from App.js
const Header = () => {

    const appContext = useContext(AppContext)
    console.log(appContext);
    
    return (
        <h1 style={appContext.currentTheme}>Mike's Site</h1>
    )
}

export default Header