import { CartTypes, ItemType } from './cart.types'

export const toggleCartHidden = () => ({
  type: CartTypes.TOGGLE_CART_HIDDEN
})

export const addCartItem = (item: ItemType) => ({
  type: CartTypes.ADD_ITEM,
  payload: item
})
