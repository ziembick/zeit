'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import { Header as HeaderType } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
import { Button } from '../../Button'
import { CartLink } from '../../CartLink'
import { CMSLink } from '../../Link'

import classes from './index.module.scss'
import Image from 'next/image'

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navItems = header?.navItems || [];
  const { user } = useAuth();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle search functionality here, e.g., redirect to search results page or trigger a search API call
    // console.log('Search query:', searchQuery);
  };

  return (
    <nav className={[classes.nav, user === undefined && classes.hide].filter(Boolean).join(' ')}>
      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} appearance="none" />;
      })}
      <CartLink />
      {/* <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
          className={classes.searchInput}
        />
        <button type="submit">Search</button>
      </form> */}
      {user && (
        <Link href="/account">
          <Image src="/user2.png" alt="User Image" width={19} height={19} />
        </Link>
      )}
      {!user && (
        <Button
          el="link"
          href="/login"
          appearance="none"
          onClick={() => (window.location.href = '/login')}
          className={classes.buttonCustom}
        >
          <Image src="/user.png" alt="User login" width={19} height={19} />
        </Button>
      )}
      {/* {user && <CartLink />} */}
    </nav>
  );
};
