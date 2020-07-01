import React, {useState} from 'react'

export const themes = {
    light: {
      color: "black",
      background: "white",
    },
    dark: {
      color: "white",
      background: "black",
    },
};

const AppContext = React.createContext()

export const CustomAppProvider = (props) => {

    const [currentTheme, setCurrentTheme] = useState(themes.light);

    const toggleTheme = () => {
      setCurrentTheme(currentTheme === themes.light ? themes.dark : themes.light)
    }
    return (
    <AppContext.Provider value={{currentTheme, toggleTheme , userEmail: "mike@gmail.com"}}>
        {props.children}
    </AppContext.Provider>
    )
}

export default AppContext

//creating global context file
