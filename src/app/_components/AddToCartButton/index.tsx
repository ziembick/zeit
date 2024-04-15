'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { Product } from '../../../payload/payload-types'
import { useCart } from '../../_providers/Cart'
import { Button, Props } from '../Button'

import classes from './index.module.scss'

export const AddToCartButton: React.FC<{
  product: Product
  quantity?: number
  className?: string
  appearance?: Props['appearance']
  selectedSize?: any
}> = props => {
  
  const { product, quantity = 1, className, appearance = 'primary', selectedSize } = props

  const { cart, addItemToCart, isProductInCart, hasInitializedCart } = useCart()

  const [isInCart, setIsInCart] = useState<boolean>()
  const router = useRouter()

  useEffect(() => {
    setIsInCart(isProductInCart(product))
    setFinalItem(product => ({
      ...product,
      size: selectedSize
  })
)
  }, [isProductInCart, product, cart, selectedSize])
  
  const [finalItem, setFinalItem] = useState(product)

  // console.log("prind addto cart")
  // console.log(selectedSize)

  return (
    <Button
      href={isInCart ? '/cart' : undefined}
      type={!isInCart ? 'button' : undefined}
      label={isInCart ? `✓ Ver no carrinho` : `Adicionar as compras`}
      el={isInCart ? 'link' : undefined}
      appearance={appearance}
      className={[
        className,
        classes.addToCartButton,
        appearance === 'default' && isInCart && classes.green,
        !hasInitializedCart && classes.hidden,
      ]
        .filter(Boolean)
        .join(' ')}
      onClick={
        !isInCart
          ? () => {
              addItemToCart({
                product: product,
                size: selectedSize,
                quantity: quantity,
              })
              router.push('/cart')
            }
          : undefined
      }
    />
  )
}
