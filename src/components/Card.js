import React from 'react'
import { Link } from 'react-router-dom'


const Card = ({cardData, seeDetails, setCountryName, lightMode }) => {
    
    
  return (
    
        <div className={lightMode?'card White-background Very-Dark-Blue-1-color':'card DarkBlue-background White-color '}
            onClick={()=> {
                seeDetails(cardData)
                setCountryName("")
             } 
            } 
        >
            <Link to="/cardDetails" className='link-class' >
            <img alt="flag" src={cardData.flags.png} />
            <div className='card__content-div'>
                <h3>{cardData.name.common}</h3>
                {cardData.population>0 && <div><h5>Population:</h5><p>{cardData.population.toLocaleString()}</p></div>}
                <div><h5>Region:</h5><p>{cardData.region}</p></div>
                {cardData.capital &&  <div><h5>Capital:</h5><p>{cardData.capital}</p></div>}
            </div>
            </Link>
        </div>
 
  )
}

export default Card