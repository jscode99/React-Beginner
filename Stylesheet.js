import React from 'react'
import './MyStyles.css'


function Stylesheet(props) {
     let className = props.primary ? 'primary' : 'secondary'
    return (
        <div className={`topBar topcolor`}>
            <h1 className={`${className} fontColor`}>MyApp</h1>
            <ul className='uldeco'>
                <li className='menus1'>Home</li>
                <li className='menus2'>About us</li>
            </ul>
        </div>
    )
}

export default Stylesheet