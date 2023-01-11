import React from "react"
const Option = ({children, isChosen, optionIsClicked}) => {

  return (
    
    <div 
        className={isChosen ? 'DarkGray-background': undefined} 
        onClick={()=>{
            optionIsClicked(children)
          }
        } 
        ><div>{children}</div>
    </div>
  )
}

export default Option