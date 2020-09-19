import React from 'react'

function ErrorFunc({ heroName }) {
    if (heroName === 'joker') {
        throw new Error('Not a hero')
    }
    return (
        <div>
            {heroName}
        </div>
    )
}

export default ErrorFunc
