import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const k=useSelector(store=>store.cart.k)
      console.log(k);
  return (
    <div>
      <h1>Cart <span>0</span></h1>
    
      
    </div>
  )
}

export default Navbar
