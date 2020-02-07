import React from 'react'
import CustomButton from '../CustomButton'
import './cart-dropdown.styles.scss'
import CartItem from '../CartItem'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))
      ) : (
        <div>Cart is empty</div>
      )}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapSateToProps = (state) => ({
  cartItems: selectCartItems(state)
})

export default connect(mapSateToProps)(CartDropdown)
