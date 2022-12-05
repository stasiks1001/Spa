import React from 'react'

export const UserCard = ({ userData }) => {

    return (
        <div style={style}>
            <h1>{userData.name}</h1>
            <h2>{userData.email}</h2>
            <h3>{userData.phone}</h3>
            <h4>{userData.website}</h4>
        </div>
    )
}

const style = {
    border: '1px solid blue',
    width: '300px',
    padding: '10px',
    textAlign: 'center'
}