import React, { Component } from 'react'


class LifeCycleUnmountB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'jishnu'
        }
        console.log(`LifeCycleUnmountB constructor`);
    }

    static getDerivedStateFromProps(props, state) {
        console.log(`LifeCycleUnmountB  getDerivedStateFromProps`);
        return null

    }

    componentDidMount() {
        console.log(`LifeCycleUnmountB componentDidMount`);
    }

    shouldComponentUpdate() {
        console.log(`LifeCycleUnmountB shouldComponentUpdate`);
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(`LifeCycleUnmountB getSnapshotBeforeUpdate`);
        return null
    }

    componentDidUpdate() {
        console.log(`LifeCycleUnmountB componentDidUpdate`);
    }

    render() {
        console.log(`LifeCycleUnmountB render`)
        return (

            < div >
                HelloB
            </div>
        )
    }
}

export default LifeCycleUnmountB
