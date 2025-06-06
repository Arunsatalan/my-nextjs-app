'use client';  

import Link from "next/link";
import React from "react";

import styles from './navbar.module.css'

const navbar = () => {

  const links = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "Portfolio", url: "/portfolio" },
    { id: 3, title: "Blog", url: "/blog" },
    { id: 4, title: "About", url: "/about" },
    { id: 5, title: "Contact", url: "/contacts" },
    { id: 6, title: "Dashboard", url: "/dashboard" },
  ];

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>nav</Link>

      <div className={styles.links}>
        {links.map(link => (
          <Link key={link.id} href={link.url} className={styles.links}>{link.title}</Link>
        ))}
        <button className={styles.logout} onClick={() => alert('Clicked!')}>
          logout
        </button>
      </div>
    </div>
  );
};

export default navbar;
