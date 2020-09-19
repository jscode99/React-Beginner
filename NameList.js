import React from 'react'
import Persons from './Persons';

function NameList() {
    const names = [{
        id: 1,
        personName: 'jishnu',
        age: 25,
        skill: 'Fullstack developer'
    },
    {
        id: 2,
        personName: 'kichumma',
        age: 24,
        skill: 'CivilEngineer'
    },
    {
        id: 3,
        personName: 'chinnamma',
        age: 30,
        skill: 'Medicinal chemist'
    }
        
    ]

    const personList = names.map(person => (
        <Persons personProp={person} />
        
     ) )
    return (
        <div>{personList}</div>
    )
}

export default NameList;