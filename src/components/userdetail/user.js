import React from 'react'

function User({user}) {
    return (
        <div >
            <div >
                <img src={user.picture.large} alt={user.name.first}/>
                <div >
                    <h2>{user.name.title}, {user.name.first} {user.name.last}</h2>
                    <p>Location: {user.location.city}, {user.location.country}</p>
                    <p>Username: {user.login.username}</p>
                    <p>Email: {user.email}</p>

                </div>

            </div>
            
        </div>
    )
}

export default User
