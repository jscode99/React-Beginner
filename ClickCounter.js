import React, { Component } from 'react'
// import UpdatedCounter from './WithCounter'
import WithCounter from './WithCounter'


class ClickCounter extends Component {
     
     
    render() {
        const { count, increCount } = this.props
        
        
        return (
            <div>
                <button onClick={increCount}>
                   {this.props.name} Click {count} times
                    </button>
            </div>
        )
    }
}

export default WithCounter(ClickCounter,5)
