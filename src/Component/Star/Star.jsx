import React from 'react'

function Star({ color = 'black'}){
    return (
        <span className="star-container" style={{ color }}>
           *
        </span>
    )
}

export default Star