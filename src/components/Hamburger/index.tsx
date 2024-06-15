'use client'

import React, { useState, useEffect, createRef } from "react";
import Image from "next/image";

import Menu from "../Menu";
import { PostDocument } from "../../../prismicio-types";

import styles from "./index.module.css";

import hamburger from "./hamburger.png";

export default function Hamburger({ latest }: { latest: PostDocument }) {
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
  }, [menu, ref])

  const toggleMenu = () => {
    setMenu(!menu);
  }

  return (
    <>
      <Image ref={ref} onClick={toggleMenu} className={styles.hamburger} src={hamburger} alt="Hamburger Menu" />
      {menu ? <Menu latest={latest} /> : <></>}
    </>
  )
}