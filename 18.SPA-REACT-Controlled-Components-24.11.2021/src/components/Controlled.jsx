import React, { useState } from 'react'

export const Controlled = () => {
    const [message, setMessage] = useState("default message");

    return (
        <div style={{ background: 'gray' }}>
            <h1>{message}</h1>
            <input type="text" value={message} onChange={e => setMessage(e.target.value)} />
        </div>
    )
}
