export const Counter = ({ counter, setCounter }) => {
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Inc</button>
        </div>
    )
}
