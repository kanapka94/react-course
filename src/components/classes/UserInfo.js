import React, { Component } from 'react'

class UserInfo extends Component {
    state = {
        name: 'Adam'
    }

    changeState = () => {
        this.setState({ name: 'Jerzy' })
    }

    render () {
        const style = {
            color: 'yellow'
        }

        const classes = []

        if (this.props.bold) {
            classes.push('bold')
        }

        return (
            <div style={ style } className={ classes.join(' ') }>User Info</div>
        )
    }
}

export default UserInfo