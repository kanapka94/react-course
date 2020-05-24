import React from 'react'

const Person = (props) => {
    const random = Math.random()

    if (random > 0.7) {
        throw new Error('Coś tam bla bal')
    }

    return (
        <div>
            <p>
                I'm a { props.name } and I'm { props.age } years old!
            </p>
            <p>{ props.children }</p>
        </div>
    )
}

export default Person;