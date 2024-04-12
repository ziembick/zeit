'use client'

import React, { useEffect, useState } from 'react'

import { Product } from '../../../payload/payload-types'

import classes from './index.module.scss'
import { Button } from 'payload/components'
import { ContentBlock } from '../../_blocks/Content'

export const Size: React.FC<{
  product: Product
  onSizeSelected: (size: string) => void
}> = props => {
  const { product, onSizeSelected } = props
  const testLayout = product.layout.filter(L => L.blockType == 'content')
  const gloriaAmem = testLayout[0]['columns']

  const handleSizeClick = (size: string) => {
    setSelectedSize(size)
    onSizeSelected(size)
  }

  const [selectedSize, setSelectedSize] = useState<any>('')

  useEffect(() => {
    console.log('Tamanho selecionado:', selectedSize)
  }, [selectedSize])

  return (
    <div className={classes.actions}>
      {gloriaAmem.map(item => (
        <Button key={item.size} onClick={() => handleSizeClick(item.size)}>
          {item.size}
        </Button>
      ))}
    </div>
  )
}

// 'use client'

// import React, { useEffect, useState } from 'react'

// import { Product } from '../../../payload/payload-types'

// import classes from './index.module.scss'
// import { Button } from 'payload/components'
// import { Content } from '../../../payload/blocks/Content'
// import { ContentBlock } from '../../_blocks/Content'
// import { useRouter } from 'next/router'

// export const Size: React.FC<{
//   product: Product
//   onSizeSelected: (size: string) => void
// }> = props => {
//   const { product, onSizeSelected } = props
//   const testLayout = product.layout.filter(L => L.blockType == 'content')
//   const gloriaAmem = testLayout[0]?.['columns'] || []

//   const [selectedSize, setSelectedSize] = useState<any>('')

//   const handleSizeClick = (size: string) => {
//     setSelectedSize(size)
//     onSizeSelected(size)
//   }

//   useEffect(() => {
//     console.log('Tamanho selecionado no size:', selectedSize)
//   }, [selectedSize])

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
