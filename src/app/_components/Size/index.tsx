'use client'

import React, { useEffect, useState } from 'react'

import { Product } from '../../../payload/payload-types'

import classes from './index.module.scss'
import { Button } from 'payload/components'

import { toast } from 'react-toastify'

export const Size: React.FC<{
  product: Product
  onSizeSelected: (size: string) => void
}> = props => {
  const { product, onSizeSelected } = props
  const testLayout = product.layout.filter(L => L.blockType == 'content')

  if (Array.isArray(testLayout) && testLayout.length && testLayout[0] && testLayout[0]['columns'] && testLayout[0]['columns'].length) {
    const gloriaAmem = testLayout[0]['columns']
    const handleSizeClick = (size: string) => {
      setSelectedSize(size)
      onSizeSelected(size)
      setIsSizeSelected(true)
    }

    const [selectedSize, setSelectedSize] = useState<any>('')
    const [isSizeSelected, setIsSizeSelected] = useState(false)

    useEffect(() => {
      console.log('Tamanho selecionado:', selectedSize)
    }, [selectedSize])

    return (
      <>
        <p>Tamanho</p>
        <div className={classes.actions}>
          {gloriaAmem.map(item => (
            <button key={item.size} onClick={() => handleSizeClick(item.size)}>
              {item.size}
            </button>
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
