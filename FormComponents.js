import React, { Component } from 'react'

class FormComponents extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            username: '',
            comments: '',
            topics:'react'
        }
    }
    
    onChangeHandler = event => {
        this.setState({
            username: event.target.value
        })
    }

    onChangeHandlerComments = event => {
        this.setState({
            comments : event.target.value
        })
    }

    onChangeHandlerTopic = event => {
        this.setState({
            topics: event.target.value
        })
    }

    onHandleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topics}`);

        //prevents the auto refresh of page
        event.preventDefault();
    }


    render() {

        //to avoid this.state. in value attributes

        const { username, comments, topics } = this.state
        
        return (
            <form onSubmit={this.onHandleSubmit}>
                <div>
                    <h1>Form Component</h1>
                    <label>Username :   </label>
                    <input type='text' value={username} onChange={this.onChangeHandler}></input>
                </div>
                <div>
                    <br></br>
                    <label>Comment : </label>
                    <textarea value={comments} onChange={this.onChangeHandlerComments}></textarea>
                </div>
                <div>
                    <br></br>
                    <label>Topic : </label>
                    <select value={topics} onChange={this.onChangeHandlerTopic}>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='vue'>Vue</option>
                    </select>
                </div>
                <br></br>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default FormComponents
