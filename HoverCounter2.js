import React, { Component } from 'react'

class HoverCounter2 extends Component {
    
    render() {
        const { count,clickHandler } = this.props
        
        return (
          <h1 onMouseOver={clickHandler}>Hover {count} Times</h1>
        )
    }
}

export default HoverCounter2
