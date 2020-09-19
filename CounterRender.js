import React, { Component } from 'react'

class CounterRender extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    clickHandler = () => {
        this.setState(prevState => {
            return { count: prevState.count + 2 }

        })
    }
    render() {
        return (
            <div>
                {this.props.render(this.state.count,this.clickHandler)}
            </div>
        )
    }
}

export default CounterRender
