import React from 'react'

import './User.css'

const UserOutput = (props) => {

    const styles = {
        backgroundColor: 'cornflowerblue',
        padding: '5px',
        color: 'mediumaquamarine'
    }

    return (
        <div>
            <p onClick={ props.click } className="output">I'm { props.username }</p>
            <input type="text" onChange={ props.change } value={ props.username }/>
        </div>
    );
}

export default UserOutput