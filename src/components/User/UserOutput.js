import React from 'react'

import './User.css'

const UserOutput = (props) => {

    const style = {
        backgroundColor: '#efefef',
        padding: '5px',
        color: 'mediumaquamarine'
    }

    return (
        <div>
            <p style={style} onClick={ props.click } className="output">I'm { props.username }</p>
            <input type="text" onChange={ props.change } value={ props.username }/>
        </div>
    );
}

export default UserOutput