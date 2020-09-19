import React from 'react'

function IndexListing() {
    const names = ['Jishnu', 'Kichumma', 'Chinnamma','Jishnu'];
    const nameList = names.map((name, index) => <h1 key={index}>{index}{name}</h1> )
    return (
        <div>
            {nameList}
        </div>
    )
}

export default IndexListing