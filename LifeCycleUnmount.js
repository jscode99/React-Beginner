import React, { Component } from 'react'
import LifeCycleUnmountB from './LifeCycleUnmountB'

class LifeCycleUnmount extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'jishnu'
        }
        console.log(`LifeCycleUnmountA constructor`);
    }

    static getDerivedStateFromProps(props, state) {
        console.log(`LifeCycleUnmountA  getDerivedStateFromProps`);
        return null

    }

    componentDidMount() {
        console.log(`LifeCycleUnmountA componentDidMount`);
    }

    shouldComponentUpdate() {
        console.log(`LifeCycleUnmountA shouldComponentUpdate`);
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(`LifeCycleUnmountA getSnapshotBeforeUpdate`);
        return null
    }

    componentDidUpdate() {
        console.log(`LifeCycleUnmountA componentDidUpdate`);
    }

    changeState = () => {
        this.setState({
            name:'kichu'
        })
    }


    render() {
        console.log(`LifeCycleUnmountA render`)
        return (

            < div >
                Hello
                 <button onClick={this.changeState}>Change it</button>
                <LifeCycleUnmountB />
            </div>
        )
    }
}

export default LifeCycleUnmount
