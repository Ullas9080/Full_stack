import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../utils/cartSlice'


const Cart = () => {

const dispatch=useDispatch()
const k=useSelector(store=> store.cart.k)
const addCart=()=>{
    dispatch(addToCart())
}
  return (
    <div>
      <button onClick={addCart}>Add to cart :{k}</button>
    </div>
  )
}

export default Cart
