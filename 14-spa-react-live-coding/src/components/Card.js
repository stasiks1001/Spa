import React from 'react'

export const Card = (props) => {

    return (
        <div style={styles.userCard}>
            <img src={props.userData.avatar} style={styles.img} />
            <h2>{props.userData.first_name}</h2>
            <h3>{props.userData.email}</h3>
        </div>
    )
}




















const styles = {
    userCard: {
        color: 'blue',
        fontFamily: 'verdana',
        border: '1px solid whitesmoke',
        width: '250px',
        margin: '20px',
        display: 'flex',
        flexDirection: 'column',
        background: 'gray',
        justifyContent: 'cetner',
        alignItems: 'center',
        borderRadius: '15px'
    },
    img: {
        width: '80%',
        borderRadius: '15px'
    }
}