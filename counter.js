import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             counter:0
        }
    }
    
    increment() {
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }))
        console.log(this.state.counter);
 }

    incrementFive() {
        this.increment();
        this.increment();
       
}

    render() {
        return (
            <div>
                <p>Counter -{this.state.counter}</p>
                <button onDoubleClick={() => this.incrementFive()}>Counter</button>
            </div>
        )
    }
}

export default Counter
