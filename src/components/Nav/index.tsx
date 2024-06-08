'use client';

import React, { useState, useEffect, createRef } from "react";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/Container";

import styles from "./index.module.css";

import exodia from "./exodia.gif";
import hamburger from "./hamburger.png";

function Menu() {
  return (
    <div className={styles.menu}>
      <ul className={styles.list}>
        <li className={styles.element}>
          <Link className={styles.link} href="/">Home</Link>
        </li>
        <li className={styles.element}>
          <Link className={styles.link} href="/about">About</Link>
        </li>
        <li className={styles.element}>
          <Link className={styles.link} href="/">Latest</Link>
        </li>
        <li className={styles.element}>
          <Link className={styles.link} href="https://github.com/SamuelHornsey/blog.codeordie.co" target="_blank">Github</Link>
        </li>
      </ul>
    </div>
  )
}

export default function Nav() {
  const [menu, setMenu] = useState(false);
  const ref = createRef<HTMLImageElement>();

  useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      if (e.target !== ref.current) {
        setMenu(false);
      }
    }

    window.addEventListener('click', closeMenu);

    return () => {
      window.removeEventListener('click', closeMenu);
    }
  }, [menu])

  const toggleMenu = () => {
    setMenu(!menu);
  }

  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles.inner}>
          <Link href={"/"}>
            <Image className={styles.exodia} src={exodia} alt="Code Or Die" />
          </Link>
          <div className={styles.title}>
            <h3 className={styles.heading}>Code Or</h3>
            <h3 className={styles.heading}><span className={styles.strike}>Die</span> Bloggggggg.</h3>
          </div>
          <Image ref={ref} onClick={toggleMenu} className={styles.hamburger} src={hamburger} alt="Hamburger Menu" />
          {menu ? <Menu /> : <></>}
        </div>
      </Container>
    </nav>
  )
}