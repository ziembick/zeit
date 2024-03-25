import React from 'react'
import classes from './index.module.scss'
import Link from 'next/link'
import { Category } from '../../../payload/payload-types'
import CategoryCard from './CategoryCard'

export default function Categories({ categories }: { categories: Category[] }) {
  return (
    <section className={classes.container}>
      <div className={classes.titleWrapper}>
        <h3>Compre por categorias</h3>
        <Link href="/products">Mostrar Tudo</Link>
      </div>
      <div className={classes.list}>
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category}/>
        ))}
      </div>
    </section>
  )
}
