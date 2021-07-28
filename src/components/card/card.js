import React from 'react'
import { Link } from 'react-router-dom'

export default function Card ({title, name, lastname, city, country, id, username, thumbnail, large, email}) {
    return (
        <div className>
            <div className>
                <img src={thumbnail} alt={name}/>
                <Link to={`/home/${id}`}>
                    <h5 className>{title}, {name} {lastname}</h5>
                    <h6 clasName>{city}, {country}</h6>
                </Link>
            </div>

        </div>
    )
}