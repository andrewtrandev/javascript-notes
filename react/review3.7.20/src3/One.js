import React from 'react'
import Two from './Two'


const One = ({myState}) => {
    return (
        <ul>
            One
            <li><Two myState={myState}/></li>
        </ul>
    )
}

export default One