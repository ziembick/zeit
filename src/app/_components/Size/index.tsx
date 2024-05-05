'use client'

import React, { useEffect, useState } from 'react'

import { Product } from '../../../payload/payload-types'

import classes from './index.module.scss'
import { Button } from 'payload/components'

export const Size: React.FC<{
  product: Product
  onSizeSelected: (size: string) => void
}> = props => {
  const { product, onSizeSelected } = props
  const contentLayout = product.layout.filter(L => L.blockType == 'content')

  if (Array.isArray(contentLayout) && contentLayout.length && contentLayout[0] && contentLayout[0]['columns'] && contentLayout[0]['columns'].length) {
    const selectColumns = contentLayout[0]['columns']
    const handleSizeClick = (size: string) => {
      setSelectedSize(size)
      onSizeSelected(size)
      setIsSizeSelected(true)
    }

    const [selectedSize, setSelectedSize] = useState<string>('')
    const [isSizeSelected, setIsSizeSelected] = useState(false)

    useEffect(() => {
      console.log('Tamanho selecionado:', selectedSize)
    }, [selectedSize])

    return (
      <>
        <p>Tamanho</p>
        <div className={classes.actions}>
          {selectColumns.map(item => (
            <Button key={item.size} onClick={() => handleSizeClick(item.size)}>
              {item.size}
            </Button>
          ))}
        </div>
      </>
    )
  }
  return (
    <></>
  )
}

//   return (
//     <div className={classes.actions}>
//       {gloriaAmem.map((item, index) => (
//         <Button key={index} onClick={() => handleSizeClick(item.size)}>
//           <ContentBlock blockType='content' columns={[item]}/>
//         </Button>
//       ))}
//     </div>
//   )
// }
