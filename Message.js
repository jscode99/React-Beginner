
    import React, { Component } from 'react'
    
class Message extends Component {
         
    constructor(props) {
        super(props)
    
        this.state = {
             message : 'Please subscribe'
        }
    }
    
    changeMessage() {
        this.setState({
                message:"Thanks for the subscription"
            })
        }


        render() {
            return (
                <div>
                    <h1>{this.state.message}</h1>
                    <button onClick={()=>this.changeMessage()}>Subscribe</button>
                </div>
            )
        }
    }
    
    export default Message