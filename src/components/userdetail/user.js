import React from 'react'
import  style from './user.module.css'

function User({user}) {
    return (
        <div className={style.container_body}>
            <div className={style.container_detail}>
                <img className={style.image_detail} src={user.picture.large} alt={user.name.first}/>
                <div classname={style.info_detail}>
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
