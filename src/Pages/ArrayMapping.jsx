
const ArrayMapping = () => {
    
    const nums = [1, 2, 3]
    const array = nums.map((num, index) => {
        // React map => returns an array of elements
        // key => unique identifier for each element
        // identifier => helps React to identify which items have changed, are added, or are removed
        return <span key={index}>{num}</span>
    })

    return <div>
        {array}
    </div>

}

export default ArrayMapping
