import React, { PureComponent } from 'react'
// import RegComp from './RegComp'
// import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentRegComp extends PureComponent {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'jishnu'
         }
     }
    // componentDidMount() {
    componentDidUpdate() {
        setInterval(() => {
            this.setState({
                name: 'Hello'
            })
        }, 2000)
 }
    // }
    
    render() {
        console.log(`******************Parent Comp`);
        return (
            <div >
                <p value={this.state.name}>{this.state.name}</p>
                <MemoComp/>
                {/* <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/> */}
            </div>
        )
    }
}

export default ParentRegComp
