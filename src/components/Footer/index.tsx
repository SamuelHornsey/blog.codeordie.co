import React from "react";

import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";
import { createClient } from "@/prismicio";

import Container from "../Container";

import styles from "./index.module.css";

export default async function Footer() {
  const client = createClient();
  const posts = await client.getAllByType("post", {
    orderings: {
      field: "document.first_publication_date",
      direction: "desc"
    },
    limit: 1
  });
  const latest = posts[0];

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
                <Link className={styles.link} href="/archive">Archive</Link>
              </li>
              <li className={styles.element}>
                <PrismicNextLink className={styles.link} document={latest}>Latest</PrismicNextLink>
              </li>
              <li className={styles.element}>
                <Link className={styles.link} href="https://github.com/SamuelHornsey/blog.codeordie.co" target="_blank">Github</Link>
              </li>
            </ul>
          </div>
          <div className={styles.block}>
            <h4 className={`${styles.heading} ${styles.right}`}>Credits.</h4>
            <p className={styles.content}>This has been the code or die blog. Developed by Samuel Hornsey.
              You can find my Github <Link href="https://github.com/SamuelHornsey/blog.codeordie.co" target="_blank">here</Link> or my Website <Link href="https://samuelhornsey.com" target="_blank">here</Link>.</p>
          </div>
        </div>
      </Container>
    </div>
  )
}