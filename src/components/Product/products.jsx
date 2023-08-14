import React from 'react'
import './Product.scss'

const products = ({name, img, price, handleClick, addCart}) => {
  return (
    <div className='products'>
      {/* <div className='products__add'> */}
        <img src={img} alt="" />
        <button onClick={addCart} className='products__add-button'>addProduct
        {console.log(addCart)} 
        </button>
        
        <p className='products__name'>{name}</p>
        <h1 className='products__price'>{price}</h1>
      {/* </div> */}
    </div>
  )
}

export default products