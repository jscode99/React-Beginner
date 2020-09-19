import React, { Component } from 'react'

class Greet extends Component {
    render() {
        const { firstName, secondName } = this.props;
        return (
            <div>
                <h1>Welcome {firstName} {secondName}</h1>
            </div>
        )
    }
}

export default Greet
