'use client'

import React, { useEffect, useState } from 'react'

import { Product } from '../../../payload/payload-types'

import classes from './index.module.scss'
import { Button } from 'payload/components'



export const Size: React.FC<{
  product: Product
  onSizeSelected: (size: string) => void
}> = props => {
  const { product, onSizeSelected} = props
  const testLayout = product.layout.filter((L) => L.blockType == "content")
  const gloriaAmem = testLayout[0]['columns']


  const handleSizeClick = (size: string) => {
    setSelectedSize(size)
    onSizeSelected(size)
  }
 
  const [selectedSize, setSelectedSize] = useState<any>('')

  useEffect(() => {
    console.log("Tamanho selecionado:", selectedSize)
  }, [selectedSize])

 

  return (
    <div className={classes.actions}>
        {gloriaAmem.map(item => (
            <Button key={item.size} onClick={() => handleSizeClick(item.size)}>{item.size}</Button>
          ))}
    </div>
  )
}

 // console.log("Paulo")
  // gloriaAmem.forEach((element) => console.log(element));
  // const varia = gloriaAmem.reduce(
  //   (accumulator, currentValue) => accumulator + " " + currentValue.size,
  //   "",
  // );
  // console.log(Object.getOwnPropertyNames(testLayout[0]))
  
