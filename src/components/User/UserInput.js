import React from 'react'

import './User.css'

const UserInput = (props) => {

    return (
        <input 
            type="text" 
            className="input"
            onChange={ props.change } 
            value={ props.value }
        />
    )
}

export default UserInput