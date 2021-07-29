import React from 'react'

function User({title, name, lastname, city, country, id, username, thumbnail, large, email}) {
    return (
        <div className>
            <div className>
                <img src={large} alt={name}/>
                <div className>
                    <h2>{title}, {name} {lastname}</h2>
                    <p>Location: {city}, {country}</p>
                    <p>Username: {username}</p>
                    <p>Email: {email}</p>

                </div>

            </div>
            
        </div>
    )
}

export default User
