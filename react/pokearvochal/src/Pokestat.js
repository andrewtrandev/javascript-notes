import React from 'react'

const PokeStat = ({name, value}) =>{
return (
    <div className="stat">
        <strong>{name}</strong>: {value}
    </div>
)}
export default PokeStat