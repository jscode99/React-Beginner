import React, { Component } from 'react'

class GreettingUser extends Component {

constructor(props) {
    super(props)

    this.state = {
         isLoggedIn:false
    }
}



    render() {

        return ('hello');

        // 1 Short circuited approach for conditional rendering 

        //==========================================================================
        // return (
        //     this.state.isLoggedIn && <div>Welcome Jishnu</div>
        // )
        //===========================================================================

        // 2 tertinary operator approach of conditional rendering      [Mostly used in]
        //=======================================================================================
        // return (
        //     this.state.isLoggedIn ?
        //         <div>Welcome Jishnu</div> :
        //         <div>Welcome Guest</div>
        // )
        //========================================================================================

        // 3 variable method approach of conditional rendering
        //========================================================================================
        // let message 
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Jishnu</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>
        //======================================================================================

        // 4 if else method approach for conditional rendering

        //=======================================================================================
        //    if (this.state.isLoggedIn) {
        //        return (
        //            <div>
        //                Welcome Jishnu
        //            </div>
        //        )
        //    } else {
        //        return (
        //            <div>
        //                Welcome Guest
        //            </div>
        //        )
        //    }
        //=========================================================================================
    }
}

export default GreettingUser
