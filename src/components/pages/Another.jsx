import React from 'react'
import { Product } from '../Product'
// import { Products } from '../Product'
import CardBasket from '../Product/Cardbasket'
import './Another.scss'

const Another = ({}) => {
  return (
    <>
      <div className='cart'>
        <h2>Корзина с товарами</h2>
        {Product.map(item => {
          const { name, img, price, count} = item
          return (
            <CardBasket name={name} img={img} price={price} count={count}/>
          )
        })}
      </div>
    </>
  )
}

export default Another