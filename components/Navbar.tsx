import React from 'react'
import styles from './Navbar.module.css'
import ActiveLink from './ActiveLink'

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
      {menuItems && menuItems.length > 0 ? (
        menuItems.map((menuItem) => (
          <ActiveLink key={menuItem.href} text={menuItem.text} href={menuItem.href}/>
        ))
      ) : <span>navbar doesnt exist</span>} 
    </nav>
  )
}

export default Navbar