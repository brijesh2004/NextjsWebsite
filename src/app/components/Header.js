import React from 'react'
import style from '@/app/style/navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Nav from './Nav';
const Header = () => {
  return (
    
      <header className={style.main_header}>
       <div className={style.navbar_brand}>
        <Link href="/">
         <Image src="/logo.png" alt='logo' width={150} height={70}/>
        </Link>
       </div>
       <Nav></Nav>
      </header>
   
  )
}

export default Header
