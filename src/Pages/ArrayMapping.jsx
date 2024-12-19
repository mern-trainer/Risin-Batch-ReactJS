import React from 'react'

const ArrayMapping = () => {
    
    const nums = [1, 2, 3]

    return <div>
        {
            nums.map((num, index) => {
                // React map => returns an array of elements
                // key => unique identifier for each element
                // identifier => helps React to identify which items have changed, are added, or are removed
                return <span key={index}>{num}</span>
            })
        }
    </div>
}

export default ArrayMapping
