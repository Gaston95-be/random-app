import React from 'react'
import { Link } from 'react-router-dom'
import style from './card.module.css'

export default function Card ({ name, lastname, city, country, id, large}) {
    return (
        <div className={style.card}>
            <Link to={`/user/${id}`}>
                <img className={style.img_card} src={large} alt={name}/>
                <div className={style.info}>
                    <h3>{name} {lastname}</h3>
                    <h6>{city}, {country}</h6>
                </div>
            </Link>
         </div>
    )
}
