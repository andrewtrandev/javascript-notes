import React, {useState, useContext} from 'react'
// import AppContext from '../contexts/context'

const ThemeInput = () => {
    
    // const themeContext = useContext(AppContext)
    // console.log(themeContext);
    
    // This input should use the current theme
    const [inputValue, setInputValue] = useState('')
    return (
        <input 
            // style={themeContext.theme}
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
        />
    )
}

export default ThemeInput

