import React, { Component } from 'react'

class ButtonClick extends Component {
     
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Please click it'
        }

        this.clickedIn = this.clickedIn.bind(this);
    }
 

    clickedIn() {
        this.setState({
            message:'thank you!!!'
        },() => console.log('Message :',this.state.message))
    }


    // clickedIn = () => {
    //     this.setState({
    //         message:'Your are Hacked!!'
    //     })
    // }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.clickedIn}>Click Me</button>
            </div>
        )
    }
}

export default ButtonClick
