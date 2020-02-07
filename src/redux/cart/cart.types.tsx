export const CartTypes = {
  TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
  ADD_ITEM: 'ADD_ITEM'
}

export type ItemType = {
  id: string
  imageUrl: string
  name: string
  price: number
  quantity?: number
}

export type ActionType = { type: string; payload: ItemType }
