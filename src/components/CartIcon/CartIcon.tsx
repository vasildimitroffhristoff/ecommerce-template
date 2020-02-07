import React from 'react'

import { ReactComponent as ShoppingIcon } from '../../assets/bag.svg'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import './cart-icon.styles.scss'

const CartIcon = ({ toggleHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  toggleHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
    (accumulatedQuantity, cartIem) =>
      accumulatedQuantity + cartIem.quantity,
    0
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(
  CartIcon
)
