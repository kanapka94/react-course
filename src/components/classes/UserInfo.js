import React, { Component } from 'react'
import styled from 'styled-components'

const StyledUserInfo = styled.div`
    margin: 10px;
    color: greenyellow;
    font-weight: 600;
    font-size: 20px;
`
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
            <StyledUserInfo>
                User Info
            </StyledUserInfo>
        )
    }
}

export default UserInfo