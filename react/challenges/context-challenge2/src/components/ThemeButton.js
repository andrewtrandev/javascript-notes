import React from 'react'
import { useContext } from 'react'
import AppContext from './context'
// we need both of the imports from above to be able to useContext and grab the information from AppContext

const ThemeButton = ({text}) => {
    // This button should use the current theme

    //create const and grab the useContext for AppContext
    // then apply the theme for the button by accessing .theme, .theme comes from App.js in AppContext.Provider value={{theme}}

    //the below line in the context.js file allows useContext to be able to link to AppContext
    // const AppContext = React.createContext()
    
    const themeContext = useContext(AppContext)
    console.log(themeContext);
    
    return (
        <button style={themeContext.theme}>{text}</button>
    )
}

export default ThemeButton
