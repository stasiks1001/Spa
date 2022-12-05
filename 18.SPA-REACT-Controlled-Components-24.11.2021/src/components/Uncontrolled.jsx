import React, { useRef } from 'react'

export const Uncontrolled = (props) => {
    const numRef = useRef();

    const handleFocus = () => {
        numRef.current.classList.add('test')
    }

    return (
        <div>
            <h2>{props.data}</h2>
            <input type="number" ref={numRef} value={9} onChange={()=> null} />
            <button onClick={handleFocus}>Blur</button>
        </div>
    )
}
