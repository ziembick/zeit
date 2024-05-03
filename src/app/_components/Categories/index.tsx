import React from 'react'
import classes from './index.module.scss'
import Link from 'next/link'
import { Category } from '../../../payload/payload-types'
import CategoryCard from './CategoryCard'

export default function Categories({ categories }: { categories: Category[] }) {
  return (
    <section className={classes.container}>
      <div className={classes.comprePor}>
        <h6>Compre por</h6>
        <h3>Categorias</h3>
      </div>
      <div className={classes.titleWrapper}>
        <Link href="/products">Mostrar Tudo</Link>
      </div>
      <div className={classes.list}>
        {categories.map(category => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  )
}
