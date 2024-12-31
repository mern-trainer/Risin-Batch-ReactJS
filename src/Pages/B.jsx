const B = ({ age, handleDataFromChild, counter, setCounter }) => {

    return <div>
        <button onClick={() => setCounter(counter + 1)}>Click</button>
        Component B [{age}]
    </div>
}

export default B