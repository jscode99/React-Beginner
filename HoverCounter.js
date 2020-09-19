import React, { Component } from 'react'
// import UpdatedCounter from './WithCounter'
import WithCounter from './WithCounter'

class HoverCounter extends Component {
   
    render() {
       const {count,increCount}=this.props
        
        return (
            <div>
                <h1 onMouseOver={increCount}>Hover {count} times</h1>
            </div>
        )
    }
}

export default WithCounter(HoverCounter,10)
