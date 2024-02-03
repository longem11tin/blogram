import React from 'react';
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import AuthLink from "@/components/AuthLink/AuthLink"

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}> 
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        
      </div>
      <div className={styles.logo}>
        <Link href='/'>Blogram</Link>
      </div>
      <div className={styles.links} > 
        <ThemeToggle />
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/" className={styles.link}>News</Link>
        <Link href="/" className={styles.link}>About</Link>
        <AuthLink />
      </div>
    </div>
  )
}

export default NavBar