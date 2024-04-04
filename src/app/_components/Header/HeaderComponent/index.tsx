'use client'

import React, { useState } from 'react'
import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'
import Link from 'next/link'

import classes from './index.module.scss'
import Image from 'next/image'
import { HeaderNav } from '../Nav'
import { noHeaderFooterUrls } from '../../../constants'
import { usePathname } from 'next/navigation'
import { NavItem } from './nav-item'
import MobileNav from '../MobileNav'

const NAV_ITEMS = [
  {
    label: 'SHOP ALL',
    href: '/products',
  },
  {
    label: 'LOOKBOOK',
    href: '/lookbook',
  },
  {
    label: 'INSIDE ZEIT',
    href: '/inside',
  },

  {
    label: 'FALE CONOSCO',
    href: '/contato',
  },
]

export default function HeaderComponent({ header }: { header: Header }) {
  const pathname = usePathname()

  return (
    <nav
      className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.hide]
        .filter(Boolean)
        .join(' ')}
    >
      <Gutter className={classes.wrap}>
        <MobileNav header={header} />
        <Link href="/">
          <Image
            src="/zeit-logo.png"
            alt="Logo"
            width={170}
            height={50}
            className={classes.imagem}
          />
        </Link>
        <nav className={classes.navItems}>
          {NAV_ITEMS.map(item => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
        <HeaderNav header={header} />
      </Gutter>
    </nav>
  )
}
