import React from 'react'
import { UserCard } from './UserCard'

export const UsersList = ({ users }) => {
    return (
        <div style={listStyle}>
            {users.map((user) => <UserCard key={user.id} userData={user} />)}
        </div>
    )
}

const listStyle = {
    background: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap'
}