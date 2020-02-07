import React from 'react'
import CustomButton from '../CustomButton'
import './cart-dropdown.styles.scss'
import CartItem from '../CartItem'
import { connect } from 'react-redux'

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapSateToProps = ({ cart: { cartItems } }) => ({
  cartItems
})

export default connect(mapSateToProps)(CartDropdown)
