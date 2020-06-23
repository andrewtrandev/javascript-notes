import React from 'react'

const Image = ({image}) => {
    return (
    <div className="poke-image" >
        <img height="100px" src={image}/>
    </div>
    )
}

export default Image