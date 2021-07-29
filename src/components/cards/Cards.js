import React from 'react';
import Card from '../card/card';

function Cards({users}) {
    return (
        <div>
            {users.map((user) => <Card
                //destructuring
             title = {user.name.title}
             name = {user.name.first}
             lastname = {user.name.last}
             city = {user.location.city}
             country = {user.location.country}
             id = {user.login.uuid}
             username = {user.login.username}
             thumbnail = {user.picture.thumbnail}
             large = {user.picture.large}
             email = {user.email}
            />)}
        </div>
    )
}

export default Cards
