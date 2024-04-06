'use client'

import React, { useEffect, useState } from 'react'

import { Product } from '../../../payload/payload-types'

import classes from './index.module.scss'
import { Button } from 'payload/components'



export const Size: React.FC<{
  product: Product
}> = props => {
  const { product} = props
  const testLayout = product.layout.filter((L) => L.blockType == "content")
  const gloriaAmem = testLayout[0]['columns']
  console.log("Paulo")
  // console.log(gloriaAmem)
  gloriaAmem.forEach((element) => console.log(element));
  const varia = gloriaAmem.reduce(
    (accumulator, currentValue) => accumulator + " " + currentValue.size,
    "",
  );
  // console.log(Object.getOwnPropertyNames(testLayout[0]))
  

  return (
    <div className={classes.actions}>
      <Button>{varia}</Button>
      <Button>{varia}</Button>
      <Button>{varia}</Button>
      <Button>{varia}</Button>
    </div>
  )
}
