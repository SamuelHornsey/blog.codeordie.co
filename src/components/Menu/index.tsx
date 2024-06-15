import React from "react";
import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";

import { PostDocument } from "../../../prismicio-types";

import styles from "./index.module.css";

export default function Menu({ latest }: { latest: PostDocument }) {
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
          <PrismicNextLink className={styles.link} document={latest}>Latest</PrismicNextLink>
        </li>
        <li className={styles.element}>
          <Link className={styles.link} href="https://github.com/SamuelHornsey/blog.codeordie.co" target="_blank">Github</Link>
        </li>
      </ul>
    </div>
  )
}