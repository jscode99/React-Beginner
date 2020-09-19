import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
    
        //new method for creating refs
        this.inputRef = React.createRef()

        //Older method for creating refs
        this.cbRef = null
        this.setcbRef = element => {
            this.cbRef = element
            
        }
    }

    //new method for creating ref

    // componentDidMount() {
    //     this.inputRef.current.focus()
    //     console.log(`hello world`);
    // }

    //older method for creating refs
    componentDidMount() {
        if (this.cbRef) {
            this.cbRef.focus()
        }
        console.log(this.cbRef);
    }


    //new method for creating ref
    // clickHandler = () => {
    //     alert(`Hello ${this.inputRef.current.value} welcome to myapp`)
    // }

    render() {
        
        return (
            //new method for creating refs

            // <div>
            //     <input type="text" ref={this.inputRef} />
            //     <button onClick={this.clickHandler}>Send</button>
            // </div>


            //old method for creating ref
            <div>
                <input type="text" ref={this.setcbRef}/>
            </div>
        )
    }
}

export default RefsDemo
