import React from 'react'

const ButtonToggle = props => {

    return (
        <button onClick={ props.click }>
            { props.children || 'Click' }
        </button>
    )
}

export default ButtonToggle