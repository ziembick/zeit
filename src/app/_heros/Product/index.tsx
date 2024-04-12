'use client'

import React, { Fragment, useState } from 'react'
import Link from 'next/link'

import { Product } from '../../../payload/payload-types'
import { AddToCartButton } from '../../_components/AddToCartButton'
import { Gutter } from '../../_components/Gutter'
import { Media } from '../../_components/Media'
import { Message } from '../../_components/Message'
import { Price } from '../../_components/Price'
import RichText from '../../_components/RichText'

import classes from './index.module.scss'
import { Blocks } from '../../_components/Blocks'
import { Size } from '../../_components/Size'



export const ProductHero: React.FC<{
  product: Product
}> = ({ product }) => {
  const {
    id,
    stripeProductID,
    title,
    categories,
    meta: { image: metaImage, description} = {},
  } = product


  const [selectedSize, setSelectedSize] = useState<string>('')

  const handleSizeClick = (size: string) => {
    setSelectedSize(size)
    size
    localStorage.setItem('selectedSize', size)
  }


  return (
    <Gutter className={classes.productHero}>
      <div className={classes.mediaWrapper}>
        {!metaImage && <div className={classes.placeholder}>No image</div>}
        {metaImage && typeof metaImage !== 'string' && (
          <Media imgClassName={classes.image} resource={metaImage} fill />
        )}
      </div>
      <div className={classes.details}>
        <h3 className={classes.title}>{title}</h3>
        <div className={classes.categoryWrapper}>
          <div className={classes.categories}>
            {categories?.map((category, index) => {
              if (typeof category === 'object' && category !== null) {
                const { title: categoryTitle } = category

                const titleToUse = categoryTitle || 'Untitled category'

                const isLast = index === categories.length - 1

                return (
                  <p key={index} className={classes.category}>
                    {titleToUse}
                    {!isLast && <Fragment>, &nbsp;</Fragment>}{' '}
                    <span className={classes.separator}>|</span>
                  </p>
                )
              }

              return null
            })}
          </div>
          <p className={classes.stock}>Em Estoque</p>
        </div>

        <Price product={product} button={false} />
        <p>Size:</p>
        <Size product={product} onSizeSelected={handleSizeClick}/>
        
        <div className={classes.description}>
          <h6>Descrição</h6>
          <p>{description}</p>
          
        </div>

        <AddToCartButton product={product} className={classes.addToCartButton} selectedSize={selectedSize}/>
        <p>Tamanho selecionado: {selectedSize}</p>
      </div>
    </Gutter>
  )
}



// import React, { Fragment } from 'react'
// import Link from 'next/link'

// import { Product } from '../../../payload/payload-types'
// import { AddToCartButton } from '../../_components/AddToCartButton'
// import { Gutter } from '../../_components/Gutter'
// import { Media } from '../../_components/Media'
// import { Message } from '../../_components/Message'
// import { Price } from '../../_components/Price'
// import RichText from '../../_components/RichText'
// import { useState } from 'react'
// import classes from './index.module.scss'
// import { Blocks } from '../../_components/Blocks'
// import { Size } from '../../_components/Size'
// import CartItem from '../../(pages)/cart/CartItem'
// import { useCart } from '../../_providers/Cart'

// export const ProductHero: React.FC<{
//   product: Product
//   size?: Product //added
//   onSizeSelected: (size: string) => void
// }> = ({ product, onSizeSelected }) => {
//   const {
//     id,
//     stripeProductID,
//     title,
//     categories,
//     meta: { image: metaImage, description } = {},
//   } = product

//   const { addItemToCart } = useCart()

//   const [selectedSize, setSelectedSize] = useState<string>(' ')

//   const handleSizeClick = (size: string) => {
//     setSelectedSize(size)
//     size
//     // size
//     // console.log("tamanho:", size)
//     // setSelectedSize(size)
//     // console.log("tamanho de novo:", setSelectedSize(size))
//     // const testLayout = product.layout.filter((L) => L.blockType == "content")
//     // const gloriaAmem = testLayout[0]['columns']
//     // console.log(gloriaAmem)
//     // addItemToCart({ product })
//     // console.log(addItemToCart({product }))
//   }

//   return (
//     <Gutter className={classes.productHero}>
//       <div className={classes.mediaWrapper}>
//         {!metaImage && <div className={classes.placeholder}>No image</div>}
//         {metaImage && typeof metaImage !== 'string' && (
//           <Media imgClassName={classes.image} resource={metaImage} fill />
//         )}
//       </div>
//       <div className={classes.details}>
//         <h3 className={classes.title}>{title}</h3>
//         <div className={classes.categoryWrapper}>
//           <div className={classes.categories}>
//             {categories?.map((category, index) => {
//               if (typeof category === 'object' && category !== null) {
//                 const { title: categoryTitle } = category

//                 const titleToUse = categoryTitle || 'Untitled category'

//                 const isLast = index === categories.length - 1

//                 return (
//                   <p key={index} className={classes.category}>
//                     {titleToUse}
//                     {!isLast && <Fragment>, &nbsp;</Fragment>}{' '}
//                     <span className={classes.separator}>|</span>
//                   </p>
//                 )
//               }

//               return null
//             })}
//           </div>
//           <p className={classes.stock}>Em Estoque</p>
//         </div>

//         <Price product={product} button={false} />
//         <p>Size:</p>
//         <Size product={product} onSizeSelected={handleSizeClick} />

//         <div className={classes.description}>
//           <h6>Descrição</h6>
//           <p>{description}</p>
//         </div>

//         <AddToCartButton product={product} className={classes.addToCartButton} />
//       </div>
//     </Gutter>
//   )
// }
