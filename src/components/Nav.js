import React from 'react'
import {FaRegMoon, FaMoon} from 'react-icons/fa';

const Nav = ({setLightMode, lightMode }) => {
  return (
    <div className={lightMode?'nav White-background': "nav DarkBlue-background"  }  >
       <h2 className={lightMode? "Very-Dark-Blue-1-color": 'White-color'  } >Where is the world?</h2>
       <div onClick={()=> setLightMode(prevValue => !prevValue)} >
          {lightMode? <FaRegMoon size={"13px"}/> :  <FaMoon size={"13px"} color="white"  /> }
          <h4 className={lightMode? "Very-Dark-Blue-1-color": 'White-color'  }>Dark Mode</h4> 
       </div> 
    </div>
  )
}

export default Nav