import React, { Component } from 'react'

class UserInfo extends Component {
    state = {
        name: 'Adam'
    }

    changeState = () => {
        this.setState({ name: 'Jerzy' })
    }

    render () {
        return (
            <div>User Info</div>
        )
    }
}

export default UserInfo