import React from 'react'


const Greetings = props => {
    const { firstName, secondName } = props;

    return (
        <div>
            <p>Welcome {firstName} {secondName} </p>
        </div>
    )
}

export default Greetings;