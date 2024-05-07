import React from 'react'
import { useState } from 'react'

const People = ({name}) => {
    return (
        <div>
            I am People
            <div className='text-center'>
                {name}
            </div>
        </div>
    )
}

export default People