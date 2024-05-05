import type { CartItems, Product, User } from '../../../payload/payload-types'

export type CartItem = CartItems[0]

type CartType = User['cart']

type CartAction =
  | {
      type: 'SET_CART'
      payload: CartType
    }
  | {
      type: 'MERGE_CART'
      payload: CartType
    }
  | {
      type: 'ADD_ITEM'
      payload: CartItem
    }
  | {
      type: 'DELETE_ITEM'
      payload: Product
    }
  | {
      type: 'CLEAR_CART'
    }

export const cartReducer = (cart: CartType, action: CartAction): CartType => {
  switch (action.type) {
    case 'SET_CART': {
      return action.payload
    }

    case 'MERGE_CART': {
      const { payload: incomingCart } = action

      const syncedItems: CartItem[] = [
        ...(cart?.items || []),
        ...(incomingCart?.items || []),
      ].reduce((acc: CartItem[], item) => {
        // remove duplicates
        const productId = typeof item.product === 'string' ? item.product : item?.product?.id

        const indexInAcc = acc.findIndex(({ product }) =>
          typeof product === 'string' ? product === productId : product?.id === productId,
        ) // eslint-disable-line function-paren-newline

        if (indexInAcc > -1) {
          acc[indexInAcc] = {
            ...acc[indexInAcc],
            // customize the merge logic here, e.g.:
            // quantity: acc[indexInAcc].quantity + item.quantity
          }
        } else {
          acc.push(item)
        }
        return acc
      }, [])

      return {
        ...cart,
        items: syncedItems,
      }
    }

    case 'ADD_ITEM': {
      // if the item is already in the cart, increase the quantity
      const { payload: incomingItem } = action
      const productId =
        typeof incomingItem.product === 'string' ? incomingItem.product : incomingItem?.product?.id

      // const hasValidProductSize = (incomingItem: { product?: { size?: string } }) => {
      //   const validSizes: Set<string> = new Set(['oneThird', 'half', 'twoThirds', 'full']);

      //   // Verifica se o produto tem um tamanho definido, se é do tipo string e se é um dos tamanhos válidos
      //   return incomingItem.product && typeof incomingItem.product.size === 'string' && validSizes.has(incomingItem.product.size);
      // }
      // console.log('producccttt id', productId)
      const indexInCart = cart?.items?.findIndex(({ product }) =>
        typeof product === 'string' ? product === productId : product?.id === productId,
      ) // eslint-disable-line function-paren-newline

      let newIndexinCart
      if (incomingItem.size === '') {
        newIndexinCart = cart?.items?.findIndex(({ product }) =>
          typeof product === 'string' ? product === productId : product?.id === productId,
        )
      } else {
        newIndexinCart = cart?.items?.findIndex(item =>
          typeof item.product === 'string'
            ? item.product === productId
            : item.product?.id === productId && item.size === incomingItem.size,
        )
      }


      // console.log('INDEX IN CART', indexInCart)
      let withAddedItem = [...(cart?.items || [])]

      // console.log('added item with', withAddedItem)

      if (newIndexinCart === -1) {
        withAddedItem.push(incomingItem)
      }
      console.log('added item 2', withAddedItem)


      if (typeof newIndexinCart === 'number' && newIndexinCart > -1) {
        console.log("quantity", withAddedItem[newIndexinCart].quantity)
        withAddedItem[newIndexinCart] = {
          ...withAddedItem[newIndexinCart],
          quantity: withAddedItem[newIndexinCart].quantity + incomingItem.quantity
        }
      }

      // console.log('added item 3', withAddedItem)
      return {
        ...cart,
        items: withAddedItem,
      }
    }

    case 'DELETE_ITEM': {
      const { payload: incomingProduct } = action
      const withDeletedItem = { ...cart }

      const indexInCart = cart?.items?.findIndex(({ product }) =>
        typeof product === 'string'
          ? product === incomingProduct.id
          : product?.id === incomingProduct.id,
      ) // eslint-disable-line function-paren-newline

      if (typeof indexInCart === 'number' && withDeletedItem.items && indexInCart > -1)
        withDeletedItem.items.splice(indexInCart, 1)

      return withDeletedItem
    }

    case 'CLEAR_CART': {
      return {
        ...cart,
        items: [],
      }
    }

    default: {
      return cart
    }
  }
}