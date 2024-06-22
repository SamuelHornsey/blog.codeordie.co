import { Metadata } from "next";

import { PrismicRichText, JSXMapSerializer } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";

import Container from "@/components/Container";
import Posts from "@/components/Posts";


import styles from "./index.module.css";

// This component renders your homepage.
//
// Use Next's generateMetadata function to render page metadata.
//
// Use the SliceZone to render the content of the page.

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client.getSingle("home");

  return {
    title: prismic.asText(home.data.title),
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title ?? undefined,
      images: [{ url: home.data.meta_image.url ?? "" }],
    },
  };
}

const components: JSXMapSerializer = {
  paragraph: ({ children }) => {
    return <p className={styles.headline}>{children}</p>
  },
  em: ({ children }) => {
    return <span className={styles.highlight}>{children}</span>
  },
  strong: ({ children }) => {
    return <span className={styles.bold}>{children}</span>
  }
};


export default async function Index() {
  // The client queries content from the Prismic API
  const client = createClient();
  const home = await client.getSingle("home");

  return (
    <>
      <Container>
        <div className={styles.hero}>
          <PrismicRichText field={home.data.headline} components={components}></PrismicRichText>
        </div>
      </Container>
      <Container>
        <div className={styles.posts}>
          <Posts />
        </div>
      </Container>
    </>
  );
}
