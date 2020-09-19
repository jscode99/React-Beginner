import React from 'react'

function Persons({personProp}) {
    return (
        <div>
            <h2>I am {personProp.personName},{personProp.age} year old.My profession is {personProp.skill}</h2>
        </div>
    )
}

export default Persons
