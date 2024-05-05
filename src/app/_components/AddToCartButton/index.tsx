'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { Product } from '../../../payload/payload-types'
import { useCart } from '../../_providers/Cart'
import { Button, Props } from '../Button'

import classes from './index.module.scss'
import { toast } from 'react-toastify'

export const AddToCartButton: React.FC<{
  product: Product
  quantity?: number
  className?: string
  appearance?: Props['appearance']
  selectedSize?: any
  onAddToCart?: () => boolean | void
}> = props => {
  
  const { product, quantity = 1, className, appearance = 'primary', selectedSize, onAddToCart } = props

  const { cart, addItemToCart, isProductInCart, hasInitializedCart } = useCart()

  const [isInCart, setIsInCart] = useState<boolean>()
  const [isSizeSelected, setIsSizeSelected] = useState(false)
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

  const hasSizes = product.layout.some(L => L.blockType === 'content' && L.columns && L.columns.length)

  return (
    <Button
      // href={isInCart ? '/cart' : undefined}
      type={'button'}
      label={'Adicionar as compras'}
      // el={isInCart ? 'link' : undefined}
      appearance={appearance}
      className={[
        className,
        classes.addToCartButton,
        appearance === 'default',
      ]
        .filter(Boolean)
        .join(' ')}
        onClick={
() => {
                const allowAddToCart = onAddToCart ? onAddToCart() : true;
                if (allowAddToCart) {
                  addItemToCart({
                    product: product,
                    size: selectedSize,
                    quantity: quantity,
                  });
                  // router.push('/cart');
                }
              }

        }
    />
  )
}
