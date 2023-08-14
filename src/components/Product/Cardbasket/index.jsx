import React from 'react'

const index = ({name, img, price, count}) => {
  return (
    <div className = "bcard">
        <img className = "bcard__preview" src={img} alt = "" />
        
        <h2 className = "bcard__title">{name}</h2>
      
        <div className = "bcard__price">
          {price} 
            {count}
          <button className = "bcard__add">
          + 
            </button>
        </div>
      </div>
  )
}

export default index