import React, { Component } from 'react'
import FRinput from './FRinput'

class FRparentInput extends Component {
     constructor(props) {
         super(props)
     
         this.inputRef = React.createRef()
         
     }
    clickChanges = () => {
        this.inputRef.current.focus()
    }
    
     
    render() {
        return (
            <div>
                <FRinput ref={this.inputRef} />
                <button onClick={this.clickChanges}>Focus Input</button>
            </div>
        )
    }
}

export default FRparentInput
