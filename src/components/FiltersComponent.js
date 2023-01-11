import React from 'react'
import {FaSearch } from 'react-icons/fa';
import RegionFilter from './RegionFilter';

const FiltersComponent = ({capitalizeLatter, setCountryRegion, lightMode}) => {
  
  return (
    <div className="filters-component">
        <div className={lightMode?"filters-component__input-div White-background":"filters-component__input-div  DarkBlue-background"}>
            <FaSearch className={lightMode?'makeDarkGray-color':"White-color"} />
            <input 
                className={lightMode?"White-background":"DarkBlue-background White-color"}
                onChange={(e)=>capitalizeLatter(e.target.value)}
                placeholder='Search for a country...' 
            />
        </div>
        <RegionFilter setCountryRegion={setCountryRegion} lightMode={lightMode}/>
    </div>
  )
}

export default FiltersComponent