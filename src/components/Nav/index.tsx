import React from "react";
import Image from "next/image";
import Link from "next/link";

import { createClient } from "@/prismicio";
import Container from "@/components/Container";
import Hamburger from "../Hamburger";

import styles from "./index.module.css";

import exodia from "./exodia.gif";


export default async function Nav() {
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

          <Hamburger latest={latest} />
        </div>
      </Container>
    </nav>
  )
}