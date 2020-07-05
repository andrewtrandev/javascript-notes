import React, {useContext} from 'react'
import {AppContext} from './App'

const Three = ({myState}) => {

    const globalContext = useContext(AppContext)
    console.log(AppContext);
    
    return (
        <ul>
               Three = {globalContext.myState}
        </ul>
    )
}

export default Three