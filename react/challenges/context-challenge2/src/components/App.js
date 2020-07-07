import React, {useState, useContext} from 'react'
import {ThemeContextProvider} from '../contexts/context'
import Form from './Form'


const App = () => {
    
    return (
        <ThemeContextProvider>
                <Form/>
        </ThemeContextProvider>
    )
}

export default App
