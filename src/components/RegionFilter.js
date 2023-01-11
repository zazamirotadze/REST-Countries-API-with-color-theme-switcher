import React from 'react'
import { useState } from 'react'
import {FaAngleDown } from 'react-icons/fa';
import Option from './Option';
const RegionFilter = ({setCountryRegion, lightMode}) => {
  const [listIsShown, setListIsShown] = useState(false)
  const [isChosen, setIsChosen] = useState(
    {
      World: true,
      Africa: false,
      Americas: false,
      Asia: false,
      Europe: false,
      Oceania: false,
      Antarctic: false,
    }
  )
  function optionIsClicked(children){
   
    setCountryRegion(children)

    setIsChosen(prevIsChosen => {
      return Object.fromEntries(
        Object.entries(prevIsChosen).map(([key, value]) => [key, key === children])
      )
    });
   
  }
    
     
    
  
  return (
    <div className={lightMode?'regionFilter White-background':'regionFilter  DarkBlue-background  White-color'}>
    <div  >
        <div>Filter by Region</div>
        <FaAngleDown style={{cursor:"pointer"}} onClick={() => setListIsShown(prevState => !prevState)}/>
    </div>
        { 
            listIsShown &&
            <div className={lightMode?'regionFilter__options-div White-background':'regionFilter__options-div  DarkBlue-background  White-color'}>
              <Option 
                isChosen={isChosen.World} 
                setCountryRegion={setCountryRegion} 
                optionIsClicked={optionIsClicked}
              >World</Option>
              <Option 
                isChosen={isChosen.Africa} 
                setCountryRegion={setCountryRegion} 
                setIsChosen={setIsChosen}
                optionIsClicked={optionIsClicked}
              >Africa</Option>
              <Option 
                isChosen={isChosen.Americas} 
                setCountryRegion={setCountryRegion} 
                setIsChosen={setIsChosen}
                optionIsClicked={optionIsClicked}
              >Americas</Option>
              <Option 
                isChosen={isChosen.Asia} 
                setCountryRegion={setCountryRegion} 
                setIsChosen={setIsChosen}
                optionIsClicked={optionIsClicked}
              >Asia</Option>
              <Option 
                isChosen={isChosen.Europe} 
                setCountryRegion={setCountryRegion} 
                setIsChosen={setIsChosen}
                optionIsClicked={optionIsClicked}
              >Europe</Option>
              <Option 
                isChosen={isChosen.Oceania} 
                setCountryRegion={setCountryRegion} 
                setIsChosen={setIsChosen}
                optionIsClicked={optionIsClicked}
              >Oceania</Option>
              <Option 
                isChosen={isChosen.Antarctic} 
                setCountryRegion={setCountryRegion} 
                setIsChosen={setIsChosen}
                optionIsClicked={optionIsClicked}
              >Antarctic</Option>
            </div>
        }
    </div>
  )
}

export default RegionFilter