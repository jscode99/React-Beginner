import React, { Component } from 'react'
import ComponentC from './ComponentC'
import UserContext from './UserContext'

class ComponentB extends Component {
    static contextType = UserContext
    
    render() {
        return (
            <div>
                ComponentB context {this.context}
                <ComponentC/>
            </div>
        )
    }
}


export default ComponentB
