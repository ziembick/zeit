'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import classes from './index.module.scss'
import { HR } from '../../HR'
import Image from 'next/image'

export default function MobileNav({ header }) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)

  function showSideBar() {
    setIsSideBarOpen(prevState => !prevState)
  }

  return (
    <nav className={classes.navBar}>
      <ul className={classes.ulBar}>
        {/* <li className={classes.liBar}>
          <Link href="/products" className={classes.links}>
            SHOP
          </Link>
        </li>
        <li className={classes.liBar}>
          <Link href="/lookbook" className={classes.links}>
            LOOKBOOK
          </Link>
        </li>
        <li className={classes.liBar}>
          <Link href="/inside" className={classes.links}>
            INSIDE ZEIT
          </Link>
        </li>
        <li className={classes.liBar}>
          <Link href="/contact" className={classes.links}>
            FALE CONOSCO
          </Link>
        </li> */}
        <li className={classes.liBar}>
          <Link href="#" onClick={showSideBar} className={classes.linkBar}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </Link>
        </li>
      </ul>
      <ul className={`${classes.ulBarSideBar} ${isSideBarOpen ? classes.open : ''}`}>
        <li className={classes.liBarSideBar}>
          <Link
            href="#"
            onClick={showSideBar}
            className={`${classes.linksSideBar} ${isSideBarOpen ? classes.close : ''}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </Link>
        </li>
        <li className={classes.liBarSideBar}>
          <Link href="/" className={classes.linksSideBar}>
            HOME
          </Link>
        </li>
        <li className={classes.liBarSideBar}>
          <Link href="/products" className={classes.linksSideBar}>
            SHOP ALL
          </Link>
        </li>
        <li className={classes.liBarSideBar}>
          <Link href="/lookbook" className={classes.linksSideBar}>
            LOOKBOOK
          </Link>
        </li>
        <li className={classes.liBarSideBar}>
          <Link href="/inside" className={classes.linksSideBar}>
            INSIDE ZEIT
          </Link>
        </li>
        <li className={classes.liBarSideBar}>
          <Link href="/contact" className={classes.linksSideBar}>
            FALE CONOSCO
          </Link>
        </li>
        <li className={classes.liBarSideBar}>
          <Link href="https://www.instagram.com">
            <Image src="/instagram.png" alt="Instagram" width={30} height={30} className={classes.imagens} />
          </Link>
        </li>
      </ul>
    </nav>
  )
}
