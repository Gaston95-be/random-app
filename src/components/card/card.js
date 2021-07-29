import React from 'react'
import { Link } from 'react-router-dom'
import style from './card.module.css'

export default function Card ({title, name, lastname, city, country, id, username, thumbnail, large, email}) {
    return (
        <div className={style.card}>
            <Link to={`/home/${id}`}>
            
                
                <img src={large} alt={name}/>
                <div className={style.info}>
                    <h3 className>{name} {lastname}</h3>
                    <h6 clasName>{city}, {country}</h6>
                </div>
            </Link>
         </div>
        
    )
}