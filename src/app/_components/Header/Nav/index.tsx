'use client'

import React from 'react'
import Link from 'next/link'

import { Header as HeaderType } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
import { Button } from '../../Button'
import { CartLink } from '../../CartLink'
import { CMSLink } from '../../Link'

import classes from './index.module.scss'
import Image from 'next/image'

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []
  const { user } = useAuth()

  return (
    <nav className={[classes.nav, user === undefined && classes.hide].filter(Boolean).join(' ')}>
      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} appearance="none" />
      })}
      <CartLink />
      {user && (
        <Link href="/account">
          <Image src="/user2.png" alt="User Image" width={19} height={19} />
        </Link>
      )}
      {!user && (
        <Button
          el="link"
          href="/login"
          // label="Login"
          appearance="none"
          onClick={() => (window.location.href = '/login')}
          className={classes.buttonCustom}
        >
          <Image src="/user.png" alt="User login" width={19} height={19} />
        </Button>
      )}
      {/* {user && <CartLink />} */}
    </nav>
  )
}
