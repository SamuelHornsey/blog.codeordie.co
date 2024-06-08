import React from "react";

import Link from "next/link";

import Container from "../Container";

import styles from "./index.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.block}>
            <h4 className={styles.heading}>THis is a footer</h4>
            <ul className={styles.links}>
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
          <div className={styles.block}>
            <h4 className={`${styles.heading} ${styles.right}`}>Credits.</h4>
            <p className={styles.content}>This has been the code or die blog. Developed by Samuel Hornsey. You can find my Github here or my Website here.</p>
          </div>
        </div>
      </Container>
    </div>
  )
}