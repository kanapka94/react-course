import React, { Component } from 'react'

class UserInfo extends Component {
    state = {
        name: 'Adam'
    }

    changeState = () => {
        this.setState({ name: 'Jerzy' })
    }

    render () {
        const classes = []

        if (this.props.bold) {
            classes.push('bold')
        }

        return (
            <div className={ classes.join(' ') }>User Info</div>
        )
    }
}

export default UserInfo